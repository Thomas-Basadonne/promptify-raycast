# Complete User Guide

This comprehensive guide covers every feature of Promptify, with real-world examples and advanced techniques.

## 📖 Table of Contents

1. [Understanding Prompt Enhancement](#understanding-prompt-enhancement)
2. [The Three Preset Types](#the-three-preset-types)
3. [Advanced Workflows](#advanced-workflows)
4. [History Management](#history-management)
5. [Configuration Options](#configuration-options)
6. [Best Practices](#best-practices)
7. [Integration with AI Tools](#integration-with-ai-tools)

## 🎯 Understanding Prompt Enhancement

### Why Enhance Prompts?

Raw prompts often lack structure and context, leading to:
- ❌ Vague or unfocused responses
- ❌ Missing important details
- ❌ Inconsistent output quality
- ❌ Difficulty reproducing good results

Enhanced prompts provide:
- ✅ Clear objectives and success criteria
- ✅ Proper context and constraints
- ✅ Structured format requirements
- ✅ Consistent, reproducible results

### The Enhancement Process

Promptify follows a proven framework:

1. **Objective**: What exactly do you want to achieve?
2. **Context**: What background information is relevant?
3. **Format**: How should the output be structured?
4. **Criteria**: How will you know if it's successful?

## 🎨 The Three Preset Types

### 1. General Enhancement

**Perfect for**: Articles, essays, content creation, general tasks

#### Structure
```markdown
# 🎯 Objective
[Clear, specific goal]

# 📋 Context  
[Background information, audience, tone]

# 🎨 Format & Style
[Output format, length, style requirements]

# ✅ Success Criteria
[Measurable success indicators]
```

#### Real Examples

**Example 1: Blog Post**
```
Input: "Write about productivity apps"

Enhanced:
# 🎯 Objective
Create a comprehensive review of the top 5 productivity apps for remote workers

# 📋 Context
Target audience: Remote professionals and freelancers
Tone: Professional but approachable
Focus: Apps released or updated in 2024

# 🎨 Format & Style
Blog post format, 1200-1500 words, with:
- Introduction hook
- Individual app reviews with pros/cons
- Comparison table
- Clear recommendations

# ✅ Success Criteria
- Covers 5 distinct app categories
- Includes pricing and platform information
- Provides actionable recommendations
- Engaging and easy to scan
```

**Example 2: Email Campaign**
```
Input: "Email about product launch"

Enhanced:
# 🎯 Objective
Create a compelling product launch email that drives pre-orders and builds excitement

# 📋 Context
Product: New fitness tracker with advanced health monitoring
Audience: Existing newsletter subscribers (health-conscious individuals)
Launch date: In 2 weeks

# 🎨 Format & Style
Email format with:
- Compelling subject line
- Personal greeting
- Problem/solution narrative
- Key features highlight
- Clear call-to-action
- Social proof elements

# ✅ Success Criteria
- Generates high open rates (>25%)
- Drives pre-order conversions
- Builds anticipation for launch
- Maintains brand voice and values
```

### 2. Image Enhancement

**Perfect for**: Midjourney, DALL-E, Stable Diffusion, FLUX, Adobe Firefly

#### Structure
```markdown
**Subject:** [Main focus of the image]
**Style:** [Art style, technique, aesthetic]
**Composition:** [Framing, perspective, layout]
**Lighting:** [Type and quality of lighting]
**Color:** [Color palette and mood]
**Details:** [Specific elements, textures]
**Camera/Lens:** [If photographic style]
**Quality Tags:** [Technical specifications]

**Negative Prompt:** [What to avoid]
```

#### Real Examples

**Example 1: Product Photography**
```
Input: "Coffee mug on desk"

Enhanced:
**Subject:** Premium ceramic coffee mug with steam rising, positioned on clean wooden desk
**Style:** Commercial product photography, minimalist aesthetic
**Composition:** 45-degree angle, rule of thirds, shallow depth of field
**Lighting:** Soft natural window light from left, subtle fill light on right
**Color:** Warm earth tones, cream and brown palette, soft whites
**Details:** Visible coffee bean texture on mug, subtle wood grain, clean shadows
**Camera/Lens:** Macro lens, 85mm equivalent, f/2.8 aperture
**Quality Tags:** High resolution, commercial quality, sharp focus

**Negative Prompt:** cluttered background, harsh shadows, oversaturated colors, blurry
```

**Example 2: Artistic Illustration**
```
Input: "Fantasy castle"

Enhanced:
**Subject:** Majestic fantasy castle perched on floating islands among clouds
**Style:** Digital painting, fantasy art, Studio Ghibli inspired
**Composition:** Dramatic low angle view, multiple floating islands creating depth
**Lighting:** Golden hour lighting, dramatic rim lighting on castle towers
**Color:** Ethereal blues and purples with warm golden accents
**Details:** Intricate Gothic architecture, cascading waterfalls, magical particles
**Camera/Lens:** Wide-angle perspective, cinematic composition
**Quality Tags:** 4K resolution, concept art quality, highly detailed

**Negative Prompt:** modern elements, realistic photography, dark atmosphere, low detail
```

### 3. Code Enhancement

**Perfect for**: Programming tasks, technical documentation, software requirements

#### Structure
```markdown
# 💻 Technical Objective
[Specific programming goal]

# 🛠️ Technology Stack
[Languages, frameworks, tools, versions]

# 📝 Requirements
[Functional and technical requirements]

# 🎯 Expected Output
[Code format, documentation needs]

# 🔍 Constraints & Considerations
[Performance, security, best practices]

# 📚 Context
[Additional background if needed]
```

#### Real Examples

**Example 1: React Component**
```
Input: "Shopping cart component"

Enhanced:
# 💻 Technical Objective
Create a reusable shopping cart component with real-time updates and persistence

# 🛠️ Technology Stack
- React 18+ with TypeScript
- Context API for state management
- CSS Modules or Styled Components
- Local Storage for persistence
- React Testing Library for tests

# 📝 Requirements
- Add/remove items with quantity controls
- Real-time price calculations including tax
- Persistent cart state across sessions
- Responsive design for mobile and desktop
- Accessibility compliance (WCAG 2.1)
- Loading states and error handling

# 🎯 Expected Output
- Complete React component with TypeScript interfaces
- Custom hooks for cart logic
- CSS styling with mobile-first approach
- Unit tests with >90% coverage
- Storybook stories for documentation
- Usage examples and API documentation

# 🔍 Constraints & Considerations
- Performance: Optimize for 100+ items
- Security: Validate all user inputs
- UX: Smooth animations and feedback
- Scalability: Easy to extend with new features
```

**Example 2: API Design**
```
Input: "User authentication API"

Enhanced:
# 💻 Technical Objective
Design and implement a secure RESTful API for user authentication and session management

# 🛠️ Technology Stack
- Node.js with Express.js
- PostgreSQL database with Prisma ORM
- JWT for token-based authentication
- bcrypt for password hashing
- Rate limiting with Redis
- Input validation with Joi/Zod

# 📝 Requirements
- User registration with email verification
- Secure login with password reset functionality
- JWT token refresh mechanism
- Role-based access control (RBAC)
- Session management and logout
- Account lockout after failed attempts
- Password complexity requirements

# 🎯 Expected Output
- Complete API endpoints with OpenAPI/Swagger documentation
- Database schema with migrations
- Middleware for authentication and authorization
- Comprehensive error handling
- Integration tests for all endpoints
- Docker configuration for deployment

# 🔍 Constraints & Considerations
- Security: OWASP Top 10 compliance
- Performance: Handle 1000+ concurrent users
- Scalability: Stateless design for horizontal scaling
- Monitoring: Logging and metrics integration
- Compliance: GDPR-ready data handling
```

## 🔄 Advanced Workflows

### 1. Iterative Enhancement

Use previous outputs as inputs for refinement:

```
Step 1: "Write about AI" → General Enhancement
Step 2: Copy result → Use as input for Code Enhancement
Step 3: Get technical implementation details
```

### 2. Cross-Preset Combinations

Combine different presets for comprehensive results:

```
Project: Mobile App Design
1. General: "Fitness tracking app" → Get concept
2. Images: Use concept → Get visual mockups  
3. Code: Use concept → Get technical architecture
```

### 3. Template Building

Create reusable templates:

```
1. Enhance a prompt you use frequently
2. Save the enhanced version
3. Use it as a template for similar tasks
4. Modify specific details as needed
```

## 📚 History Management

### Automatic Saving
- All enhancements are saved automatically (unless disabled)
- Maximum 100 items by default (configurable)
- Oldest items are removed when limit is reached

### Search and Filter
```
Search functionality:
- Search by original text
- Filter by preset type
- Sort by date or relevance
```

### Export Options

#### Individual Export
- **Copy JSON**: `⌘ + J` in history
- Includes metadata, timestamps, and settings

#### Bulk Export
```json
{
  "prompts": [
    {
      "id": "hist_1234567890_abc123",
      "timestamp": 1694123456789,
      "preset": "general",
      "original": "Write about dogs",
      "enhanced": "# 🎯 Objective...",
      "metadata": {
        "provider": "ollama",
        "model": "llama3.2:3b",
        "processingTime": 2341
      }
    }
  ],
  "exported_at": "2024-09-07T14:30:00Z",
  "version": "1.0.0"
}
```

## ⚙️ Configuration Options

### Provider Settings

#### Ollama Configuration
```
URL: http://localhost:11434 (default)
Model: llama3.2:3b (recommended)
Timeout: 30 seconds
```

#### Model Selection Guide
| Model | Best For | Response Time | Quality |
|-------|----------|---------------|---------|
| `llama3.2:3b` | Quick tasks, general use | Fast | Good |
| `llama3.1:8b` | Complex tasks, detailed output | Medium | Excellent |
| `mistral:7b` | Balanced performance | Medium | Very Good |
| `codellama:7b` | Code-specific tasks | Medium | Excellent (Code) |

### Behavior Settings

#### Auto Paste
- **Enabled**: Automatically pastes after copying
- **Disabled**: Manual paste required
- **Recommendation**: Disable for better control

#### History Management
- **Save to History**: Enable/disable automatic saving
- **History Limit**: 50-200 items recommended
- **Auto-cleanup**: Remove items older than X days

### UI Preferences
```
Preview Style: Markdown (default) | Plain Text
Copy Behavior: Enhanced Only | Include Original
Shortcuts: Customizable key combinations
Notifications: Success/Error toast messages
```

## 🎯 Best Practices

### Input Quality

#### Be Specific
❌ **Vague**: "Write something about technology"
✅ **Better**: "Write a tutorial about setting up CI/CD with GitHub Actions"

#### Provide Context
❌ **No context**: "Design a website"
✅ **With context**: "Design a portfolio website for a freelance photographer"

#### Choose the Right Preset
- **Content/Writing** → General
- **Visual/Design** → Images
- **Programming/Technical** → Code

### Output Optimization

#### Review and Refine
1. Read the enhanced prompt carefully
2. Identify missing elements
3. Run enhancement again with additions
4. Iterate until satisfied

#### Save Successful Patterns
- Export prompts that work well
- Build a personal template library
- Document what works for your use cases

### Workflow Integration

#### With Writing Tools
```
1. Brainstorm rough idea
2. Enhance with Promptify (General)
3. Paste into ChatGPT/Claude
4. Get initial draft
5. Refine and edit
```

#### With Design Tools
```
1. Describe visual concept
2. Enhance with Promptify (Images)
3. Generate with Midjourney/DALL-E
4. Iterate with variations
5. Final selection and editing
```

#### With Development
```
1. Define feature requirements
2. Enhance with Promptify (Code)
3. Generate initial code with GitHub Copilot
4. Review and implement
5. Test and refine
```

## 🔗 Integration with AI Tools

### ChatGPT
```
1. Enhance prompt with Promptify
2. Open ChatGPT
3. Paste enhanced prompt
4. Get structured, high-quality response
```

### Claude
```
1. Use General or Code presets
2. Claude excels with structured prompts
3. Particularly effective for analysis tasks
```

### Midjourney
```
1. Use Image preset
2. Copy enhanced prompt
3. Paste in Discord: /imagine [prompt]
4. Generate variations as needed
```

### GitHub Copilot
```
1. Use Code preset for clear requirements
2. Paste as code comments
3. Let Copilot generate implementation
4. Review and refine
```

### Notion AI
```
1. Enhance writing prompts
2. Use structured format in Notion
3. Generate content directly in your workspace
```

## 📈 Measuring Success

### Quality Indicators
- ✅ AI outputs match your expectations
- ✅ Consistent results across similar prompts
- ✅ Reduced need for follow-up clarifications
- ✅ Time saved in the overall workflow

### Tracking Improvements
1. Compare outputs before/after Promptify
2. Note which presets work best for your use cases
3. Build a collection of successful prompt patterns
4. Measure time saved in your overall workflow

---

**Next Steps**: Explore [Preset Customization](04-presets-guide.md) to create your own specialized prompt templates!
