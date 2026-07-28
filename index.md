---
layout: home

hero:
  name: wx2020 EasyTier
  text: 自修改私有化构建
  tagline: 保留 EasyTier 组网能力，默认不依赖官方或公共基础设施
  image:
    light: '/gui-config-light.png'
    dark: '/gui-config-dark.png'
    alt: 'EasyTier GUI 配置界面'
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/introduction
    - theme: alt
      text: 下载
      link: /guide/download
    - theme: alt
      text: 私有化部署
      link: /guide/private-deployment

features:
  - title: 私有化默认值
    details: 默认不写入官方配置服务器、公共 STUN、公共 peer 或官方 Web API。
    link: /guide/private-deployment
  - title: 完整配置服务器 URL
    details: --config-server 需要传入完整 URL，短用户名不会回退到官方服务。
    link: /guide/private-deployment
  - title: 自建基础设施
    details: 按需自建配置服务器、公共 peer、STUN 服务和 Web 控制台。
    link: /guide/private-deployment
  - title: 同步上游
    details: 使用 official-main、official-release、dev、main 四个长期分支维护私有补丁。
    link: /guide/private-deployment
  - title: 多平台
    details: 保留 Windows、macOS、Linux、FreeBSD、Android 等平台构建能力。
    link: /guide/download
  - title: EasyTier 能力
    details: 继续支持 P2P、子网代理、Magic DNS、WireGuard 接入和多协议传输。
    link: /guide/networking
---

<Home />
