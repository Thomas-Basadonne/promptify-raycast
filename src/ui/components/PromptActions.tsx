import { 
  Action, 
  ActionPanel, 
  Clipboard, 
  showToast, 
  Toast,
  getPreferenceValues 
} from '@raycast/api';
import React from 'react';
import { SUCCESS_MESSAGES } from '../../core/constants';

interface PromptActionsProps {
  input: string;
  output: string;
  onSave?: () => Promise<void>;
  onExportJson?: () => string;
  disabled?: boolean;
}

interface UIPreferences {
  autoPaste: boolean;
}

export function PromptActions({ 
  input, 
  output, 
  onSave, 
  onExportJson, 
  disabled = false 
}: PromptActionsProps) {
  const preferences = getPreferenceValues<UIPreferences>();

  const handleCopyEnhanced = async () => {
    if (disabled || !output) return;
    
    await Clipboard.copy(output);
    await showToast({
      style: Toast.Style.Success,
      title: SUCCESS_MESSAGES.COPIED_TO_CLIPBOARD,
      message: 'Enhanced prompt copied'
    });

    // Auto-paste if enabled
    if (preferences.autoPaste) {
      await Clipboard.paste(output);
      await showToast({
        style: Toast.Style.Success,
        title: SUCCESS_MESSAGES.PASTED_SUCCESSFULLY,
        message: 'Enhanced prompt pasted'
      });
    }
  };

  const handleCopyOriginal = async () => {
    if (disabled || !input) return;
    
    await Clipboard.copy(input);
    await showToast({
      style: Toast.Style.Success,
      title: SUCCESS_MESSAGES.COPIED_TO_CLIPBOARD,
      message: 'Original prompt copied'
    });
  };

  const handlePaste = async () => {
    if (disabled || !output) return;
    
    await Clipboard.paste(output);
    await showToast({
      style: Toast.Style.Success,
      title: SUCCESS_MESSAGES.PASTED_SUCCESSFULLY,
      message: 'Enhanced prompt pasted to active app'
    });
  };

  const handleExportJson = async () => {
    if (disabled || !output || !onExportJson) return;
    
    const jsonData = onExportJson();
    if (jsonData && jsonData.trim() !== "") {
      await Clipboard.copy(jsonData);
      await showToast({
        style: Toast.Style.Success,
        title: SUCCESS_MESSAGES.COPIED_TO_CLIPBOARD,
        message: "JSON data copied",
      });
    }
  };

  const handleSave = async () => {
    if (disabled || !onSave) return;
    
    try {
      await onSave();
      await showToast({
        style: Toast.Style.Success,
        title: SUCCESS_MESSAGES.SAVED_TO_HISTORY,
        message: 'Prompt saved successfully'
      });
    } catch (error) {
      await showToast({
        style: Toast.Style.Failure,
        title: 'Save Failed',
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };

  return (
    <ActionPanel>
      <ActionPanel.Section title="Copy & Paste">
        <Action
          title="Copy Enhanced Prompt"
          onAction={handleCopyEnhanced}
          shortcut={{ modifiers: ['cmd'], key: 'c' }}
        />
        {preferences.autoPaste ? null : (
          <Action
            title="Paste Enhanced Prompt"
            onAction={handlePaste}
            shortcut={{ modifiers: ['cmd'], key: 'v' }}
          />
        )}
        <Action
          title="Copy Original Prompt"
          onAction={handleCopyOriginal}
          shortcut={{ modifiers: ['cmd', 'shift'], key: 'c' }}
        />
      </ActionPanel.Section>

      <ActionPanel.Section title="Export & Save">
        {onExportJson && (
          <Action
            title="Copy as JSON"
            onAction={handleExportJson}
            shortcut={{ modifiers: ['cmd'], key: 'j' }}
          />
        )}
        {onSave && (
          <Action
            title="Save to History"
            onAction={handleSave}
            shortcut={{ modifiers: ['cmd'], key: 's' }}
          />
        )}
      </ActionPanel.Section>
    </ActionPanel>
  );
}
