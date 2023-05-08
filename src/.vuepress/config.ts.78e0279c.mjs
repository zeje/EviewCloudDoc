// src/.vuepress/config.ts
import { defineUserConfig } from "vuepress";

// src/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// src/.vuepress/navbar/en.ts
import { navbar } from "vuepress-theme-hope";
var enNavbar = navbar([
  "/",
  {
    text: "To Cloud Solution",
    icon: "iconfont icon-guide",
    link: "/guide/README.md"
  },
  {
    text: "Evmars",
    icon: "iconfont icon-a-96_iotstudio",
    prefix: "/evmars/",
    children: [{
      text: "About Evmars",
      icon: "iconfont icon-page",
      link: "README.md"
    }]
  },
  {
    text: "SmartLocator",
    icon: "iconfont icon-line-gpsdingweiqi",
    prefix: "/smartLocator/",
    children: [{
      text: "About Smart-Locator",
      icon: "iconfont icon-page",
      link: "README.md"
    }]
  },
  {
    text: "KatchU",
    icon: "iconfont icon-pet",
    prefix: "/katchu/",
    children: [{
      text: "About KatchU",
      icon: "iconfont icon-sort",
      link: "README.md"
    }]
  },
  {
    text: "About us",
    icon: "note",
    link: "http://www.eviewgps.com/"
  }
]);

// src/.vuepress/navbar/zh.ts
import { navbar as navbar2 } from "vuepress-theme-hope";
var zhNavbar = navbar2([
  "/zh/",
  {
    text: "\u4E0A\u4E91\u65B9\u6848",
    icon: "iconfont icon-guide",
    link: "/zh/guide/README.md"
  },
  {
    text: "Evmars",
    icon: "iconfont icon-a-96_iotstudio",
    prefix: "/zh/evmars/",
    children: [{
      text: "evmars\u5E73\u53F0\u4ECB\u7ECD",
      icon: "iconfont icon-page",
      link: "README.md"
    }]
  },
  {
    text: "Smart-Locator",
    icon: "iconfont icon-line-gpsdingweiqi",
    prefix: "/zh/smartLocator/",
    children: [{
      text: "smartLocator\u5E73\u53F0\u4ECB\u7ECD",
      icon: "iconfont icon-page",
      link: "README.md"
    }]
  },
  {
    text: "\u5494\u557E",
    icon: "iconfont icon-pet",
    prefix: "/zh/katchu/",
    children: [{
      text: "katchu\u5BA0\u7269\u5E73\u53F0\u4ECB\u7ECD",
      icon: "iconfont icon-page",
      link: "README.md"
    }]
  },
  {
    text: "\u5173\u4E8E\u6211\u4EEC",
    icon: "note",
    link: "http://www.eviewgps.com/"
  }
]);

// src/.vuepress/sidebar/en.ts
import { sidebar } from "vuepress-theme-hope";
var enSidebar = sidebar({
  "/": [
    "",
    {
      // 必要的，分组的标题文字
      text: "To Cloud Solution",
      // 可选的, 分组标题对应的图标
      icon: "iconfont icon-guide",
      // 可选的，会添加到每个 item 链接地址之前
      prefix: "/guide/",
      // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: false,
      // 必要的，分组的子项目
      children: [
        "/guide/sdk-demo/README.md",
        "/guide/loctube-lite/README.md",
        "/guide/forward/README.md",
        "/guide/third-party/README.md",
        "/guide/loctube/README.md"
      ]
    },
    {
      text: "Evmars-Loctube Solution",
      icon: "iconfont icon-a-96_iotstudio",
      prefix: "evmars/",
      children: [
        "/evmars/getting_started.md",
        "/evmars/custom-sql-term.md",
        "/evmars/api-response.md",
        "/evmars/evgps-protocol.md",
        "/evmars/evgps-tsl.md",
        {
          text: "Common API interface",
          icon: "iconfont icon-a-96_iotstudio",
          prefix: "evmars/",
          children: [
            "/evmars/api/device-function.md",
            "/evmars/api/device-query.md",
            "/evmars/api/device-state.md",
            "/evmars/api/device-event.md",
            "/evmars/api/device-event-no-paging.md",
            "/evmars/api/device-realtime.md",
            "/evmars/api/device-trackerAlarmState.md",
            "/evmars/api/device-trackerAppLocation.md"
          ]
        }
      ]
    }
  ]
});

// src/.vuepress/sidebar/zh.ts
import { sidebar as sidebar2 } from "vuepress-theme-hope";
var zhSidebar = sidebar2({
  "/zh/": [
    "",
    {
      // 必要的，分组的标题文字
      text: "\u4E0A\u4E91\u65B9\u6848",
      // 可选的, 分组标题对应的图标
      icon: "iconfont icon-guide",
      // 可选的，会添加到每个 item 链接地址之前
      prefix: "/guide/",
      // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: false,
      // 必要的，分组的子项目
      children: [
        "/zh/guide/sdk-demo/README.md",
        "/zh/guide/loctube-lite/README.md",
        "/zh/guide/forward/README.md",
        "/zh/guide/third-party/README.md",
        "/zh/guide/loctube/README.md"
      ]
    },
    {
      text: "Evmars-Loctube\u8BBE\u5907\u63A5\u5165\u5E73\u53F0",
      icon: "iconfont icon-a-96_iotstudio",
      prefix: "evmars/",
      children: [
        "/zh/evmars/getting_started.md",
        "/zh/evmars/custom-sql-term.md",
        "/zh/evmars/api-response.md",
        "/zh/evmars/evgps-protocol.md",
        "/zh/evmars/evgps-tsl.md",
        {
          text: "\u5E38\u7528API\u63A5\u53E3",
          icon: "iconfont icon-a-96_iotstudio",
          prefix: "evmars/",
          children: [
            "/zh/evmars/api/device-function.md",
            "/zh/evmars/api/device-query.md",
            "/zh/evmars/api/device-state.md",
            "/zh/evmars/api/device-event.md",
            "/zh/evmars/api/device-event-no-paging.md",
            "/zh/evmars/api/device-realtime.md",
            "/zh/evmars/api/device-trackerAlarmState.md",
            "/zh/evmars/api/device-trackerAppLocation.md"
          ]
        }
      ]
    }
  ]
});

