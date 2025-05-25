import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // Church website content schema
  schema: {
    collections: [
      {
        name: "pages",
        label: "Pages",
        path: "content/pages",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Page Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Page Description",
            description: "SEO description for the page",
          },
          {
            type: "image",
            name: "heroImage",
            label: "Hero Image",
            description: "Optional hero image for the page",
          },
          {
            type: "rich-text",
            name: "content",
            label: "Page Content",
            isBody: true,
          },
        ],
      },
      {
        name: "staff",
        label: "Staff & Leadership",
        path: "content/staff",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Full Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "position",
            label: "Position/Title",
            required: true,
          },
          {
            type: "image",
            name: "photo",
            label: "Photo",
            description: "Staff member photo",
          },
          {
            type: "string",
            name: "email",
            label: "Email Address",
          },
          {
            type: "string",
            name: "phone",
            label: "Phone Number",
          },
          {
            type: "rich-text",
            name: "bio",
            label: "Biography",
            isBody: true,
          },
          {
            type: "number",
            name: "order",
            label: "Display Order",
            description: "Order in which staff member appears (lower numbers first)",
          },
        ],
      },
      {
        name: "events",
        label: "Events",
        path: "content/events",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Event Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Event Date",
            required: true,
          },
          {
            type: "string",
            name: "time",
            label: "Event Time",
            description: "e.g., '7:00 PM - 9:00 PM'",
          },
          {
            type: "string",
            name: "location",
            label: "Location",
            description: "Where the event takes place",
          },
          {
            type: "image",
            name: "image",
            label: "Event Image",
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: [
              "worship",
              "youth",
              "children",
              "community",
              "education",
              "outreach",
              "special"
            ],
          },
          {
            type: "rich-text",
            name: "description",
            label: "Event Description",
            isBody: true,
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured Event",
            description: "Show this event prominently on the homepage",
          },
        ],
      },
      {
        name: "sermons",
        label: "Sermons",
        path: "content/sermons",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Sermon Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "speaker",
            label: "Speaker",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date Preached",
            required: true,
          },
          {
            type: "string",
            name: "scripture",
            label: "Scripture Reference",
            description: "e.g., 'John 3:16-17'",
          },
          {
            type: "string",
            name: "series",
            label: "Sermon Series",
            description: "Name of the sermon series (if applicable)",
          },
          {
            type: "string",
            name: "videoUrl",
            label: "Video URL",
            description: "YouTube or other video platform URL",
          },
          {
            type: "string",
            name: "audioUrl",
            label: "Audio URL",
            description: "Direct link to audio file",
          },
          {
            type: "image",
            name: "thumbnail",
            label: "Video Thumbnail",
          },
          {
            type: "rich-text",
            name: "summary",
            label: "Sermon Summary",
            isBody: true,
          },
        ],
      },
      {
        name: "ministries",
        label: "Ministries",
        path: "content/ministries",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Ministry Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle/Tagline",
          },
          {
            type: "image",
            name: "image",
            label: "Ministry Image",
          },
          {
            type: "string",
            name: "leader",
            label: "Ministry Leader",
          },
          {
            type: "string",
            name: "contact",
            label: "Contact Information",
          },
          {
            type: "string",
            name: "schedule",
            label: "Schedule",
            description: "When this ministry meets",
          },
          {
            type: "string",
            name: "ageGroup",
            label: "Age Group",
            options: [
              "all-ages",
              "children",
              "youth",
              "adults",
              "seniors"
            ],
          },
          {
            type: "rich-text",
            name: "description",
            label: "Ministry Description",
            isBody: true,
          },
          {
            type: "number",
            name: "order",
            label: "Display Order",
            description: "Order in which ministry appears (lower numbers first)",
          },
        ],
      },
      {
        name: "announcements",
        label: "Announcements",
        path: "content/announcements",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Announcement Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Posted Date",
            required: true,
          },
          {
            type: "datetime",
            name: "expiresOn",
            label: "Expires On",
            description: "When to stop showing this announcement",
          },
          {
            type: "string",
            name: "priority",
            label: "Priority",
            options: ["low", "medium", "high", "urgent"],
            required: true,
          },
          {
            type: "rich-text",
            name: "content",
            label: "Announcement Content",
            isBody: true,
          },
        ],
      },
    ],
  },
});
