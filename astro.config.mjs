// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";

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
          href: "https://github.com/wesenbergg/fn-pasta",
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
            { label: "Collection", slug: "functions/collection" },
            { label: "Date", slug: "functions/date" },
            { label: "Number", slug: "functions/number" },
            { label: "Object", slug: "functions/object" },
            { label: "String", slug: "functions/string" },
            { label: "Utility", slug: "functions/utility" },
            { label: "Value", slug: "functions/value" },
          ],
        },
      ],
      customCss: ["./src/tailwind.css"],
    }),
    react(),
  ],
  output: "static",
  adapter: vercel({
    imageService: true,
  }),
});
