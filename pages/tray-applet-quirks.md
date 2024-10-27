---
layout: docs
title: Known Quirks
permalink: /quirks/
---

## "Missing" Tray Applet

Some desktop environments consider "system tray" to be obsolete.
As a result, the tray applet may not work straight out of the box
and will need additional steps.

| Distro / Environment          | Notes                                           |
| ----------------------------- | ----------------------------------------------- |
| ![](/images/distros/ubuntu.svg) Ubuntu / GNOME 3 | Install [gnome-shell-extension-appindicator](https://packages.ubuntu.com/focal/gnome-shell-extension-appindicator) using your package manager.
| ![](/images/distros/arch.svg) Arch / GNOME 3 | Install [gnome-shell-extensions-appindicator](https://archlinux.org/packages/extra/any/gnome-shell-extension-appindicator/)
| ![](/images/distros/gnome.svg) GNOME 3 / Other | Install a GNOME extension that provides AppIndicator support.
| ![](/images/distros/elementary.svg) elementary OS / Pantheon  | Install [wingpanel-community-indicators](https://github.com/MvBonin/wingpanel-community-indicators)

If things have changed, or we missed something, do let us know by raising an issue.
