import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-01-01",
  devtools: { enabled: true },

  modules: ["@nuxtjs/seo", "@nuxt/fonts"],

  site: {
    url: "https://mypage.example.com", // <-- your real production domain
    name: "My App",
    description: "My App in example",
    defaultLocale: "de",
  },

  fonts: {
    families: [
      {
        name: "Clash Display",
        provider: "fontshare",
        weights: [400, 500, 600, 700],
      },
      // optional body pairing — a clean neutral to contrast the display font:
      // { name: 'General Sans', provider: 'fontshare', weights: [400, 500, 600] },
    ],
  },

  css: ["@/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  sitemap: {
    exclude: ["/impressum", "/datenschutz", "/agb"],
  },

  ogImage: { enabled: false },

  schemaOrg: {
    identity: {
      type: "Person", // more specific sub-type of LocalBusiness — tells Google exactly what kind of business
      name: "My Website",
      url: "https://my-website-example.com",
      logo: "https://my-website-example.com/logo.png",
      image: "my-website-example.com/image.png",
      address: {
        streetAddress: "Musterstraße 1",
        addressLocality: "Musterstadt",
        postalCode: "12345",
        addressCountry: "AT",
      },
      telephone: "+43 ...",
      priceRange: "€€",
      openingHoursSpecification: [
        {
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: "de" },
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "icon", type: "image/x-icon", href: "/favicon", sizes: "any" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/icon-192.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "512x512",
          href: "/icon-512.png",
        },
      ],
    },
  },
});
