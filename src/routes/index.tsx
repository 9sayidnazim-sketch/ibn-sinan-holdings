import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/$lang", params: { lang: "en" } });
  },
  head: () => ({
    meta: [
      { title: "Ibn Sinan Holdings — Commercial property" },
      {
        name: "description",
        content:
          "Offices, warehouses, shopfronts and land, matched to the work the space has to do.",
      },
      { property: "og:title", content: "Ibn Sinan Holdings — Commercial property" },
      {
        property: "og:description",
        content:
          "Offices, warehouses, shopfronts and land, matched to the work the space has to do.",
      },
    ],
  }),
});
