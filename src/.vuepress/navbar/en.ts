import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Guide",
    icon: "iconfont icon-guide",
    prefix: "/guide/",
    link: "README.md"
  },
  {
    text: "Evmars",
    icon: "iconfont icon-a-96_iotstudio",
    prefix: "/zh/evmars/",
    children: [{
      text: "getting started", icon: "iconfont icon-page",
      link: "getting_started.md"
    }],
  },
  {
    text: "SmartLocator",
    icon: "iconfont icon-line-gpsdingweiqi",
    prefix: "/smartLocator/",
    children: [{
      text: "getting started", icon: "iconfont icon-page",
      link: "getting_started.md"
    }],
  },
  {
    text: "KatchU",
    icon: "iconfont icon-pet",
    prefix: "/katchu/",
    children: [{
      text: "getting started", icon: "iconfont icon-sort",
      link: "getting_started.md"
    }],
  },
  {
    text: "about us",
    icon: "note",
    link: "http://www.eviewgps.com/",
  },
]);