// src/.vuepress/theme.ts
var theme_default = hopeTheme({
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",
  author: {
    name: "eview",
    url: "http://www.eviewgps.com/"
  },
  iconAssets: [
    "iconfont",
    "//at.alicdn.com/t/c/font_4012891_g583jslu07s.css"
  ],
  logo: "/logo.svg",
  repo: "vuepress-theme-hope/vuepress-theme-hope",
  docsDir: "demo/theme-docs/src",
  locales: {
    "/": {
      // navbar
      navbar: enNavbar,
      // sidebar
      sidebar: enSidebar,
      footer: "Default footer",
      displayFooter: true,
      metaLocales: {
        editLink: "Edit this page on GitHub"
      }
    },
    /**
     * Chinese locale config
     */
    "/zh/": {
      // navbar
      navbar: zhNavbar,
      // sidebar
      sidebar: zhSidebar,
      footer: "\u9ED8\u8BA4\u9875\u811A",
      displayFooter: true,
      // page meta
      metaLocales: {
        editLink: "\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875"
      }
    }
  },
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/zh/demo/encrypt.html": ["1234"]
    }
  },
  plugins: {
    comment: {
      provider: "Giscus",
      comment: true,
      //启用评论功能
      repo: "zeje/EviewCloudDoc",
      //远程仓库
      repoId: "R_kgDOJWLfzg",
      //对应自己的仓库Id
      category: "Announcements",
      categoryId: "DIC_kwDOJWLfzs4CVwzX"
      //对应自己的分类Id
    },
    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"]
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"]
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended"
              };
          }
        }
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true
    },
    photoSwipe: {
      delay: 3e3,
      selector: [
        ".theme-default-content :not(a) > img:not([no-view])",
        ".mermaid-wrapper > .mermaid-content > svg"
      ]
    }
    // uncomment these if you want a pwa
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  }
});

