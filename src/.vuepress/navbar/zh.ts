import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  {
    text: "Evmars",
    icon: "iconfont icon-wangzhantubiaoji2_huaban1fuben10",
    prefix: "/zh/evmars/",
    children: ["baz", { text: "...", icon: "more", link: "" }],
  },
  {
    text: "Smart-Locator",
    icon: "iconfont icon-line-gpsdingweiqi",
    prefix: "/zh/smartLocator/",
    children: ["baz", { text: "...", icon: "more", link: "" }],
  },
  {
    text: "咔啾",
    icon: "iconfont icon-pet",
    prefix: "/zh/katchu/",
    children: ["ray", { text: "...", icon: "more", link: "" }],
  },
  {
    text: "关于我们",
    icon: "note",
    link: "http://www.eviewgps.com/",
  },
]);
