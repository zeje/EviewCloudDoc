import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import markdownItPlantuml from "markdown-it-plantuml";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Eview cloud service document",
      description: "Eview cloud service document",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Eview云服务平台在线文档",
      description: "Eview云服务平台在线文档",
    },
  },
  extendsMarkdown: (md) => {
    md.use(markdownItPlantuml)
    md.set({ breaks: true })
  },
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
