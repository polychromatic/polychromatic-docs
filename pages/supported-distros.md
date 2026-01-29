---
layout: docs
title: Supported Linux Distributions
permalink: /distros/
---

## Official Packages

We create packages for the following distros. This requires adding our repository,
or installing a package (`.pkg.tar.zst` or `.deb`) separately from the [release notes].

Updates can be expected shortly after a new release.

* Ubuntu (and derivatives) via [Launchpad]
* Debian via a [self-managed repository](https://debian.polychromatic.app)
* Arch Linux (and derivatives) via the [AUR] [(-git)]
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
