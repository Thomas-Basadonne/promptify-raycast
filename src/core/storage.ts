import { LocalStorage, getPreferenceValues } from '@raycast/api';
import { HistoryItem, AppSettings, PresetConfig, StorageError } from './types';
import { STORAGE_KEYS, VALIDATION } from './constants';
import { generateId } from '../utils/helpers';

export class StorageManager {
  // History operations
  static async saveToHistory(item: Omit<HistoryItem, 'id' | 'timestamp'>): Promise<string> {
    try {
      const preferences = getPreferenceValues<{ maxHistoryItems: string }>();
      const maxItems = Math.min(
        parseInt(preferences.maxHistoryItems || '50'),
        VALIDATION.MAX_HISTORY_ITEMS_LIMIT
      );

      const id = generateId('hist');
      const historyItem: HistoryItem = {
        ...item,
        id,
        timestamp: Date.now(),
      };

      const history = await this.getHistory();
      const updatedHistory = [historyItem, ...history].slice(0, maxItems);

      await LocalStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(updatedHistory));
      return id;
    } catch (error) {
      throw new StorageError(`Failed to save to history: ${error}`);
    }
  }

  static async getHistory(limit?: number): Promise<HistoryItem[]> {
    try {
      const historyJson = await LocalStorage.getItem(STORAGE_KEYS.HISTORY);
      if (!historyJson) return [];

      const history: HistoryItem[] = JSON.parse(historyJson as string);
      return limit ? history.slice(0, limit) : history;
    } catch (error) {
      throw new StorageError(`Failed to load history: ${error}`);
    }
  }

  static async deleteHistoryItem(id: string): Promise<void> {
    try {
      const history = await this.getHistory();
      const updatedHistory = history.filter(item => item.id !== id);
      await LocalStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(updatedHistory));
    } catch (error) {
      throw new StorageError(`Failed to delete history item: ${error}`);
    }
  }

  static async clearHistory(): Promise<void> {
    try {
      await LocalStorage.removeItem(STORAGE_KEYS.HISTORY);
    } catch (error) {
      throw new StorageError(`Failed to clear history: ${error}`);
    }
  }

  // Settings operations
  static async getSettings(): Promise<Partial<AppSettings>> {
    try {
      const settingsJson = await LocalStorage.getItem(STORAGE_KEYS.SETTINGS);
      return settingsJson ? JSON.parse(settingsJson as string) : {};
    } catch (error) {
      throw new StorageError(`Failed to load settings: ${error}`);
    }
  }

  static async updateSettings(settings: Partial<AppSettings>): Promise<void> {
    try {
      const currentSettings = await this.getSettings();
      const updatedSettings = { ...currentSettings, ...settings };
      await LocalStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(updatedSettings));
    } catch (error) {
      throw new StorageError(`Failed to update settings: ${error}`);
    }
  }

  // Custom presets
  static async saveCustomPreset(preset: PresetConfig): Promise<void> {
    try {
      const presets = await this.getCustomPresets();
      const updatedPresets = presets.filter(p => p.id !== preset.id);
      updatedPresets.push({ ...preset, isBuiltIn: false });
      
      await LocalStorage.setItem(STORAGE_KEYS.CUSTOM_PRESETS, JSON.stringify(updatedPresets));
    } catch (error) {
      throw new StorageError(`Failed to save custom preset: ${error}`);
    }
  }

  static async getCustomPresets(): Promise<PresetConfig[]> {
    try {
      const presetsJson = await LocalStorage.getItem(STORAGE_KEYS.CUSTOM_PRESETS);
      return presetsJson ? JSON.parse(presetsJson as string) : [];
    } catch (error) {
      throw new StorageError(`Failed to load custom presets: ${error}`);
    }
  }

  static async deleteCustomPreset(id: string): Promise<void> {
    try {
      const presets = await this.getCustomPresets();
      const updatedPresets = presets.filter(p => p.id !== id);
      await LocalStorage.setItem(STORAGE_KEYS.CUSTOM_PRESETS, JSON.stringify(updatedPresets));
    } catch (error) {
      throw new StorageError(`Failed to delete custom preset: ${error}`);
    }
  }
}
