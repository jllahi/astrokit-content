# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

AstroKit Content is an Astro-based content management system featuring:

- Static site generation with TypeScript support
- Content collections for posts, pages, and categories
- Keystatic CMS integration for content management
- Astro DB for dynamic features (likes, guestbook)
- TailwindCSS for styling with component variants
- Vercel deployment with analytics

## Development Commands

Essential commands for development:

```bash
# Development
pnpm install              # Install dependencies
pnpm run dev             # Start dev server at localhost:4321
pnpm run start           # Alternative to dev

# Building & Testing
pnpm run build           # Clean build with type checking
pnpm run build:remote    # Build with remote DB
pnpm run preview         # Preview build locally
pnpm run check           # Type check with watch mode

# Code Quality
pnpm run lint            # ESLint with auto-fix
pnpm run format          # Prettier formatting
pnpm run lint:inspect    # Open ESLint config inspector

# Utilities
pnpm run clean           # Clean dist, .vercel, .astro folders
pnpm run serve           # Serve built Vercel output
```

## Architecture Overview

### Content Management Strategy

- **Dual CMS approach**: Keystatic for rich editing + Astro Content Collections for type safety
- **Content types**: Posts (MDX with frontmatter), Pages (simpler MDX), Categories (organizational)
- **Storage**: Local development, GitHub-based for production (Keystatic handles branching)
- **Content schema validation**: Zod schemas in `src/content/config.ts` ensure data integrity

### Database Architecture

- **Astro DB**: Lightweight SQLite-based solution for dynamic features
- **Tables**: `Like` (post engagement), `Guestbook` (visitor messages)
- **Actions**: Server-side form handling in `src/actions/index.ts`
- **Seeding**: Database initialization via `db/seed.ts`

### Routing & Page Generation

- **File-based routing**: Standard Astro approach with dynamic routes
- **Pagination**: Custom utilities in `src/utils/` for paginated post listings
- **Dynamic routes**: `[...slug].astro` patterns for posts and categories
- **API routes**: Like tracking at `src/pages/api/likes/[slug].ts`

### Component System

- **Layout**: Single base layout in `src/layouts/Layout.astro`
- **Content components**: Specialized components in `src/components/content/`
- **Embed components**: YouTube, Spotify, custom embeds for rich content
- **Keystatic blocks**: Custom MDX components for CMS content editing

### Styling Architecture

- **TailwindCSS**: Utility-first with custom configuration
- **No @apply**: Follows rule to avoid Tailwind's @apply directive
- **Component variants**: Uses `tailwind-variants` for consistent component styling
- **Responsive design**: Mobile-first approach with utility classes

## Key Files & Directories

### Configuration

- `astro.config.mjs` - Astro configuration with integrations
- `keystatic.config.tsx` - CMS configuration and content schema
- `tailwind.config.ts` - TailwindCSS configuration
- `frontmatter.json` - FrontMatter CMS configuration (alternative editor)

### Content Management

- `src/content/` - Content collections (posts, pages, categories)
- `src/data/` - Site configuration and static data
- `src/actions/` - Server-side form handling
- `db/` - Database configuration and seeding

### Utilities & Utils

- `src/utils/` - Content processing, pagination, filtering utilities
- Key functions: `getSortedPosts`, `getPostsByCategory`, `getPagination`

## Content Workflow

### Adding Content

1. **Via Keystatic**: Access `/keystatic` route for rich CMS editing
2. **Direct editing**: Edit MDX files in `src/content/posts/`
3. **Categories**: Must be created in `src/content/categories/` before use
4. **Images**: Store in `src/assets/images/posts/` with proper references

### Content Schema Requirements

- **Posts**: title, description, date, image, category (required); tags, featured, draft (optional)
- **Pages**: title, description (required); date, image (optional)
- **Categories**: title, description (required)

### Custom MDX Components

Available in Keystatic editor and MDX files:

- `<YouTube id="video_id" title="Video Title" />` - Embedded video
- `<Spotify playlist="playlist_id" title="Playlist Name" />` - Spotify embed
- `<LinkPreview id="link_id" title="Link Title" />` - Link previews

## Database Operations

### Development Database

```bash
# Database is handled automatically in development
pnpm run dev  # Astro DB runs in LibSQL local mode
```

### Production Database

- Uses Vercel-hosted database automatically
- Seeded via `db/seed.ts` on first deployment
- Actions handle form submissions (guestbook, likes)

## Deployment Notes

### Vercel Configuration

- Adapter: `@astrojs/vercel` with web analytics enabled
- Output: Static by default, server functions for API routes
- Environment: Production uses GitHub-based Keystatic storage

### Build Process

1. Type checking with Astro's built-in checker
2. Static site generation with dynamic API routes
3. Asset optimization via Astro's built-in pipeline
4. Vercel deployment with analytics injection

## Development Tips

### Content Development

- Use Keystatic CMS (`/keystatic`) for rich content editing experience
- FrontMatter extension provides VS Code-based content management
- Content collections provide full TypeScript support for frontmatter

### Component Development

- Follow Astro's island architecture - minimize client-side JavaScript
- Use `client:*` directives sparingly and appropriately
- Prefer Astro components over framework components when possible

### Performance Considerations

- Images automatically optimized by Astro's image service
- MDX compilation happens at build time
- Database queries cached during static generation where possible
