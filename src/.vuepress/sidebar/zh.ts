import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      // 必要的，分组的标题文字
      text: "上云方案",
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
        "/zh/guide/loctube/README.md",
      ]
    },
    {
      text: "Evmars-Loctube设备接入平台",
      icon: "iconfont icon-a-96_iotstudio",
      prefix: "evmars/",
      children: [
        "/zh/evmars/getting_started.md",
        "/zh/evmars/custom-sql-term.md",
        "/zh/evmars/api-response.md",
        {
          text: "常用API接口",
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
            "/zh/evmars/api/device-trackerAppLocation.md",
          ]
        }
      ]
    }
  ],
});
