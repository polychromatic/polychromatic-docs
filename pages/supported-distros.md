---
layout: docs
title: Supported Linux Distributions
permalink: /distros/
---

## Dual Releases for Qt 5 & 6

Polychromatic is built using PyQt. Since [v0.9.0], we've migrated to Qt 6, but
will continue to support [v0.8.x] for distributions that require Qt 5 until
the next big release.

```
v0.8.3 ─┬─> v0.9.0 ──> v0.9.1 ──> v0.9.2 ──> v0.9.3   (Qt 6)
        │
        └─> v0.8.4 ──> v0.8.5 ──> v0.8.6 ──> v0.8.7   (Qt 5)
```

[v0.8.x]: https://github.com/polychromatic/polychromatic/tree/v0.8.x-backports
[v0.9.0]: https://github.com/polychromatic/polychromatic/releases/v0.9.0

---

## Official Packages

We create packages for the following distros. This requires adding our repository,
or installing a package (`.pkg.tar.zst` or `.deb`) separately from the [release notes].

Updates can be expected shortly after a new release.

* Debian, Ubuntu (and derivatives) via [Launchpad].
* Arch Linux (and derivatives) via the [AUR] [(-git)].
* Fedora, openSUSE and Mageia via [openSUSE Build Service](https://build.opensuse.org/package/show/hardware:razer/polychromatic)

See the [Download page] for instructions.

[Download page]: https://polychromatic.app/download/
[and derivatives]: https://polychromatic.app/download/

[AUR]: https://aur.archlinux.org/packages/polychromatic/
[(-git)]: https://aur.archlinux.org/packages/polychromatic-git/
[Launchpad]: https://launchpad.net/~polychromatic
[openSUSE Build Service]: https://build.opensuse.org/package/show/hardware:razer/polychromatic
[release notes]: https://github.com/polychromatic/polychromatic/releases

---

## Community Supported

The wider community looks after these packages. Update times may vary.

* [Gentoo (sys-apps/polychromatic)](https://packages.gentoo.org/packages/sys-apps/polychromatic)
* [NixOS (nixpkgs)](https://github.com/NixOS/nixpkgs/blob/master/pkgs/applications/misc/polychromatic/default.nix)
* [SlackBuilds.org](https://www.slackbuilds.org/repository/15.0/system/polychromatic/)
* [Solus packages repository](https://github.com/getsolus/packages/tree/main/packages/p/polychromatic)

See the [Download page] for instructions.

---

## Universal Package Formats

We highly recommend [using native packages](https://polychromatic.app/download/)
for the best feature experience. We understand there may be
reasons to use other formats, such as operating systems with an immutable (read only) file system.

We only provide a Flatpak providing the Controller experience only.
There are limitations, and you still need to install OpenRazer on the host.
See the [Flatpak download page] for details.

AppImage and Snaps are not available at this time.

[Flatpak download page]: https://polychromatic.app/download/flatpak/
