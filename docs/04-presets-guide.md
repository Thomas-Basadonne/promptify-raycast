# Presets Guide

Understand and master Promptify's three specialized preset types to get the best results for different use cases.

## 📋 Overview

Promptify includes three carefully crafted presets, each optimized for specific types of AI interactions:

- **🎯 General**: Structure any prompt with clear objectives and context
- **🎨 Images**: Optimize for image generation models with visual specifications  
- **💻 Code**: Technical prompts with requirements and implementation details

## 🎯 General Enhancement Preset

### When to Use
- Blog posts and articles
- Email campaigns  
- Social media content
- Creative writing
- Research requests
- General AI conversations

### Output Structure
```markdown
# 🎯 Objective
[Clear, specific goal of what you want to achieve]

# 📋 Context  
[Relevant background information, audience, tone]

# 🎨 Format & Style
[Desired output format, length, style requirements]

# ✅ Success Criteria
[How to know if the response meets requirements]
```

### Detailed Examples

#### Blog Post Enhancement
```
Input: "Write about remote work"

Enhanced Output:
# 🎯 Objective
Create an informative guide about effective remote work practices for new remote employees

# 📋 Context
Target audience: Professionals transitioning to remote work for the first time
Tone: Helpful and encouraging, professional but approachable
Focus: Practical advice and real-world solutions

# 🎨 Format & Style
Blog post format, 1200-1500 words, structured with:
- Engaging introduction with statistics
- 5-7 main sections with actionable tips
- Bullet points for key takeaways
- Conclusion with next steps

# ✅ Success Criteria
- Addresses common remote work challenges
- Provides specific, actionable advice
- Includes tools and resource recommendations
- Easy to scan and implement
- Engaging tone that reduces anxiety about remote work transition
```

#### Email Campaign Enhancement
```
Input: "Newsletter about new features"

Enhanced Output:
# 🎯 Objective
Create a compelling product update newsletter that showcases new features and drives user engagement

# 📋 Context
Product: SaaS productivity tool with 10k+ active users
Audience: Existing subscribers who use the product regularly
Timing: Monthly feature update newsletter
Brand voice: Friendly, helpful, innovation-focused

# 🎨 Format & Style
Email newsletter format with:
- Compelling subject line suggestions
- Personal greeting from founder/team
- Feature highlights with benefits (not just features)
- Visual callouts for key improvements
- Clear CTAs for feature exploration
- User testimonial or success story

# ✅ Success Criteria
- High open rate (>25% based on industry average)
- Increased feature adoption within 7 days
- Positive reply sentiment
- Clear value communication for each feature
- Drives traffic to specific product areas
```

### Tips for Better General Enhancements

1. **Be Specific About Audience**: "Marketing professionals" vs "people interested in marketing"
2. **Include Tone Requirements**: Professional, casual, technical, beginner-friendly
3. **Specify Length**: Word count, reading time, or section requirements
4. **Add Context**: Industry, current events, specific use case

## 🎨 Images Enhancement Preset

### When to Use
- Midjourney prompts
- DALL-E generation
- Stable Diffusion
- Adobe Firefly
- Any AI image generation tool

### Output Structure
```markdown
**Subject:** [Main focus and content of the image]
**Style:** [Art style, technique, or aesthetic approach]
**Composition:** [Framing, perspective, and layout]
**Lighting:** [Type, quality, and direction of lighting]
**Color:** [Color palette, mood, and saturation]
**Details:** [Specific elements, textures, and refinements]
**Camera/Lens:** [Photography specifications if applicable]
**Quality Tags:** [Technical quality and resolution descriptors]

**Negative Prompt:** [Elements to avoid in the generation]
```

### Detailed Examples

#### Product Photography Enhancement
```
Input: "Professional photo of smartphone"

Enhanced Output:
**Subject:** Latest flagship smartphone positioned at 45-degree angle on clean surface
**Style:** Commercial product photography, minimalist aesthetic, Apple-style clean presentation
**Composition:** Centered product with rule of thirds, shallow depth of field, clean negative space
**Lighting:** Soft, diffused studio lighting with key light from upper left, subtle fill light from right, rim lighting to separate from background
**Color:** Neutral color palette with deep blacks and clean whites, subtle color temperature warmth
**Details:** Visible screen reflection, pristine surface without fingerprints, subtle shadow beneath device, premium material textures visible
**Camera/Lens:** Macro lens perspective, 85mm equivalent, f/8 for optimal sharpness, studio setup
**Quality Tags:** 8K resolution, commercial quality, pin-sharp focus, professional photography

**Negative Prompt:** cluttered background, harsh shadows, oversaturated colors, visible fingerprints, dusty surface, amateur lighting
```

