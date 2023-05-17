import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
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
        "/guide/loctube/README.md",
      ]
    },
    {
      text: "Evmars-Loctube Solution",
      icon: "iconfont icon-a-96_iotstudio",
      prefix: "/evmars",
      children: [
        "/evmars/open-api.md",
        "/evmars/custom-sql-term.md",
        "/evmars/api-response.md",
        "/evmars/evgps-protocol.md",
        "/evmars/evgps-tsl.md",
        "/evmars/data-forwarding.md",
        {
          text: "Common API interface",
          icon: "iconfont icon-a-96_iotstudio",
          prefix: "evmars/",
          children: [
            "/evmars/api/device-get-property.md",
            "/evmars/api/device-write-property.md",
            "/evmars/api/device-function.md",
            "/evmars/api/device-query.md",
            "/evmars/api/device-state.md",
            "/evmars/api/device-event.md",
            "/evmars/api/device-event-no-paging.md",
            "/evmars/api/device-realtime.md",
            "/evmars/api/device-trackerAlarmState.md",
            "/evmars/api/device-trackerAppLocation.md",
          ]
        }
      ]
    }
  ],
});
