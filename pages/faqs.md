---
layout: docs
title: FAQs
permalink: /faqs/
class: docs
---

### What is Polychromatic?

Polychromatic is becoming a vendor agnostic frontend to manage various kinds
of RGB peripherals from different brands. Originally, [we started out as the first
frontend for OpenRazer.](/history/)

**Objectives:**

- Focus on design and software quality
- Easy and simple to use
- Deliver an RGB experience agnostic to any ecosystem
- Integrate useful features typically marketed with RGB peripherals

---

### Besides Razer, are other brands supported, like Logitech and Corsair?

Potentially! Right now, only [OpenRazer](/openrazer/) is supported. Our vision is to add
support for open source projects like [phue], [OpenRGB] and [libratbag].
There is no ETA on working on this, so it will be quite some time before this happens.

[phue]: https://github.com/polychromatic/polychromatic/issues/296
[OpenRGB]: https://github.com/polychromatic/polychromatic/issues/340
[libratbag]: https://github.com/polychromatic/polychromatic/issues/339

If you're a developer, you can add integration in the form of a backend module for this program.
The backend should ideally provide Python bindings for third party software
to connect/bind to. However...

> **Breaking Changes Ahead!**
> * There will be some significant changes to the backend code between v0.7.0 and its succeeding version.
> * This is not yet documented.

If you're not a coder, but keen to see support, keep an eye on the project as
we will need to assemble a group of testers when the time is right.
The lead developer of this application only has Razer RGB hardware.

---

### Is Windows or macOS supported?

Not right now, but it is an objective to port to these platforms in the distant future.
The software is currently focused on developing features before carrying the weight
of supporting other operating systems.

Plus, we need cross-platform backends. OpenRazer, for example, is technically tied to the
Linux kernel, although there is some progress to bring it to other platforms.
[Read more on OpenRazer.](/openrazer/)

---

### Can I remap keys?

Not yet. This is a future ambition. In the meantime, other users have reported using these utilities:

* [key-mapper](https://github.com/sezanzeb/key-mapper) _(Python 3, GTK)_ - **Recommended**
* [Keyboarding Master](https://sites.google.com/site/keyboardingmaster/) _(Java, GUI)_
* [Pystromo](https://github.com/byrongibson/Pystromo) _(Python 2)_

Polychromatic intends to use [boppreh/keyboard] and [boppreh/mouse] projects in future.

Key remapping (or "key rebinding") is actually a generic feature. Try the tools above
or look up how to do this with Xorg.

[boppreh/keyboard]: https://github.com/boppreh/keyboard
[boppreh/mouse]: https://github.com/boppreh/mouse
[Can I remap keys?]: #can-i-remap-keys

Things get complicated for Razer hardware with a "Hypershift" button, as this
functionality isn't supported in OpenRazer. It's currently unknown if the
settings are stored in hardware or requires software. Some investigation
is required for an agnostic software solution.

---

### Can I create my own effects?

Yes! Currently this is in the form of frames and pixels.

While the editor makes it possible to hand craft your own wave of colours, or pulsate
specific LEDs, this is somewhat limiting for complex and interactivity requirements.
[The upcoming v1.0.0 update](/roadmap/) aims to introduce new tools.

Effects can be created for any device supporting individually addressable LEDs (matrix).
Create effects to light up specific keys for your applications and games,
or just for ambience.

A background process runs your effect, sending the frames to
the hardware (or just once if it's static). Upon reboot, the application will
restart playback.

---

### Can I create my own profiles?

Not yet, but Polychromatic will add profile ("presets") functionality [in the upcoming v1.0.0 update](/roadmap/).

---

### This software looks alien!

The dark and green design is an evolution from when the project started, aiming to
deliver a distinct look & feel across all operating systems. Sadly,
not all Linux distributions integrate Qt applications very well.

If our styling isn't your taste, you'll be pleased to know you can turn on **"Use system theme"**
from the preferences.

---

### The tray applet is running, but I don't see it!

It's probable that your desktop environment considers the "system tray" or indicator
area obsolete. We don't so. [Take a look the "Supported Distros" page](/distros/#tray-applet-vs-desktop-environments)
on how to restore functionality.

Alternately, run the program from a Terminal to see what's up:

    polychromatic-tray-applet -v

---

### When will the next version be released?

> [v0.7.0 is here! See the release notes](https://github.com/polychromatic/polychromatic/releases/tag/v0.7.0)

Check out [the roadmap](/roadmap/) to see what new and improved features
are in the pipeline. If you want to be the first, try the cutting **"edge"** builds
(if available for your distribution).

As with any open source project, progress can be slow at times. It was 3 years since the
release of v0.3.12, with [not just one](https://github.com/polychromatic/polychromatic/releases/tag/v0.4.0),
or [two](https://github.com/polychromatic/polychromatic/releases/tag/v0.5.0), but **three** refactors internally!
We're back on track, with the Controller using a desktop toolkit (PyQt5) instead
of being based on hybrid web technologies.

No ETAs. Future releases will be out as soon as humanly possible!

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
