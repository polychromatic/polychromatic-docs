---
layout: docs
title: Controller
permalink: /controller/
---

This is the main interface for this application. All of the features are
supported here.

For information about specific tabs:

[Devices]{:.btn} [Effects]{:.btn}

[Devices]: /controller/devices/
[Effects]: /controller/effects/

---

## States & Refreshing

If the software is left open, it is expected that the state will de-sync
when making changes using the tray applet, command line, or third party applications.
Press <kbd>F5</kbd> to refresh the current tab.

Likewise, should devices be inserted/removed while the application is running, it may be
necessary to forcefully reload due to the way the backend(s) are initialised.
To do this, press <kbd>CTRL</kbd> + <kbd>F5</kbd>.

> **Didn't work?**
>
> If your device suddenly becomes unrecognised, it may be necessary to restart
> the backend too via **Tools → [OpenRazer](/openrazer/) → Restart Daemon**
> or in the **Backends** tab of **Preferences**.

---

## Look & Feel

The application uses its own theme, but if you prefer, you can
switch to your system's theme by enabling the option in **Preferences**.
The menu bar can also be hidden if desired.

![Screenshot of Polychromatic on KDE Plasma](/images/guide/controller-native.webp)

{:.caption}
Running on KDE Plasma with Breeze Dark theme

> **Unfortunately...**
>
> If you're using a distro based on GTK (e.g. Ubuntu, with GNOME 3 desktop),
your distribution may not ship the necessary configuration to Qt integrate applications (like Polychromatic)
to use your GTK theme. If this impacts you, look up online how to use the system theme for Qt apps
for your distribution.

---

## Background Tasks

![Screenshot of Polychromatic Background Tasks](/images/guide/background-tasks.webp)

{:.caption}
Tools → View Background Tasks

This dialog provides transparency to the processes Polychromatic is
running in the background. These are necessary to provide features like the
playback of a software effect.

The project aims to only have processes running when necessary and with
as little memory usage as possible.

---

## Backend Options

![Screenshot of menu bar](/images/guide/backend-menu.webp)

Each backend has its own menu of options containing their web links, version
information and in some cases, a convenient configuration tool to edit
settings provided by their driver or daemon.

Polychromatic also provides a troubleshooter to identify installation problems.

![Screenshot of OpenRazer troubleshooter](/images/guide/troubleshooter.webp)
