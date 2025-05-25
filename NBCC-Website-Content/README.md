# NBCC Website Content

This folder contains all extracted content from the New Brunswick Church of Christ website (nbcc-church.org).

## Directory Structure

```
NBCC-Website-Content/
├── content/              # Extracted text content in Markdown format
│   ├── home.md          # Homepage content
│   ├── about.md         # About page content
│   ├── services.md      # Services information
│   ├── leadership.md    # Leadership team information
│   └── ...              # Other page content
│
└── assets/              # Downloaded media assets
    ├── logos/           # Church and ministry logos
    ├── images/          # General images
    ├── backgrounds/     # Background images
    ├── icons/           # Icons and small graphics
    └── youtube-thumbnails/  # YouTube video thumbnails
```

## Content Files

Each `.md` file in the `content/` directory contains:
- Page title
- All headings and subheadings
- Body text paragraphs
- Lists and bullet points
- Links found on the page

The content has been cleaned to remove popup overlays and navigation elements, focusing on the actual page content.

## Assets

The `assets/` directory contains downloaded images including:
- Church logo (NB logo)
- Staff photos
- Ministry logos (Trail Life, American Heritage Girls, etc.)
- YouTube video thumbnails
- Other imagery used throughout the site

## Usage

This content can be used for:
- Website redesign reference
- Content migration
- SEO analysis
- Content inventory
- Backup purposes

## Notes

- All content extracted on: ${new Date().toLocaleDateString()}
- Some dynamically loaded images may not have been captured
- Text content has been cleaned of formatting and popup overlays
- Original HTML structure is not preserved (only content)