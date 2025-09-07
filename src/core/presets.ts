import { PresetConfig } from './types';
import { StorageManager } from './storage';
import { validatePrompt } from '../ui/utils/validation';

export const BUILT_IN_PRESETS: Record<string, PresetConfig> = {
  general: {
    id: 'general',
    name: 'General Enhancement',
    description: 'Structure any prompt with clear objectives, context, and constraints',
    tags: ['general', 'structure', 'clarity'],
    isBuiltIn: true,
    systemPrompt: `You are a Prompt Enhancement Expert. Your job is to take a user's rough prompt and transform it into a clear, structured, and effective prompt.

      ALWAYS structure your response with these sections:

      # 🎯 Objective
      [Clear, specific goal of what the user wants to achieve]

      # 📋 Context
      [Relevant background information and constraints]

      # 🎨 Format & Style
      [Specify desired output format, tone, length, etc.]

      # ✅ Success Criteria  
      [How to know if the response meets the requirements]

      Transform the following prompt:`,
    examples: [
      {
        input: "Write about dogs",
        expectedOutput: "# 🎯 Objective\nCreate an informative article about dogs that covers their characteristics, breeds, and care\n\n# 📋 Context\nTarget audience: Pet owners and dog enthusiasts\nTone: Friendly and informative\n\n# 🎨 Format & Style\nArticle format, 800-1000 words, with clear headings and bullet points for key information\n\n# ✅ Success Criteria\n- Covers different dog breeds\n- Includes care tips\n- Easy to read and engaging",
        description: "General topic enhancement"
      }
    ]
  },

  images: {
    id: 'images',
    name: 'Image Generation',
    description: 'Optimize prompts for image generation models (Midjourney, FLUX, Stable Diffusion)',
    tags: ['images', 'visual', 'art', 'generation'],
    isBuiltIn: true,
    systemPrompt: `You are an expert at creating prompts for image generation AI models like Midjourney, FLUX, and Stable Diffusion.

      Transform the user's prompt into a structured format with these elements:

      **Subject:** [Main focus of the image]
      **Style:** [Art style, technique, or aesthetic]
      **Composition:** [Framing, perspective, layout]
      **Lighting:** [Type and quality of lighting]
      **Color:** [Color palette and mood]
      **Details:** [Specific elements, textures, effects]
      **Camera/Lens:** [If photographic style]
      **Quality Tags:** [Technical quality descriptors]

      **Negative Prompt:** [What to avoid in the image]

      Make it detailed but concise. Focus on visual elements that AI can understand.

      Transform this prompt:`,
    examples: [
      {
        input: "A beautiful sunset",
        expectedOutput: "**Subject:** Dramatic sunset landscape with silhouetted mountains\n**Style:** Photorealistic, cinematic\n**Composition:** Wide landscape shot, rule of thirds\n**Lighting:** Golden hour, warm backlighting, dramatic sky\n**Color:** Vibrant oranges, deep purples, golden yellows\n**Details:** Layered mountain silhouettes, scattered clouds, atmospheric haze\n**Camera/Lens:** Wide-angle landscape photography, sharp focus\n**Quality Tags:** High resolution, professional photography, award-winning\n\n**Negative Prompt:** blurry, low quality, oversaturated, artificial",
        description: "Landscape image enhancement"
      }
    ]
  },

  code: {
    id: 'code',
    name: 'Code & Technical',
    description: 'Optimize prompts for coding assistance and technical tasks',
    tags: ['code', 'programming', 'technical', 'development'],
    isBuiltIn: true,
    systemPrompt: `You are a technical prompt specialist. Transform user requests into clear, specific technical prompts that will get better results from coding assistants.

      Structure your response with:

      # 💻 Technical Objective
      [Specific programming goal]

      # 🛠️ Technology Stack
      [Languages, frameworks, versions, tools]

      # 📝 Requirements
      [Functional and technical requirements]

      # 🎯 Expected Output
      [Code format: complete file, snippet, explanation, tests, etc.]

      # 🔍 Constraints & Considerations
      [Performance, security, best practices, edge cases]

      # 📚 Context
      [Additional background if needed]

      Be specific about versions, patterns, and implementation details.

      Transform this technical request:`,
    examples: [
      {
        input: "Help me with React",
        expectedOutput: "# 💻 Technical Objective\nCreate a reusable React component with proper TypeScript types\n\n# 🛠️ Technology Stack\n- React 18+\n- TypeScript 4.9+\n- Modern functional components with hooks\n\n# 📝 Requirements\n- Component should be properly typed\n- Include prop validation\n- Handle loading and error states\n- Follow React best practices\n\n# 🎯 Expected Output\n- Complete component code\n- TypeScript interface definitions\n- Usage example\n- Unit test structure\n\n# 🔍 Constraints & Considerations\n- Performance optimization with React.memo if needed\n- Accessibility compliance\n- Mobile responsiveness\n- Error boundary compatibility",
        description: "React component request enhancement"
      }
    ]
  }
};

export class PresetManager {
  static getBuiltInPresets(): PresetConfig[] {
    return Object.values(BUILT_IN_PRESETS);
  }

  static async getAllPresets(): Promise<PresetConfig[]> {
    const builtInPresets = this.getBuiltInPresets();
    const customPresets = await StorageManager.getCustomPresets();
    return [...builtInPresets, ...customPresets];
  }

  static async getPresetById(id: string): Promise<PresetConfig | null> {
    // Check built-in presets first
    if (BUILT_IN_PRESETS[id]) {
      return BUILT_IN_PRESETS[id];
    }

    // Check custom presets
    const customPresets = await StorageManager.getCustomPresets();
    return customPresets.find(preset => preset.id === id) || null;
  }

  static async saveCustomPreset(preset: Omit<PresetConfig, 'isBuiltIn'>): Promise<void> {
    const fullPreset: PresetConfig = {
      ...preset,
      isBuiltIn: false,
    };
    await StorageManager.saveCustomPreset(fullPreset);
  }

  static async deleteCustomPreset(id: string): Promise<void> {
    await StorageManager.deleteCustomPreset(id);
  }

  static validatePrompt(prompt: string) {
    return validatePrompt(prompt);
  }
}
