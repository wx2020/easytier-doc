# Private Deployment

This page documents the `wx2020/EasyTier` private build. The build keeps EasyTier's networking features, but removes default paths that connect clients to EasyTier official or public infrastructure.

## Goal

The private build should not depend on these public services by default:

- official config server
- official or public STUN servers
- official Web Console API
- public peer embedded in install scripts
- official host used by Ohrs config share links

README links that describe the upstream project, website, or documentation can remain. They are not runtime dependencies.

## Branches

`wx2020/EasyTier` uses four long-lived branches:

| Branch | Purpose |
| --- | --- |
| `official-main` | Tracks upstream `EasyTier/EasyTier` main |
| `official-release` | Tracks the latest upstream release tag |
| `dev` | Development and testing branch based on `official-main` |
| `main` | Stable branch with private deployment changes |

Private patches are validated on `dev` before they are merged into `main`.

## Removed Defaults

The current private patch changes these behaviors:

- `--config-server admin` no longer falls back to `udp://config-server.easytier.cn:22020/admin`.
- `--config-server` requires a full URL, for example `udp://config.example.com:22020/admin`.
- Default UDP/TCP/IPv6 STUN server lists are empty.
- The Web frontend default `api_host` is empty instead of pointing to the official Web API.
- CLI startup logs no longer advertise the official Web Console address.
- Install scripts no longer create a default `tcp://public.easytier.top:11010` peer.
- Web UI copy no longer suggests username-only config server values.
- Ohrs config share links no longer generate `easytier.cn/comp_cfg` URLs.

## Services To Self-Host

At minimum, self-host these components:

1. Config server

   It is used for centralized config delivery. Clients must pass a full URL:

   ```shell
   easytier-core --config-server udp://config.example.com:22020/admin
   ```

2. Public peer / shared node

   Nodes without public addresses need at least one reachable peer for discovery and relay entry:

   ```shell
   easytier-core --hostname public-1 --network-name infra --network-secret '<secret>'
   ```

   Add your peer explicitly in client config:

   ```toml
   [[peer]]
   uri = "tcp://public-1.example.com:11010"
   ```

3. STUN service

   The private build does not embed STUN addresses. If NAT probing is required, deploy your own STUN service and configure it explicitly.

4. Web Console

   If you use the Web management UI, deploy your own Web API and frontend, then configure the frontend API address. The private build does not connect to the official API by default.

5. Release and download source

   This documentation site points downloads to `wx2020/EasyTier` GitHub Releases. Publish binaries by creating tags and releases in that repository.

## Recommended Order

1. Deploy at least one public peer.
2. Deploy the config server and verify clients can connect with a full URL.
3. Deploy STUN if your NAT environment needs it.
4. Deploy the Web Console and API.
5. Run GitHub Actions tests on `dev`.
6. Merge into `main` and publish a release after validation.

## Release Checklist

Before publishing, verify:

- no runtime default domains point to `easytier.cn`, `easytier.top`, or public peers
- default config files do not contain public peers
- username-only `--config-server` values fail instead of falling back to official services
- the download page points to `wx2020/EasyTier`
- GitHub Actions test and build workflows pass
