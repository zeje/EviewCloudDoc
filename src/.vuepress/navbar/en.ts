import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "To Cloud Solution",
    icon: "iconfont icon-guide",
    link: "/guide/README.md"
  },
  {
    text: "Evmars",
    icon: "iconfont icon-a-96_iotstudio",
    prefix: "/evmars",
    children: [
      {
        text: "About Evmars", icon: "iconfont icon-page",
        link: "/README.md"
      },
      {
        text: "Evmars Biz", icon: "iconfont icon-page",
        prefix: "/biz",
        children: [
          {
            text: "OAuth2.0", icon: "iconfont icon-page",
            link: "/oauth/README.md"
          },
        ]
      }
    ],
  },
  {
    text: "SmartLocator",
    icon: "iconfont icon-line-gpsdingweiqi",
    prefix: "/smartLocator/",
    children: [{
      text: "About Smart-Locator", icon: "iconfont icon-page",
      link: "README.md"
    }],
  },
  {
    text: "KatchU",
    icon: "iconfont icon-pet",
    prefix: "/katchu/",
    children: [{
      text: "About KatchU", icon: "iconfont icon-sort",
      link: "README.md"
    }],
  },
  {
    text: "About us",
    icon: "note",
    link: "http://www.eviewgps.com/",
  },
]);
