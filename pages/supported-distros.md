---
layout: docs
title: Packages for Linux Distributions
permalink: /distros/
---

## Official Packages

We package officially for the following distros. Updates can be expected
shortly after a new release.

{:.has-icons}

| Distro                                                                                    | Stable | Testing | Edge | Split?`**` | Provider      |
| ----------------------------------------------------------------------------------------- | ------ | ------- | ---- | ------ | ------------- |
[![](/images/distros/ubuntu.svg) Ubuntu](https://polychromatic.app/download/ubuntu/) `*`    | Yes    | Yes     | Yes  | Yes    | [Launchpad]
[![](/images/distros/debian.svg) Debian](https://polychromatic.app/download/debian/)        | Yes    | Yes     | Yes  | Yes    | [Launchpad]
[![](/images/distros/arch.svg) Arch](https://polychromatic.app/download/arch/)              | Yes    |         | Yes  |        | [AUR]&nbsp;[(-git)]
[![](/images/distros/fedora.svg) Fedora](https://polychromatic.app/download/fedora/)        | Yes    |         |      |        | [openSUSE Build Service]
[![](/images/distros/opensuse.svg) openSUSE](https://polychromatic.app/download/opensuse/)  | Yes    |         |      |        | [openSUSE Build Service]
[![](/images/distros/mageia.svg) Mageia](https://polychromatic.app/download/mageia/)        | Yes    |         |      |        | [openSUSE Build Service]

> `*` Ubuntu includes flavours and derivatives, like Linux Mint, elementaryOS, Pop!_OS and Zorin OS.
>
> `**` Split packaging allows installation of specific features.

[Launchpad]: https://launchpad.net/~polychromatic
[AUR]: https://aur.archlinux.org/packages/polychromatic/
[(-git)]: https://aur.archlinux.org/packages/polychromatic-git/
[openSUSE Build Service]: https://build.opensuse.org/package/show/hardware:razer/polychromatic

---


## Community Supported

We don't look after these packages and no direct communication with the maintainers.
Update times may vary.

{:.has-icons}
Distro                  | Repository                | Maintainer
------------------------|---------------------------|-----------------------|
[![](/images/distros/solus.svg) Solus](https://polychromatic.app/download/solus/)  | [Solus x86_64] | (Multiple)
[![](/images/distros/gentoo.svg) Gentoo](https://polychromatic.app/download/gentoo/)  | [vifino/vifino-overlay] | [vifino]
[![](/images/distros/redhat.svg) Red Hat](https://polychromatic.app/download/redhat/) | [moozhub/yum-repo-mooz] | [moozhub]

[Solus x86_64]: https://solus.pkgs.org/rolling/solus-unstable-x86_64/polychromatic-0.3.12-16-1-x86_64.eopkg.html
[vifino]: https://github.com/vifno
[moozhub]: https://github.com/moozhub
[vifino/vifino-overlay]: https://github.com/vifino/vifino-overlay/tree/master/app-misc/
[moozhub/yum-repo-mooz]: https://github.com/moozhub/yum-repo-mooz

If there's a dependency or packaging problem, raise an issue on their repository or bug tracker.

---

## Universal Package Formats

Sorry! Polychromatic does **not** offer AppImages, Flatpaks or Snaps at the moment.

---

## Tray Applet vs Desktop Environments

A few desktop environments consider "system tray" to be obsolete.
As a result, the tray applet may not work straight out of the box
and will need additional steps.

| Environment   | Distro Family | Notes                                           |
| ------------- | ------------- | ----------------------------------------------- |
| GNOME 3       | ![](/images/distros/ubuntu.svg) Ubuntu   | Install [gnome-shell-extension-appindicator](https://packages.ubuntu.com/focal/gnome-shell-extension-appindicator) using your package manager.
| GNOME 3       | ![](/images/distros/arch.svg) Arch       | Install [gnome-shell-extensions-appindicator-git](https://aur.archlinux.org/packages/gnome-shell-extension-appindicator-git/) from the AUR.
| GNOME 3       | Other         | Install the GNOME extension that provides AppIndicator support.
| Pantheon      | elementaryOS  | [This feature was removed in 5.0 "Juno"](https://www.reddit.com/r/elementaryos/comments/8zdrvz/any_way_to_get_back_indicators_in_juno/). You can restore the feature by [following these instructions](https://www.linuxuprising.com/2018/08/how-to-re-enable-ayatana-appindicators.html).

If things have changed, or we missed something, do let us know by raising an issue.
