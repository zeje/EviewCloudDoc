import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  {
    text: "对接方案",
    icon: "iconfont icon-guide",
    link: "/zh/guide/README.md"
  },
  {
    text: "Evmars",
    icon: "iconfont icon-a-96_iotstudio",
    prefix: "/zh/evmars/",
    children: [{
      text: "evmars平台介绍", icon: "iconfont icon-page",
      link: "README.md"
    }],
  },
  {
    text: "Smart-Locator",
    icon: "iconfont icon-line-gpsdingweiqi",
    prefix: "/zh/smartLocator/",
    children: [{
      text: "smartLocator平台介绍", icon: "iconfont icon-page",
      link: "README.md"
    }],
  },
  {
    text: "咔啾",
    icon: "iconfont icon-pet",
    prefix: "/zh/katchu/",
    children: [{
      text: "katchu宠物平台介绍", icon: "iconfont icon-page",
      link: "README.md"
    }],
  },
  {
    text: "关于我们",
    icon: "note",
    link: "http://www.eviewgps.com/",
  },
]);
