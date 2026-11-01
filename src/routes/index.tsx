import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/$lang", params: { lang: "en" } });
  },
  head: () => ({
    meta: [
      { title: "IBN SINAN HOLDINGS — Built on purpose. Focused on lasting value." },
      {
        name: "description",
        content:
          "A shared vision for progress across pharmaceuticals, investment, and a growing business portfolio.",
      },
      {
        property: "og:title",
        content: "IBN SINAN HOLDINGS — Built on purpose. Focused on lasting value.",
      },
      {
        property: "og:description",
        content:
          "A shared vision for progress across pharmaceuticals, investment, and a growing business portfolio.",
      },
    ],
  }),
});
