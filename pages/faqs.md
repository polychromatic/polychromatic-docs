---
layout: docs
title: FAQs
permalink: /faqs/
---

### What is Polychromatic?

Polychromatic is a frontend for [OpenRazer](/openrazer/).

In future, we'd like to be vendor agnostic, to become one place to manage
various kinds of RGB from any brand.

**Objectives:**

- Easy and simple to use
- Focus on design and software quality
- Deliver an RGB experience agnostic to any ecosystem
- Integrate useful features to complement RGB functionality

---

### Besides Razer, are other brands supported, like Logitech and Corsair?

Not right now. Our vision is to add support for open source projects like [phue], [OpenRGB] and [libratbag].
There is no ETA and isn't being worked on right now.

[phue]: https://github.com/polychromatic/polychromatic/issues/296
[OpenRGB]: https://github.com/polychromatic/polychromatic/issues/340
[libratbag]: https://github.com/polychromatic/polychromatic/issues/339

We'd like the application to have more robust internals before taking on other vendors.
In the meantime, it'll be grand if these other projects have a working Python library ready to use.

---

### Is Windows or macOS supported?

Not right now. This project has some other priorities first before we carry
the weight of cross-platform support. Maybe we'll be ready in a year or two!

Plus, we need cross-platform Python libraries to integrate different vendors.
The driver for [OpenRazer](/openrazer/), for example, is technically tied
to the Linux kernel.

---

### Can I remap keys?

No. Polychromatic's main strength will be RGB lighting effects.

Key remapping (or "key rebinding") is actually a generic operating system feature.
Some hardware might remap their buttons/keys at a hardware level, but this is
not supported in OpenRazer.

OpenRazer recommends [input-remapper](https://github.com/sezanzeb/input-remapper).

---

### Can I create my own effects?

Yes! Currently this is in the form of frames and pixels.

While the editor makes it possible to hand craft your own wave of colours,
this is limiting for complex and interactivity requirements.
[We aim to tidy up the app's internals and then introduce new tools](/roadmap/).

Effects can be created for any device supporting individually addressable LEDs (matrix).
These effects can light up specific keys for your applications, games
or just for ambience.

A background process runs the effect, sending the frames to
the hardware (or just once if it's static). Upon reboot, the application will
restart playback.

---

### Can I create my own profiles?

"Profiles" is a bit ambiguous. If you mean the ability to create a "preset" of
settings/effects for your devices, then that's something we'll work on [in a future update!](/roadmap/)

---

### Why is the CLI deprecated?

We introduced the command line interface (CLI) from a feature request to allow
users to control devices from the terminal. While this was an interesting feature
initially, maintaining multiple interfaces creates overhead for development.

In future, we'll be prioritising the graphical user experience. The CLI doesn't
align with our future plans, and isn't technically efficient if you have multiple
devices. We're not sure if it's been used for scripting, for human input
or for automation (e.g. cron).

In the next major version, `polychromatic-cli` will be removed. As an alternate:

* Try [razer-cli](https://github.com/lolei/razer-cli)
* [Use OpenRazer's Python library directly.](https://github.com/openrazer/openrazer/tree/master/examples)
* Use `dbus-send` to send D-Bus signals directly to the `org.razer` session bus.

---

### This software looks alien!

The dark and green design is an evolution from when the project started, aiming to
deliver a distinct look & feel across all operating systems. Sadly,
not all Linux distributions integrate Qt applications very well.

If our styling isn't your taste, you'll be pleased to know you can turn on **"Use system theme"**
from the preferences.

---

### The tray applet is running, but I don't see it!

It's likely that your desktop environment considers the "system tray" or indicator
area obsolete. We don't so. [Take a look the "Supported Distros" page](/quirks/#missing-tray-applet)
on how to restore functionality.

Alternately, run the program from a Terminal to see what's up:

    polychromatic-tray-applet -v
