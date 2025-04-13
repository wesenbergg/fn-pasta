// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "fn-pasta",
      description: "A collection of copy-pastable utility functions",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/yourusername/fn-pasta",
        },
      ],
      sidebar: [
        {
          label: "Getting Started",
          items: [
            { label: "Introduction", slug: "guides/introduction" },
            { label: "Usage", slug: "guides/usage" },
          ],
        },
        {
          label: "Functions",
          items: [
            { label: "Array", slug: "functions/array" },
            { label: "Object", slug: "functions/object" },
            { label: "String", slug: "functions/string" },
            { label: "Number", slug: "functions/number" },
            { label: "Date", slug: "functions/date" },
            { label: "Utility", slug: "functions/utility" },
          ],
        },
      ],
      customCss: ["./src/tailwind.css"],
    }),
    react(),
  ],
});
