---
layout: docs
title: Known Quirks
permalink: /quirks/
---

## "Missing" Tray Applet

Some desktop environments consider "system tray" to be obsolete.
As a result, the tray applet may not work straight out of the box
and will need additional steps.

| Environment   | Distro Family | Notes                                           |
| ------------- | ------------- | ----------------------------------------------- |
| GNOME 3       | ![](/images/distros/ubuntu.svg) Ubuntu   | Install [gnome-shell-extension-appindicator](https://packages.ubuntu.com/focal/gnome-shell-extension-appindicator) using your package manager.
| GNOME 3       | ![](/images/distros/arch.svg) Arch       | Install [gnome-shell-extensions-appindicator-git](https://aur.archlinux.org/packages/gnome-shell-extension-appindicator-git/) from the AUR.
| GNOME 3       | Other         | Install the GNOME extension that provides AppIndicator support.
| Pantheon      | elementaryOS  | [This feature was removed in 5.0 "Juno"](https://www.reddit.com/r/elementaryos/comments/8zdrvz/any_way_to_get_back_indicators_in_juno/). You can restore the feature by [following these instructions](https://www.linuxuprising.com/2018/08/how-to-re-enable-ayatana-appindicators.html).

If things have changed, or we missed something, do let us know by raising an issue.