// src/.vuepress/config.ts
import markdownItPlantuml from "markdown-it-plantuml";
var config_default = defineUserConfig({
  base: "/",
  locales: {
    "/": {
      lang: "en-US",
      title: "Eview cloud service document",
      description: "Eview cloud service document"
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Eview\u4E91\u670D\u52A1\u5E73\u53F0\u5728\u7EBF\u6587\u6863",
      description: "Eview\u4E91\u670D\u52A1\u5E73\u53F0\u5728\u7EBF\u6587\u6863"
    }
  },
  extendsMarkdown: (md) => {
    md.use(markdownItPlantuml);
    md.set({ breaks: true });
  },
  theme: theme_default
  // Enable it with pwa
  // shouldPrefetch: false,
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci9lbi50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci96aC50cyIsICJzcmMvLnZ1ZXByZXNzL3NpZGViYXIvZW4udHMiLCAic3JjLy52dWVwcmVzcy9zaWRlYmFyL3poLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTovY2FpenovZ2l0aHViL0V2aWV3Q2xvdWREb2Mvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcY2FpenpcXFxcZ2l0aHViXFxcXEV2aWV3Q2xvdWREb2NcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxjb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L2NhaXp6L2dpdGh1Yi9Fdmlld0Nsb3VkRG9jL3NyYy8udnVlcHJlc3MvY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lVXNlckNvbmZpZyB9IGZyb20gXCJ2dWVwcmVzc1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuL3RoZW1lLmpzXCI7XG5pbXBvcnQgbWFya2Rvd25JdFBsYW50dW1sIGZyb20gXCJtYXJrZG93bi1pdC1wbGFudHVtbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcbiAgYmFzZTogXCIvXCIsXG5cbiAgbG9jYWxlczoge1xuICAgIFwiL1wiOiB7XG4gICAgICBsYW5nOiBcImVuLVVTXCIsXG4gICAgICB0aXRsZTogXCJFdmlldyBjbG91ZCBzZXJ2aWNlIGRvY3VtZW50XCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJFdmlldyBjbG91ZCBzZXJ2aWNlIGRvY3VtZW50XCIsXG4gICAgfSxcbiAgICBcIi96aC9cIjoge1xuICAgICAgbGFuZzogXCJ6aC1DTlwiLFxuICAgICAgdGl0bGU6IFwiRXZpZXdcdTRFOTFcdTY3MERcdTUyQTFcdTVFNzNcdTUzRjBcdTU3MjhcdTdFQkZcdTY1ODdcdTY4NjNcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkV2aWV3XHU0RTkxXHU2NzBEXHU1MkExXHU1RTczXHU1M0YwXHU1NzI4XHU3RUJGXHU2NTg3XHU2ODYzXCIsXG4gICAgfSxcbiAgfSxcbiAgZXh0ZW5kc01hcmtkb3duOiAobWQpID0+IHtcbiAgICBtZC51c2UobWFya2Rvd25JdFBsYW50dW1sKVxuICAgIG1kLnNldCh7IGJyZWFrczogdHJ1ZSB9KVxuICB9LFxuICB0aGVtZVxuXG4gIC8vIEVuYWJsZSBpdCB3aXRoIHB3YVxuICAvLyBzaG91bGRQcmVmZXRjaDogZmFsc2UsXG4gIFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6L2NhaXp6L2dpdGh1Yi9Fdmlld0Nsb3VkRG9jL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXGNhaXp6XFxcXGdpdGh1YlxcXFxFdmlld0Nsb3VkRG9jXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcdGhlbWUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L2NhaXp6L2dpdGh1Yi9Fdmlld0Nsb3VkRG9jL3NyYy8udnVlcHJlc3MvdGhlbWUudHNcIjtpbXBvcnQgeyBob3BlVGhlbWUgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xuaW1wb3J0IHsgZW5OYXZiYXIsIHpoTmF2YmFyIH0gZnJvbSBcIi4vbmF2YmFyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBlblNpZGViYXIsIHpoU2lkZWJhciB9IGZyb20gXCIuL3NpZGViYXIvaW5kZXguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgaG9wZVRoZW1lKHtcbiAgaG9zdG5hbWU6IFwiaHR0cHM6Ly92dWVwcmVzcy10aGVtZS1ob3BlLWRvY3MtZGVtby5uZXRsaWZ5LmFwcFwiLFxuXG4gIGF1dGhvcjoge1xuICAgIG5hbWU6IFwiZXZpZXdcIixcbiAgICB1cmw6IFwiaHR0cDovL3d3dy5ldmlld2dwcy5jb20vXCIsXG4gIH0sXG5cbiAgaWNvbkFzc2V0czogW1xuICAgIFwiaWNvbmZvbnRcIixcbiAgICBcIi8vYXQuYWxpY2RuLmNvbS90L2MvZm9udF80MDEyODkxX2c1ODNqc2x1MDdzLmNzc1wiXG4gIF0sXG5cbiAgbG9nbzogXCIvbG9nby5zdmdcIixcblxuICByZXBvOiBcInZ1ZXByZXNzLXRoZW1lLWhvcGUvdnVlcHJlc3MtdGhlbWUtaG9wZVwiLFxuXG4gIGRvY3NEaXI6IFwiZGVtby90aGVtZS1kb2NzL3NyY1wiLFxuXG4gIGxvY2FsZXM6IHtcbiAgICBcIi9cIjoge1xuICAgICAgLy8gbmF2YmFyXG4gICAgICBuYXZiYXI6IGVuTmF2YmFyLFxuXG4gICAgICAvLyBzaWRlYmFyXG4gICAgICBzaWRlYmFyOiBlblNpZGViYXIsXG5cbiAgICAgIGZvb3RlcjogXCJEZWZhdWx0IGZvb3RlclwiLFxuXG4gICAgICBkaXNwbGF5Rm9vdGVyOiB0cnVlLFxuXG4gICAgICBtZXRhTG9jYWxlczoge1xuICAgICAgICBlZGl0TGluazogXCJFZGl0IHRoaXMgcGFnZSBvbiBHaXRIdWJcIixcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoaW5lc2UgbG9jYWxlIGNvbmZpZ1xuICAgICAqL1xuICAgIFwiL3poL1wiOiB7XG4gICAgICAvLyBuYXZiYXJcbiAgICAgIG5hdmJhcjogemhOYXZiYXIsXG5cbiAgICAgIC8vIHNpZGViYXJcbiAgICAgIHNpZGViYXI6IHpoU2lkZWJhcixcblxuICAgICAgZm9vdGVyOiBcIlx1OUVEOFx1OEJBNFx1OTg3NVx1ODExQVwiLFxuXG4gICAgICBkaXNwbGF5Rm9vdGVyOiB0cnVlLFxuXG4gICAgICAvLyBwYWdlIG1ldGFcbiAgICAgIG1ldGFMb2NhbGVzOiB7XG4gICAgICAgIGVkaXRMaW5rOiBcIlx1NTcyOCBHaXRIdWIgXHU0RTBBXHU3RjE2XHU4RjkxXHU2QjY0XHU5ODc1XCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5cbiAgZW5jcnlwdDoge1xuICAgIGNvbmZpZzoge1xuICAgICAgXCIvZGVtby9lbmNyeXB0Lmh0bWxcIjogW1wiMTIzNFwiXSxcbiAgICAgIFwiL3poL2RlbW8vZW5jcnlwdC5odG1sXCI6IFtcIjEyMzRcIl0sXG4gICAgfSxcbiAgfSxcblxuICBwbHVnaW5zOiB7XG4gICAgY29tbWVudDoge1xuICAgICAgcHJvdmlkZXI6IFwiR2lzY3VzXCIsXG4gICAgICBjb21tZW50OiB0cnVlLCAvL1x1NTQyRlx1NzUyOFx1OEJDNFx1OEJCQVx1NTI5Rlx1ODBGRFxuICAgICAgcmVwbzogXCJ6ZWplL0V2aWV3Q2xvdWREb2NcIiwgLy9cdThGRENcdTdBMEJcdTRFRDNcdTVFOTNcbiAgICAgIHJlcG9JZDogXCJSX2tnRE9KV0xmemdcIiwgLy9cdTVCRjlcdTVFOTRcdTgxRUFcdTVERjFcdTc2ODRcdTRFRDNcdTVFOTNJZFxuICAgICAgY2F0ZWdvcnk6IFwiQW5ub3VuY2VtZW50c1wiLFxuICAgICAgY2F0ZWdvcnlJZDogXCJESUNfa3dET0pXTGZ6czRDVnd6WFwiIC8vXHU1QkY5XHU1RTk0XHU4MUVBXHU1REYxXHU3Njg0XHU1MjA2XHU3QzdCSWRcbiAgICB9LFxuXG4gICAgLy8gYWxsIGZlYXR1cmVzIGFyZSBlbmFibGVkIGZvciBkZW1vLCBvbmx5IHByZXNlcnZlIGZlYXR1cmVzIHlvdSBuZWVkIGhlcmVcbiAgICBtZEVuaGFuY2U6IHtcbiAgICAgIGFsaWduOiB0cnVlLFxuICAgICAgYXR0cnM6IHRydWUsXG4gICAgICBjaGFydDogdHJ1ZSxcbiAgICAgIGNvZGV0YWJzOiB0cnVlLFxuICAgICAgZGVtbzogdHJ1ZSxcbiAgICAgIGVjaGFydHM6IHRydWUsXG4gICAgICBmaWd1cmU6IHRydWUsXG4gICAgICBmbG93Y2hhcnQ6IHRydWUsXG4gICAgICBnZm06IHRydWUsXG4gICAgICBpbWdMYXp5bG9hZDogdHJ1ZSxcbiAgICAgIGltZ1NpemU6IHRydWUsXG4gICAgICBpbmNsdWRlOiB0cnVlLFxuICAgICAga2F0ZXg6IHRydWUsXG4gICAgICBtYXJrOiB0cnVlLFxuICAgICAgbWVybWFpZDogdHJ1ZSxcbiAgICAgIHBsYXlncm91bmQ6IHtcbiAgICAgICAgcHJlc2V0czogW1widHNcIiwgXCJ2dWVcIl0sXG4gICAgICB9LFxuICAgICAgcHJlc2VudGF0aW9uOiB7XG4gICAgICAgIHBsdWdpbnM6IFtcImhpZ2hsaWdodFwiLCBcIm1hdGhcIiwgXCJzZWFyY2hcIiwgXCJub3Rlc1wiLCBcInpvb21cIl0sXG4gICAgICB9LFxuICAgICAgc3R5bGl6ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgbWF0Y2hlcjogXCJSZWNvbW1lbmRlZFwiLFxuICAgICAgICAgIHJlcGxhY2VyOiAoeyB0YWcgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRhZyA9PT0gXCJlbVwiKVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRhZzogXCJCYWRnZVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGlwXCIgfSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlJlY29tbWVuZGVkXCIsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBzdWI6IHRydWUsXG4gICAgICBzdXA6IHRydWUsXG4gICAgICB0YWJzOiB0cnVlLFxuICAgICAgdlByZTogdHJ1ZSxcbiAgICAgIHZ1ZVBsYXlncm91bmQ6IHRydWUsXG4gICAgfSxcblxuXG4gICAgcGhvdG9Td2lwZToge1xuICAgICAgZGVsYXk6MzAwMCxcbiAgICAgIHNlbGVjdG9yOiBbXG4gICAgICAgIFwiLnRoZW1lLWRlZmF1bHQtY29udGVudCA6bm90KGEpID4gaW1nOm5vdChbbm8tdmlld10pXCIsXG4gICAgICAgIFwiLm1lcm1haWQtd3JhcHBlciA+IC5tZXJtYWlkLWNvbnRlbnQgPiBzdmdcIlxuICAgICAgXVxuICAgIH0sXG5cbiAgICAvLyB1bmNvbW1lbnQgdGhlc2UgaWYgeW91IHdhbnQgYSBwd2FcbiAgICAvLyBwd2E6IHtcbiAgICAvLyAgIGZhdmljb246IFwiL2Zhdmljb24uaWNvXCIsXG4gICAgLy8gICBjYWNoZUhUTUw6IHRydWUsXG4gICAgLy8gICBjYWNoZVBpYzogdHJ1ZSxcbiAgICAvLyAgIGFwcGVuZEJhc2U6IHRydWUsXG4gICAgLy8gICBhcHBsZToge1xuICAgIC8vICAgICBpY29uOiBcIi9hc3NldHMvaWNvbi9hcHBsZS1pY29uLTE1Mi5wbmdcIixcbiAgICAvLyAgICAgc3RhdHVzQmFyQ29sb3I6IFwiYmxhY2tcIixcbiAgICAvLyAgIH0sXG4gICAgLy8gICBtc1RpbGU6IHtcbiAgICAvLyAgICAgaW1hZ2U6IFwiL2Fzc2V0cy9pY29uL21zLWljb24tMTQ0LnBuZ1wiLFxuICAgIC8vICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgLy8gICB9LFxuICAgIC8vICAgbWFuaWZlc3Q6IHtcbiAgICAvLyAgICAgaWNvbnM6IFtcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS1tYXNrLTUxMi5wbmdcIixcbiAgICAvLyAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcbiAgICAvLyAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcbiAgICAvLyAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS1tYXNrLTE5Mi5wbmdcIixcbiAgICAvLyAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAvLyAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcbiAgICAvLyAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS01MTIucG5nXCIsXG4gICAgLy8gICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXG4gICAgLy8gICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtMTkyLnBuZ1wiLFxuICAgIC8vICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxuICAgIC8vICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICBdLFxuICAgIC8vICAgICBzaG9ydGN1dHM6IFtcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBuYW1lOiBcIkRlbW9cIixcbiAgICAvLyAgICAgICAgIHNob3J0X25hbWU6IFwiRGVtb1wiLFxuICAgIC8vICAgICAgICAgdXJsOiBcIi9kZW1vL1wiLFxuICAgIC8vICAgICAgICAgaWNvbnM6IFtcbiAgICAvLyAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vZ3VpZGUtbWFza2FibGUucG5nXCIsXG4gICAgLy8gICAgICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxuICAgIC8vICAgICAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcbiAgICAvLyAgICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgIC8vICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgXSxcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICBdLFxuICAgIC8vICAgfSxcbiAgICAvLyB9LFxuICB9LFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6L2NhaXp6L2dpdGh1Yi9Fdmlld0Nsb3VkRG9jL3NyYy8udnVlcHJlc3MvbmF2YmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxjYWl6elxcXFxnaXRodWJcXFxcRXZpZXdDbG91ZERvY1xcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXG5hdmJhclxcXFxlbi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovY2FpenovZ2l0aHViL0V2aWV3Q2xvdWREb2Mvc3JjLy52dWVwcmVzcy9uYXZiYXIvZW4udHNcIjtpbXBvcnQgeyBuYXZiYXIgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xuXG5leHBvcnQgY29uc3QgZW5OYXZiYXIgPSBuYXZiYXIoW1xuICBcIi9cIixcbiAge1xuICAgIHRleHQ6IFwiVG8gQ2xvdWQgU29sdXRpb25cIixcbiAgICBpY29uOiBcImljb25mb250IGljb24tZ3VpZGVcIixcbiAgICBsaW5rOiBcIi9ndWlkZS9SRUFETUUubWRcIlxuICB9LFxuICB7XG4gICAgdGV4dDogXCJFdm1hcnNcIixcbiAgICBpY29uOiBcImljb25mb250IGljb24tYS05Nl9pb3RzdHVkaW9cIixcbiAgICBwcmVmaXg6IFwiL2V2bWFycy9cIixcbiAgICBjaGlsZHJlbjogW3tcbiAgICAgIHRleHQ6IFwiQWJvdXQgRXZtYXJzXCIsIGljb246IFwiaWNvbmZvbnQgaWNvbi1wYWdlXCIsXG4gICAgICBsaW5rOiBcIlJFQURNRS5tZFwiXG4gICAgfV0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcIlNtYXJ0TG9jYXRvclwiLFxuICAgIGljb246IFwiaWNvbmZvbnQgaWNvbi1saW5lLWdwc2Rpbmd3ZWlxaVwiLFxuICAgIHByZWZpeDogXCIvc21hcnRMb2NhdG9yL1wiLFxuICAgIGNoaWxkcmVuOiBbe1xuICAgICAgdGV4dDogXCJBYm91dCBTbWFydC1Mb2NhdG9yXCIsIGljb246IFwiaWNvbmZvbnQgaWNvbi1wYWdlXCIsXG4gICAgICBsaW5rOiBcIlJFQURNRS5tZFwiXG4gICAgfV0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcIkthdGNoVVwiLFxuICAgIGljb246IFwiaWNvbmZvbnQgaWNvbi1wZXRcIixcbiAgICBwcmVmaXg6IFwiL2thdGNodS9cIixcbiAgICBjaGlsZHJlbjogW3tcbiAgICAgIHRleHQ6IFwiQWJvdXQgS2F0Y2hVXCIsIGljb246IFwiaWNvbmZvbnQgaWNvbi1zb3J0XCIsXG4gICAgICBsaW5rOiBcIlJFQURNRS5tZFwiXG4gICAgfV0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcIkFib3V0IHVzXCIsXG4gICAgaWNvbjogXCJub3RlXCIsXG4gICAgbGluazogXCJodHRwOi8vd3d3LmV2aWV3Z3BzLmNvbS9cIixcbiAgfSxcbl0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOi9jYWl6ei9naXRodWIvRXZpZXdDbG91ZERvYy9zcmMvLnZ1ZXByZXNzL25hdmJhclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcY2FpenpcXFxcZ2l0aHViXFxcXEV2aWV3Q2xvdWREb2NcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxuYXZiYXJcXFxcemgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L2NhaXp6L2dpdGh1Yi9Fdmlld0Nsb3VkRG9jL3NyYy8udnVlcHJlc3MvbmF2YmFyL3poLnRzXCI7aW1wb3J0IHsgbmF2YmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcblxuZXhwb3J0IGNvbnN0IHpoTmF2YmFyID0gbmF2YmFyKFtcbiAgXCIvemgvXCIsXG4gIHtcbiAgICB0ZXh0OiBcIlx1NEUwQVx1NEU5MVx1NjVCOVx1Njg0OFwiLFxuICAgIGljb246IFwiaWNvbmZvbnQgaWNvbi1ndWlkZVwiLFxuICAgIGxpbms6IFwiL3poL2d1aWRlL1JFQURNRS5tZFwiXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcIkV2bWFyc1wiLFxuICAgIGljb246IFwiaWNvbmZvbnQgaWNvbi1hLTk2X2lvdHN0dWRpb1wiLFxuICAgIHByZWZpeDogXCIvemgvZXZtYXJzL1wiLFxuICAgIGNoaWxkcmVuOiBbe1xuICAgICAgdGV4dDogXCJldm1hcnNcdTVFNzNcdTUzRjBcdTRFQ0JcdTdFQ0RcIiwgaWNvbjogXCJpY29uZm9udCBpY29uLXBhZ2VcIixcbiAgICAgIGxpbms6IFwiUkVBRE1FLm1kXCJcbiAgICB9XSxcbiAgfSxcbiAge1xuICAgIHRleHQ6IFwiU21hcnQtTG9jYXRvclwiLFxuICAgIGljb246IFwiaWNvbmZvbnQgaWNvbi1saW5lLWdwc2Rpbmd3ZWlxaVwiLFxuICAgIHByZWZpeDogXCIvemgvc21hcnRMb2NhdG9yL1wiLFxuICAgIGNoaWxkcmVuOiBbe1xuICAgICAgdGV4dDogXCJzbWFydExvY2F0b3JcdTVFNzNcdTUzRjBcdTRFQ0JcdTdFQ0RcIiwgaWNvbjogXCJpY29uZm9udCBpY29uLXBhZ2VcIixcbiAgICAgIGxpbms6IFwiUkVBRE1FLm1kXCJcbiAgICB9XSxcbiAgfSxcbiAge1xuICAgIHRleHQ6IFwiXHU1NDk0XHU1NTdFXCIsXG4gICAgaWNvbjogXCJpY29uZm9udCBpY29uLXBldFwiLFxuICAgIHByZWZpeDogXCIvemgva2F0Y2h1L1wiLFxuICAgIGNoaWxkcmVuOiBbe1xuICAgICAgdGV4dDogXCJrYXRjaHVcdTVCQTBcdTcyNjlcdTVFNzNcdTUzRjBcdTRFQ0JcdTdFQ0RcIiwgaWNvbjogXCJpY29uZm9udCBpY29uLXBhZ2VcIixcbiAgICAgIGxpbms6IFwiUkVBRE1FLm1kXCJcbiAgICB9XSxcbiAgfSxcbiAge1xuICAgIHRleHQ6IFwiXHU1MTczXHU0RThFXHU2MjExXHU0RUVDXCIsXG4gICAgaWNvbjogXCJub3RlXCIsXG4gICAgbGluazogXCJodHRwOi8vd3d3LmV2aWV3Z3BzLmNvbS9cIixcbiAgfSxcbl0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOi9jYWl6ei9naXRodWIvRXZpZXdDbG91ZERvYy9zcmMvLnZ1ZXByZXNzL3NpZGViYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXGNhaXp6XFxcXGdpdGh1YlxcXFxFdmlld0Nsb3VkRG9jXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcc2lkZWJhclxcXFxlbi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovY2FpenovZ2l0aHViL0V2aWV3Q2xvdWREb2Mvc3JjLy52dWVwcmVzcy9zaWRlYmFyL2VuLnRzXCI7aW1wb3J0IHsgc2lkZWJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5cbmV4cG9ydCBjb25zdCBlblNpZGViYXIgPSBzaWRlYmFyKHtcbiAgXCIvXCI6IFtcbiAgICBcIlwiLFxuICAgIHtcbiAgICAgIC8vIFx1NUZDNVx1ODk4MVx1NzY4NFx1RkYwQ1x1NTIwNlx1N0VDNFx1NzY4NFx1NjgwN1x1OTg5OFx1NjU4N1x1NUI1N1xuICAgICAgdGV4dDogXCJUbyBDbG91ZCBTb2x1dGlvblwiLFxuICAgICAgLy8gXHU1M0VGXHU5MDA5XHU3Njg0LCBcdTUyMDZcdTdFQzRcdTY4MDdcdTk4OThcdTVCRjlcdTVFOTRcdTc2ODRcdTU2RkVcdTY4MDdcbiAgICAgIGljb246IFwiaWNvbmZvbnQgaWNvbi1ndWlkZVwiLFxuICAgICAgLy8gXHU1M0VGXHU5MDA5XHU3Njg0XHVGRjBDXHU0RjFBXHU2REZCXHU1MkEwXHU1MjMwXHU2QkNGXHU0RTJBIGl0ZW0gXHU5NEZFXHU2M0E1XHU1NzMwXHU1NzQwXHU0RTRCXHU1MjREXG4gICAgICBwcmVmaXg6IFwiL2d1aWRlL1wiLFxuICAgICAgLy8gXHU1M0VGXHU5MDA5XHU3Njg0LCBcdThCQkVcdTdGNkVcdTUyMDZcdTdFQzRcdTY2MkZcdTU0MjZcdTUzRUZcdTRFRTVcdTYyOThcdTUzRTBcdUZGMENcdTlFRDhcdThCQTRcdTUwM0NcdTY2MkYgZmFsc2UsXG4gICAgICBjb2xsYXBzaWJsZTogZmFsc2UsXG4gICAgICAvLyBcdTVGQzVcdTg5ODFcdTc2ODRcdUZGMENcdTUyMDZcdTdFQzRcdTc2ODRcdTVCNTBcdTk4NzlcdTc2RUVcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIFwiL2d1aWRlL3Nkay1kZW1vL1JFQURNRS5tZFwiLFxuICAgICAgICBcIi9ndWlkZS9sb2N0dWJlLWxpdGUvUkVBRE1FLm1kXCIsXG4gICAgICAgIFwiL2d1aWRlL2ZvcndhcmQvUkVBRE1FLm1kXCIsXG4gICAgICAgIFwiL2d1aWRlL3RoaXJkLXBhcnR5L1JFQURNRS5tZFwiLFxuICAgICAgICBcIi9ndWlkZS9sb2N0dWJlL1JFQURNRS5tZFwiLFxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJFdm1hcnMtTG9jdHViZSBTb2x1dGlvblwiLFxuICAgICAgaWNvbjogXCJpY29uZm9udCBpY29uLWEtOTZfaW90c3R1ZGlvXCIsXG4gICAgICBwcmVmaXg6IFwiZXZtYXJzL1wiLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgXCIvZXZtYXJzL2dldHRpbmdfc3RhcnRlZC5tZFwiLFxuICAgICAgICBcIi9ldm1hcnMvY3VzdG9tLXNxbC10ZXJtLm1kXCIsXG4gICAgICAgIFwiL2V2bWFycy9hcGktcmVzcG9uc2UubWRcIixcbiAgICAgICAgXCIvZXZtYXJzL2V2Z3BzLXByb3RvY29sLm1kXCIsXG4gICAgICAgIFwiL2V2bWFycy9ldmdwcy10c2wubWRcIixcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiQ29tbW9uIEFQSSBpbnRlcmZhY2VcIixcbiAgICAgICAgICBpY29uOiBcImljb25mb250IGljb24tYS05Nl9pb3RzdHVkaW9cIixcbiAgICAgICAgICBwcmVmaXg6IFwiZXZtYXJzL1wiLFxuICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICBcIi9ldm1hcnMvYXBpL2RldmljZS1mdW5jdGlvbi5tZFwiLFxuICAgICAgICAgICAgXCIvZXZtYXJzL2FwaS9kZXZpY2UtcXVlcnkubWRcIixcbiAgICAgICAgICAgIFwiL2V2bWFycy9hcGkvZGV2aWNlLXN0YXRlLm1kXCIsXG4gICAgICAgICAgICBcIi9ldm1hcnMvYXBpL2RldmljZS1ldmVudC5tZFwiLFxuICAgICAgICAgICAgXCIvZXZtYXJzL2FwaS9kZXZpY2UtZXZlbnQtbm8tcGFnaW5nLm1kXCIsXG4gICAgICAgICAgICBcIi9ldm1hcnMvYXBpL2RldmljZS1yZWFsdGltZS5tZFwiLFxuICAgICAgICAgICAgXCIvZXZtYXJzL2FwaS9kZXZpY2UtdHJhY2tlckFsYXJtU3RhdGUubWRcIixcbiAgICAgICAgICAgIFwiL2V2bWFycy9hcGkvZGV2aWNlLXRyYWNrZXJBcHBMb2NhdGlvbi5tZFwiLFxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOi9jYWl6ei9naXRodWIvRXZpZXdDbG91ZERvYy9zcmMvLnZ1ZXByZXNzL3NpZGViYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXGNhaXp6XFxcXGdpdGh1YlxcXFxFdmlld0Nsb3VkRG9jXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcc2lkZWJhclxcXFx6aC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovY2FpenovZ2l0aHViL0V2aWV3Q2xvdWREb2Mvc3JjLy52dWVwcmVzcy9zaWRlYmFyL3poLnRzXCI7aW1wb3J0IHsgc2lkZWJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5cbmV4cG9ydCBjb25zdCB6aFNpZGViYXIgPSBzaWRlYmFyKHtcbiAgXCIvemgvXCI6IFtcbiAgICBcIlwiLFxuICAgIHtcbiAgICAgIC8vIFx1NUZDNVx1ODk4MVx1NzY4NFx1RkYwQ1x1NTIwNlx1N0VDNFx1NzY4NFx1NjgwN1x1OTg5OFx1NjU4N1x1NUI1N1xuICAgICAgdGV4dDogXCJcdTRFMEFcdTRFOTFcdTY1QjlcdTY4NDhcIixcbiAgICAgIC8vIFx1NTNFRlx1OTAwOVx1NzY4NCwgXHU1MjA2XHU3RUM0XHU2ODA3XHU5ODk4XHU1QkY5XHU1RTk0XHU3Njg0XHU1NkZFXHU2ODA3XG4gICAgICBpY29uOiBcImljb25mb250IGljb24tZ3VpZGVcIixcbiAgICAgIC8vIFx1NTNFRlx1OTAwOVx1NzY4NFx1RkYwQ1x1NEYxQVx1NkRGQlx1NTJBMFx1NTIzMFx1NkJDRlx1NEUyQSBpdGVtIFx1OTRGRVx1NjNBNVx1NTczMFx1NTc0MFx1NEU0Qlx1NTI0RFxuICAgICAgcHJlZml4OiBcIi9ndWlkZS9cIixcbiAgICAgIC8vIFx1NTNFRlx1OTAwOVx1NzY4NCwgXHU4QkJFXHU3RjZFXHU1MjA2XHU3RUM0XHU2NjJGXHU1NDI2XHU1M0VGXHU0RUU1XHU2Mjk4XHU1M0UwXHVGRjBDXHU5RUQ4XHU4QkE0XHU1MDNDXHU2NjJGIGZhbHNlLFxuICAgICAgY29sbGFwc2libGU6IGZhbHNlLFxuICAgICAgLy8gXHU1RkM1XHU4OTgxXHU3Njg0XHVGRjBDXHU1MjA2XHU3RUM0XHU3Njg0XHU1QjUwXHU5ODc5XHU3NkVFXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICBcIi96aC9ndWlkZS9zZGstZGVtby9SRUFETUUubWRcIixcbiAgICAgICAgXCIvemgvZ3VpZGUvbG9jdHViZS1saXRlL1JFQURNRS5tZFwiLFxuICAgICAgICBcIi96aC9ndWlkZS9mb3J3YXJkL1JFQURNRS5tZFwiLFxuICAgICAgICBcIi96aC9ndWlkZS90aGlyZC1wYXJ0eS9SRUFETUUubWRcIixcbiAgICAgICAgXCIvemgvZ3VpZGUvbG9jdHViZS9SRUFETUUubWRcIixcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiRXZtYXJzLUxvY3R1YmVcdThCQkVcdTU5MDdcdTYzQTVcdTUxNjVcdTVFNzNcdTUzRjBcIixcbiAgICAgIGljb246IFwiaWNvbmZvbnQgaWNvbi1hLTk2X2lvdHN0dWRpb1wiLFxuICAgICAgcHJlZml4OiBcImV2bWFycy9cIixcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIFwiL3poL2V2bWFycy9nZXR0aW5nX3N0YXJ0ZWQubWRcIixcbiAgICAgICAgXCIvemgvZXZtYXJzL2N1c3RvbS1zcWwtdGVybS5tZFwiLFxuICAgICAgICBcIi96aC9ldm1hcnMvYXBpLXJlc3BvbnNlLm1kXCIsXG4gICAgICAgIFwiL3poL2V2bWFycy9ldmdwcy1wcm90b2NvbC5tZFwiLFxuICAgICAgICBcIi96aC9ldm1hcnMvZXZncHMtdHNsLm1kXCIsXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIlx1NUUzOFx1NzUyOEFQSVx1NjNBNVx1NTNFM1wiLFxuICAgICAgICAgIGljb246IFwiaWNvbmZvbnQgaWNvbi1hLTk2X2lvdHN0dWRpb1wiLFxuICAgICAgICAgIHByZWZpeDogXCJldm1hcnMvXCIsXG4gICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIFwiL3poL2V2bWFycy9hcGkvZGV2aWNlLWZ1bmN0aW9uLm1kXCIsXG4gICAgICAgICAgICBcIi96aC9ldm1hcnMvYXBpL2RldmljZS1xdWVyeS5tZFwiLFxuICAgICAgICAgICAgXCIvemgvZXZtYXJzL2FwaS9kZXZpY2Utc3RhdGUubWRcIixcbiAgICAgICAgICAgIFwiL3poL2V2bWFycy9hcGkvZGV2aWNlLWV2ZW50Lm1kXCIsXG4gICAgICAgICAgICBcIi96aC9ldm1hcnMvYXBpL2RldmljZS1ldmVudC1uby1wYWdpbmcubWRcIixcbiAgICAgICAgICAgIFwiL3poL2V2bWFycy9hcGkvZGV2aWNlLXJlYWx0aW1lLm1kXCIsXG4gICAgICAgICAgICBcIi96aC9ldm1hcnMvYXBpL2RldmljZS10cmFja2VyQWxhcm1TdGF0ZS5tZFwiLFxuICAgICAgICAgICAgXCIvemgvZXZtYXJzL2FwaS9kZXZpY2UtdHJhY2tlckFwcExvY2F0aW9uLm1kXCIsXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWdULFNBQVMsd0JBQXdCOzs7QUNBbkMsU0FBUyxpQkFBaUI7OztBQ0FWLFNBQVMsY0FBYztBQUU5VSxJQUFNLFdBQVcsT0FBTztBQUFBLEVBQzdCO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVLENBQUM7QUFBQSxNQUNULE1BQU07QUFBQSxNQUFnQixNQUFNO0FBQUEsTUFDNUIsTUFBTTtBQUFBLElBQ1IsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVLENBQUM7QUFBQSxNQUNULE1BQU07QUFBQSxNQUF1QixNQUFNO0FBQUEsTUFDbkMsTUFBTTtBQUFBLElBQ1IsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVLENBQUM7QUFBQSxNQUNULE1BQU07QUFBQSxNQUFnQixNQUFNO0FBQUEsTUFDNUIsTUFBTTtBQUFBLElBQ1IsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUNGLENBQUM7OztBQ3pDNlQsU0FBUyxVQUFBQSxlQUFjO0FBRTlVLElBQU0sV0FBV0MsUUFBTztBQUFBLEVBQzdCO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVLENBQUM7QUFBQSxNQUNULE1BQU07QUFBQSxNQUFjLE1BQU07QUFBQSxNQUMxQixNQUFNO0FBQUEsSUFDUixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVUsQ0FBQztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQW9CLE1BQU07QUFBQSxNQUNoQyxNQUFNO0FBQUEsSUFDUixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVUsQ0FBQztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQWdCLE1BQU07QUFBQSxNQUM1QixNQUFNO0FBQUEsSUFDUixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQ0YsQ0FBQzs7O0FDekNnVSxTQUFTLGVBQWU7QUFFbFYsSUFBTSxZQUFZLFFBQVE7QUFBQSxFQUMvQixLQUFLO0FBQUEsSUFDSDtBQUFBLElBQ0E7QUFBQTtBQUFBLE1BRUUsTUFBTTtBQUFBO0FBQUEsTUFFTixNQUFNO0FBQUE7QUFBQSxNQUVOLFFBQVE7QUFBQTtBQUFBLE1BRVIsYUFBYTtBQUFBO0FBQUEsTUFFYixVQUFVO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxVQUNOLFFBQVE7QUFBQSxVQUNSLFVBQVU7QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzs7O0FDbkRnVSxTQUFTLFdBQUFDLGdCQUFlO0FBRWxWLElBQU0sWUFBWUMsU0FBUTtBQUFBLEVBQy9CLFFBQVE7QUFBQSxJQUNOO0FBQUEsSUFDQTtBQUFBO0FBQUEsTUFFRSxNQUFNO0FBQUE7QUFBQSxNQUVOLE1BQU07QUFBQTtBQUFBLE1BRU4sUUFBUTtBQUFBO0FBQUEsTUFFUixhQUFhO0FBQUE7QUFBQSxNQUViLFVBQVU7QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFVBQ04sUUFBUTtBQUFBLFVBQ1IsVUFBVTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOzs7QUovQ0QsSUFBTyxnQkFBUSxVQUFVO0FBQUEsRUFDdkIsVUFBVTtBQUFBLEVBRVYsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLEVBQ1A7QUFBQSxFQUVBLFlBQVk7QUFBQSxJQUNWO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFBQSxFQUVBLE1BQU07QUFBQSxFQUVOLE1BQU07QUFBQSxFQUVOLFNBQVM7QUFBQSxFQUVULFNBQVM7QUFBQSxJQUNQLEtBQUs7QUFBQTtBQUFBLE1BRUgsUUFBUTtBQUFBO0FBQUEsTUFHUixTQUFTO0FBQUEsTUFFVCxRQUFRO0FBQUEsTUFFUixlQUFlO0FBQUEsTUFFZixhQUFhO0FBQUEsUUFDWCxVQUFVO0FBQUEsTUFDWjtBQUFBLElBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUtBLFFBQVE7QUFBQTtBQUFBLE1BRU4sUUFBUTtBQUFBO0FBQUEsTUFHUixTQUFTO0FBQUEsTUFFVCxRQUFRO0FBQUEsTUFFUixlQUFlO0FBQUE7QUFBQSxNQUdmLGFBQWE7QUFBQSxRQUNYLFVBQVU7QUFBQSxNQUNaO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUVBLFNBQVM7QUFBQSxJQUNQLFFBQVE7QUFBQSxNQUNOLHNCQUFzQixDQUFDLE1BQU07QUFBQSxNQUM3Qix5QkFBeUIsQ0FBQyxNQUFNO0FBQUEsSUFDbEM7QUFBQSxFQUNGO0FBQUEsRUFFQSxTQUFTO0FBQUEsSUFDUCxTQUFTO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixTQUFTO0FBQUE7QUFBQSxNQUNULE1BQU07QUFBQTtBQUFBLE1BQ04sUUFBUTtBQUFBO0FBQUEsTUFDUixVQUFVO0FBQUEsTUFDVixZQUFZO0FBQUE7QUFBQSxJQUNkO0FBQUE7QUFBQSxJQUdBLFdBQVc7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULFFBQVE7QUFBQSxNQUNSLFdBQVc7QUFBQSxNQUNYLEtBQUs7QUFBQSxNQUNMLGFBQWE7QUFBQSxNQUNiLFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULFlBQVk7QUFBQSxRQUNWLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQSxNQUN2QjtBQUFBLE1BQ0EsY0FBYztBQUFBLFFBQ1osU0FBUyxDQUFDLGFBQWEsUUFBUSxVQUFVLFNBQVMsTUFBTTtBQUFBLE1BQzFEO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUDtBQUFBLFVBQ0UsU0FBUztBQUFBLFVBQ1QsVUFBVSxDQUFDLEVBQUUsSUFBSSxNQUFNO0FBQ3JCLGdCQUFJLFFBQVE7QUFDVixxQkFBTztBQUFBLGdCQUNMLEtBQUs7QUFBQSxnQkFDTCxPQUFPLEVBQUUsTUFBTSxNQUFNO0FBQUEsZ0JBQ3JCLFNBQVM7QUFBQSxjQUNYO0FBQUEsVUFDSjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxLQUFLO0FBQUEsTUFDTCxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixlQUFlO0FBQUEsSUFDakI7QUFBQSxJQUdBLFlBQVk7QUFBQSxNQUNWLE9BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBMERGO0FBQ0YsQ0FBQzs7O0FEekxELE9BQU8sd0JBQXdCO0FBRS9CLElBQU8saUJBQVEsaUJBQWlCO0FBQUEsRUFDOUIsTUFBTTtBQUFBLEVBRU4sU0FBUztBQUFBLElBQ1AsS0FBSztBQUFBLE1BQ0gsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLGFBQWE7QUFBQSxJQUNmO0FBQUEsRUFDRjtBQUFBLEVBQ0EsaUJBQWlCLENBQUMsT0FBTztBQUN2QixPQUFHLElBQUksa0JBQWtCO0FBQ3pCLE9BQUcsSUFBSSxFQUFFLFFBQVEsS0FBSyxDQUFDO0FBQUEsRUFDekI7QUFBQSxFQUNBO0FBQUE7QUFBQTtBQUtGLENBQUM7IiwKICAibmFtZXMiOiBbIm5hdmJhciIsICJuYXZiYXIiLCAic2lkZWJhciIsICJzaWRlYmFyIl0KfQo=
