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

No, but we're thinking about it.
The software is currently focused on expanding features before carrying the weight
of supporting other operating systems.

Plus, we need cross-platform backends. For example, [OpenRazer](/openrazer/) is technically tied to the
Linux kernel.

---

### Can I remap keys?

Not with this software. We recommend [input-remapper](https://github.com/sezanzeb/input-remapper).

Key remapping (or "key rebinding") is actually a generic feature.
Polychromatic intends to use [boppreh/keyboard] and [boppreh/mouse] projects in future for
handling interactions with RGB software effects, but a full key remapping solution might not be implemented.

[boppreh/keyboard]: https://github.com/boppreh/keyboard
[boppreh/mouse]: https://github.com/boppreh/mouse

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

Not yet, but Polychromatic will introduce profile ("presets") functionality [in a future update](/roadmap/).

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
area obsolete. We don't so. [Take a look the "Supported Distros" page](/distros/#tray-applet-vs-desktop-environments)
on how to restore functionality.

Alternately, run the program from a Terminal to see what's up:

    polychromatic-tray-applet -v

---

### When will the next version be released?

No ETAs. Future releases are out as soon as humanly possible!

The [roadmap](/roadmap/) represents ideas of what we'd like to achieve with this project.

> **"You can't rush art."**
>
> -- Geri the Cleaner

---

### How can I send some ka-ching?

The community has asked.
While the developer enjoys building this software in his free time, a
little "thank you" money sparks excitment and humble feelings.
Be sure to leave a message, and thank you for your generosity!

Currently, only PayPal is available: <https://paypal.me/LukeHorwell>
