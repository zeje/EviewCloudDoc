import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Evmars",
    icon: "iconfont icon-wangzhantubiaoji2_huaban1fuben10",
    prefix: "/zh/evmars/",
    children: ["baz", { text: "...", icon: "more", link: "" }],
  },
  {
    text: "SmartLocator",
    icon: "iconfont icon-line-gpsdingweiqi",
    prefix: "/smartLocator/",
    children: ["baz", { text: "...", icon: "more", link: "" }],
  },
  {
    text: "KatchU",
    icon: "iconfont icon-pet",
    prefix: "/katchu/",
    children: ["ray", { text: "...", icon: "more", link: "" }],
  },
  {
    text: "about me",
    icon: "note",
    link: "http://www.eviewgps.com/",
  },
]);