#### Artistic Illustration Enhancement
```
Input: "Fantasy forest scene"

Enhanced Output:
**Subject:** Mystical ancient forest with towering trees and ethereal light filtering through canopy
**Style:** Digital fantasy art, painterly technique inspired by Studio Ghibli and Hayao Miyazaki
**Composition:** Vertical orientation emphasizing tree height, winding path leading into distance, multiple depth layers
**Lighting:** Magical golden hour light streaming through leaves, volumetric light rays, bioluminescent elements glowing softly
**Color:** Rich emerald greens with warm golden accents, cool blue shadows, touches of magical purple and teal
**Details:** Ancient moss-covered bark texture, floating magical particles, delicate ferns and undergrowth, hidden fairy lights
**Camera/Lens:** Wide-angle perspective to capture scale, cinematic aspect ratio, slight upward angle
**Quality Tags:** Concept art quality, highly detailed, painterly textures, fantasy illustration

**Negative Prompt:** realistic photography, modern elements, harsh lighting, desaturated colors, simple trees, empty forest
```

### Advanced Image Techniques

#### Style Mixing
```
**Style:** Blend of Art Nouveau illustration with modern digital art techniques, Gustav Klimt inspired patterns with contemporary color palette
```

#### Specific Camera Effects
```
**Camera/Lens:** Tilt-shift photography effect, 35mm film grain, vintage lens aberrations, bokeh highlights
```

#### Mood and Atmosphere
```
**Color:** Moody cinematic grading, desaturated with selective color pops, film noir lighting with modern twist
```

## 💻 Code Enhancement Preset

### When to Use
- Programming tasks
- API design
- Technical specifications
- Code reviews
- Architecture planning
- DevOps configurations

### Output Structure
```markdown
# 💻 Technical Objective
[Specific programming goal or problem to solve]

# 🛠️ Technology Stack
[Languages, frameworks, tools, versions, dependencies]

# 📝 Requirements
[Functional requirements, technical constraints, specifications]

# 🎯 Expected Output
[Code format, documentation needs, deliverables]

# 🔍 Constraints & Considerations
[Performance, security, best practices, edge cases]

# 📚 Context
[Additional background, existing systems, integrations]
```

### Detailed Examples

#### React Component Enhancement
```
Input: "User profile component"

Enhanced Output:
# 💻 Technical Objective
Create a reusable UserProfile component with edit functionality and real-time updates

# 🛠️ Technology Stack
- React 18+ with TypeScript 4.9+
- React Hook Form for form management
- React Query for data fetching and caching
- Styled Components or CSS Modules for styling
- Zod for runtime validation
- React Testing Library and Jest for testing

# 📝 Requirements
- Display user information (name, email, avatar, bio)
- Toggle between view and edit modes
- Real-time validation for form fields
- Image upload functionality for avatar
- Optimistic updates with rollback on error
- Loading states and error handling
- Responsive design for mobile and desktop
- Accessibility compliance (WCAG 2.1 AA)

# 🎯 Expected Output
- Complete TypeScript React component
- Type definitions and interfaces
- Custom hooks for form logic and API calls
- Styled components with responsive design
- Unit tests with >90% coverage
- Storybook stories for documentation
- Usage examples and integration guide

# 🔍 Constraints & Considerations
- Performance: Optimize re-renders with React.memo and useMemo
- Security: Sanitize inputs, validate file uploads, handle sensitive data
- UX: Smooth transitions, clear feedback, prevent data loss
- Scalability: Extensible for additional profile fields
- Error handling: Network failures, validation errors, upload failures
- Browser compatibility: Modern browsers (last 2 versions)

# 📚 Context
Integrates with existing user management system using REST API
Part of larger dashboard application with consistent design system
Needs to work with existing authentication and authorization middleware
```

