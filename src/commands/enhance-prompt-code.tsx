import { showToast, Toast } from "@raycast/api";
import { useEffect, useState } from "react";
import { useClipboard, useProvider, useHistory, usePreferences, PromptPreview, PromptActions } from "../ui";
import { PresetManager, BUILT_IN_PRESETS } from "../core/presets";
import { ClipboardError, ProviderError, NetworkError } from "../core/types";

export default function EnhancePromptCode() {
  const [output, setOutput] = useState<string | null>(null);
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { clipboardText, isLoading: clipboardLoading, error: clipboardError } = useClipboard();
  const { provider, isProviderReady, providerError } = useProvider();
  const { saveToHistory, exportAsJson, isSaving } = useHistory();
  const { saveToHistory: shouldSaveToHistory } = usePreferences();

  const preset = BUILT_IN_PRESETS.code;
  const isLoading = clipboardLoading || !isProviderReady || isEnhancing;

  useEffect(() => {
    if (!clipboardText || !provider || !isProviderReady || clipboardError || providerError) {
      return;
    }

    enhancePrompt();
  }, [clipboardText, provider, isProviderReady, clipboardError, providerError]);

  const enhancePrompt = async () => {
    if (!provider || !clipboardText) return;

    try {
      setIsEnhancing(true);
      setError(null);

      // Validate input
      const validation = PresetManager.validatePrompt(clipboardText);
      if (!validation.isValid) {
        throw new Error(validation.error);
      }

      // Enhance the prompt
      const startTime = Date.now();
      const enhancedPrompt = await provider.enhance(clipboardText, preset);
      const processingTime = Date.now() - startTime;

      setOutput(enhancedPrompt);

      // Save to history if enabled
      if (shouldSaveToHistory) {
        await saveToHistory(
          clipboardText,
          enhancedPrompt,
          preset.id,
          {
            provider: provider.name,
            processingTime,
          }
        );
      }

    } catch (err) {
      let errorMessage = "An unexpected error occurred";
      
      if (err instanceof ClipboardError) {
        errorMessage = err.message;
      } else if (err instanceof ProviderError) {
        errorMessage = `${err.message}\n\nTips:\n- Make sure Ollama is running: \`ollama serve\`\n- Check your model is available: \`ollama list\``;
      } else if (err instanceof NetworkError) {
        errorMessage = `${err.message}\n\nPlease check your network connection and Ollama configuration.`;
      } else if (err instanceof Error) {
        errorMessage = err.message;
      }

      setError(errorMessage);
      
      await showToast({
        style: Toast.Style.Failure,
        title: "Code Enhancement Failed",
        message: errorMessage,
      });
    } finally {
      setIsEnhancing(false);
    }
  };

  const handleSave = async () => {
    if (!output || !clipboardText) return;
    
    await saveToHistory(
      clipboardText,
      output,
      preset.id,
      {
        provider: provider?.name || 'unknown',
        processingTime: 0,
      }
    );
  };

  const handleExportJson = () => {
    if (!output || !clipboardText) return "";
    
    const jsonData = exportAsJson(clipboardText, output, preset.id);
    return jsonData;
  };

  // Determine the final error to show
  const finalError = clipboardError || providerError || error;

  return (
    <PromptPreview
      input={clipboardText}
      output={output}
      isLoading={isLoading}
      error={finalError || undefined}
      presetName={preset.name}
      actions={
        output && !finalError ? (
          <PromptActions
            input={clipboardText}
            output={output}
            onSave={shouldSaveToHistory ? undefined : handleSave}
            onExportJson={handleExportJson}
            disabled={isSaving}
          />
        ) : undefined
      }
    />
  );
}
