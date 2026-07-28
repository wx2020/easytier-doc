---
layout: home

hero:
  name: wx2020 EasyTier
  text: Private modified build
  tagline: Keeps EasyTier networking features while avoiding official or public infrastructure by default
  image:
    light: '/gui-config-light.png'
    dark: '/gui-config-dark.png'
    alt: 'EasyTier GUI configuration interface'
  actions:
    - theme: brand
      text: Get Started
      link: /en/guide/introduction
    - theme: alt
      text: Download
      link: /en/guide/download
    - theme: alt
      text: Private Deployment
      link: /en/guide/private-deployment

features:
  - title: Private Defaults
    details: No official config server, public STUN server, public peer, or official Web API is configured by default.
    link: /en/guide/private-deployment
  - title: Full Config Server URL
    details: --config-server requires a full URL. Username-only values do not fall back to official services.
    link: /en/guide/private-deployment
  - title: Self-Hosted Infrastructure
    details: Self-host the config server, public peers, STUN service, and Web Console as needed.
    link: /en/guide/private-deployment
  - title: Upstream Sync
    details: Maintained with official-main, official-release, dev, and main long-lived branches.
    link: /en/guide/private-deployment
  - title: Cross-Platform
    details: Keeps build coverage for Windows, macOS, Linux, FreeBSD, Android, and other targets.
    link: /en/guide/download
  - title: EasyTier Features
    details: Continues to support P2P, subnet proxy, Magic DNS, WireGuard access, and multiple transports.
    link: /en/guide/networking
---

<Home />