#### API Design Enhancement
```
Input: "REST API for task management"

Enhanced Output:
# 💻 Technical Objective
Design and implement a RESTful API for task management with real-time updates and team collaboration

# 🛠️ Technology Stack
- Node.js 18+ with Express.js 4.18+
- PostgreSQL 14+ with Prisma ORM
- TypeScript for type safety
- Socket.io for real-time features
- Redis for caching and session storage
- JWT for authentication
- Zod for request validation
- Jest and Supertest for testing
- Docker for containerization

# 📝 Requirements
- CRUD operations for tasks, projects, and teams
- User authentication and authorization (RBAC)
- Real-time task updates and notifications
- File attachments for tasks
- Task filtering, sorting, and search
- Activity logging and audit trails
- Rate limiting and request throttling
- API versioning support
- Comprehensive error handling

# 🎯 Expected Output
- Complete REST API with OpenAPI/Swagger documentation
- Database schema with migrations and seeders
- Authentication and authorization middleware
- Real-time WebSocket integration
- Input validation and sanitization
- Comprehensive error responses
- Unit and integration tests
- Docker configuration
- Deployment guide and environment setup

# 🔍 Constraints & Considerations
- Performance: Handle 1000+ concurrent users, optimize database queries
- Security: OWASP Top 10 compliance, input validation, SQL injection prevention
- Scalability: Stateless design, horizontal scaling capability
- Reliability: Error recovery, circuit breakers, health checks
- Monitoring: Logging, metrics, alerting integration
- Data consistency: Transaction handling, optimistic locking
- API design: RESTful principles, consistent naming, proper HTTP codes

# 📚 Context
Replaces legacy PHP application with modern architecture
Needs to integrate with existing LDAP authentication system
Will serve both web frontend and mobile applications
Requires data migration from existing MySQL database
Must maintain backwards compatibility during transition period
```

### Code-Specific Tips

1. **Version Specifications**: Always include specific versions for frameworks and tools
2. **Testing Requirements**: Specify coverage requirements and testing strategies  
3. **Performance Criteria**: Include specific performance benchmarks
4. **Security Considerations**: Address common security vulnerabilities
5. **Documentation Needs**: Specify API docs, code comments, README requirements

## 🎯 Choosing the Right Preset

### Decision Matrix

| Use Case | General | Images | Code |
|----------|---------|--------|------|
| Blog post | ✅ Primary | ❌ | ❌ |
| Social media | ✅ Primary | 🟡 Visuals | ❌ |
| Midjourney prompt | ❌ | ✅ Primary | ❌ |
| React component | 🟡 Planning | ❌ | ✅ Primary |
| Email campaign | ✅ Primary | 🟡 Images | ❌ |
| API documentation | 🟡 Overview | ❌ | ✅ Primary |
| Creative writing | ✅ Primary | 🟡 Inspiration | ❌ |
| Technical specification | 🟡 General | ❌ | ✅ Primary |

### When to Combine Presets

Sometimes you need multiple perspectives:

1. **Product Launch**: General (marketing copy) + Images (visuals) + Code (technical specs)
2. **Tutorial Content**: General (structure) + Code (examples)
3. **Design System**: Images (components) + Code (implementation)

### Custom Workflows

#### Multi-Step Enhancement
```
Step 1: "Mobile app for fitness tracking" → General
Step 2: Use output → Images (for UI mockups)
Step 3: Use output → Code (for technical architecture)
```

#### Iterative Refinement
```
Round 1: Basic input → Enhanced output
Round 2: Enhanced output as new input → More detailed output
Round 3: Specific aspects → Final refinement
```

## 📈 Measuring Preset Effectiveness

### Quality Indicators

**General Preset Success**:
- ✅ Clear, actionable objectives
- ✅ Well-defined target audience
- ✅ Specific format requirements
- ✅ Measurable success criteria

**Images Preset Success**:
- ✅ Detailed visual specifications
- ✅ Technical parameters included
- ✅ Style and mood clearly defined
- ✅ Negative prompts prevent common issues

**Code Preset Success**:
- ✅ Complete technical requirements
- ✅ Specific technology versions
- ✅ Security and performance considerations
- ✅ Testing and documentation needs

### Optimization Tips

1. **Save Successful Patterns**: Export prompts that work well
2. **Build Template Library**: Create variations for common use cases
3. **Track Results**: Note which enhancements produce the best AI outputs
4. **Iterate and Improve**: Refine your input based on results

---

**Next**: Learn about [History Management](05-history-management.md) to organize and reuse your successful prompts!
