import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/EviewCloudDoc/",

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

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
