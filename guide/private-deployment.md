# 私有化部署

本文档面向 `wx2020/EasyTier` 私有构建。这个构建保留 EasyTier 的组网能力，但移除了默认连接 EasyTier 官方/公共基础设施的路径。

## 目标

私有化部署的目标是让客户端默认不依赖以下公共服务：

- 官方配置服务器
- 官方或公共 STUN 服务器
- 官方 Web 控制台 API
- 安装脚本内置公共 peer
- Ohrs 配置分享链接的官方域名

README 中用于说明上游项目、官网和文档来源的链接可以保留；它们不是运行时依赖。

## 代码分支

`wx2020/EasyTier` 使用四个长期分支维护：

| 分支 | 用途 |
| --- | --- |
| `official-main` | 同步上游 `EasyTier/EasyTier` 主分支 |
| `official-release` | 同步上游最新发布 tag |
| `dev` | 基于 `official-main` 合并后的开发和测试分支 |
| `main` | 合并私有化改动后的稳定分支 |

私有化补丁当前在 `dev` 分支验证，确认后再合入 `main`。

## 已移除的默认官方依赖

当前私有化补丁包含这些行为变化：

- `--config-server admin` 这种短用户名格式不再回退到 `udp://config-server.easytier.cn:22020/admin`。
- `--config-server` 必须传入完整 URL，例如 `udp://config.example.com:22020/admin`。
- 默认 UDP/TCP/IPv6 STUN 服务器列表为空。
- Web 前端默认 `api_host` 为空，不再指向官方 Web API。
- CLI 启动日志不再提示官方 Web 控制台地址。
- 安装脚本默认配置不再写入 `tcp://public.easytier.top:11010`。
- Web UI 文案不再提示“仅用户名使用官方服务器”。
- Ohrs 配置分享链接不再生成 `easytier.cn/comp_cfg`。

## 必须自建的组件

至少需要自建这些组件：

1. 配置服务器

   用于集中下发配置。客户端必须使用完整 URL：

   ```shell
   easytier-core --config-server udp://config.example.com:22020/admin
   ```

2. 公共 peer / 共享节点

   没有公网地址的节点需要至少一个可访问的 peer 作为发现和中继入口：

   ```shell
   easytier-core --hostname public-1 --network-name infra --network-secret '<secret>'
   ```

   客户端配置里显式添加自己的 peer：

   ```toml
   [[peer]]
   uri = "tcp://public-1.example.com:11010"
   ```

3. STUN 服务

   私有构建不会内置 STUN 地址。需要 NAT 探测时，请部署自己的 STUN 服务，并在配置文件或启动参数里显式填写。

4. Web 控制台

   如果使用 Web 管理界面，需要部署自己的 Web API 和前端，并配置前端 API 地址。私有构建不会默认连接官方 API。

5. 发布与下载源

   文档站下载页默认指向 `wx2020/EasyTier` 的 GitHub Releases。发布二进制时请在该仓库创建 release 和 tag。

## 推荐部署顺序

1. 部署至少一个公网 peer。
2. 部署配置服务器，并确认客户端可以通过完整 URL 连接。
3. 按需部署 STUN 服务。
4. 部署 Web 控制台和 API。
5. 使用 `dev` 分支跑 Actions 测试。
6. 验证通过后合并到 `main` 并发布 release。

## 检查清单

发布前建议确认：

- 没有运行时默认域名指向 `easytier.cn`、`easytier.top` 或公共 peer。
- 默认配置文件不包含公共 peer。
- `--config-server` 短用户名输入会报错，而不是回退官方服务。
- 文档下载页指向 `wx2020/EasyTier`。
- GitHub Actions 的测试和构建通过。
