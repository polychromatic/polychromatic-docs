---
layout: docs
title: Distros and Environments
permalink: /distros/
class: docs
---

## Official Packages

{:.has-icons}
| Distro                                        | Stable | Testing | Edge | Provider      |
| --------------------------------------------- | ------ | ------- | ---- | ------------- |
![](/images/distros/ubuntu.svg) [Ubuntu]`*`     | Yes    | Yes     | Yes  | [Launchpad]
![](/images/distros/debian.svg) [Debian]        | Yes    | Yes     | Yes  | [Launchpad]
![](/images/distros/arch.svg) [Arch]            | Yes    |         | Yes  | [AUR]&nbsp;[(-git)]
![](/images/distros/fedora.svg) [Fedora]        | Yes    |         |      | [openSUSE Build Service]
![](/images/distros/opensuse.svg) [openSUSE]    | Yes    |         |      | [openSUSE Build Service]
![](/images/distros/mageia.svg) [Mageia]        | Yes    |         |      | [openSUSE Build Service]
![](/images/distros/solus.svg) [Solus]          | Yes    |         |      | [openSUSE Build Service]

`*` _Ubuntu includes flavours and derivatives, such as Linux Mint, elementaryOS, Pop!_OS and Zorin OS_

* **Stable** packages are for a tried & tested experience (at the time of release).
* **Testing** packages are for pre-release testing.
* Cutting **"Edge"** packages have all the latest code, which may be incomplete
  or buggy at times.

[Ubuntu]: https://polychromatic.app/download/ubuntu/
[Debian]: https://polychromatic.app/download/debian/
[Arch]: https://polychromatic.app/download/arch/
[Fedora]: https://polychromatic.app/download/fedora/
[openSUSE]: https://polychromatic.app/download/opensuse/
[Mageia]: https://polychromatic.app/download/mageia/
[Solus]: https://polychromatic.app/download/solus/

[Launchpad]: https://launchpad.net/~polychromatic
[AUR]: https://aur.archlinux.org/packages/polychromatic/
[(-git)]: https://aur.archlinux.org/packages/polychromatic-git/
[openSUSE Build Service]: https://build.opensuse.org/package/show/hardware:razer/polychromatic

---

## Universal Package Formats

Sorry! Polychromatic does **not** offer AppImages, Flatpaks or Snaps at the moment.

---

## Community Supported

Distro                  | Repository                | Maintainer
------------------------|---------------------------|-----------------------|
[Gentoo]                | [vifino/vifino-overlay]   | [vifino]
[Red Hat]              | [moozhub/yum-repo-mooz]   | [moozhub]

[Gentoo]: https://polychromatic.app/download/gentoo/
[Red Hat]: https://polychromatic.app/download/redhat/

[vifino]: https://github.com/vifno
[moozhub]: https://github.com/moozhub
[vifino/vifino-overlay]: https://github.com/vifino/vifino-overlay/tree/master/app-misc/
[moozhub/yum-repo-mooz]: https://github.com/moozhub/yum-repo-mooz

If there's a dependency or packaging problem, raise an issue on their repository.

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
