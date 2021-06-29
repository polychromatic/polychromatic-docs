---
layout: docs
title: Device Support
permalink: /device-support/
class: docs
---

## Backends

Polychromatic acts as a frontend for these projects:

* [OpenRazer] - open source driver and daemon supporting 100+ Razer peripherals on GNU/Linux.


**Providing support for these features:**

* Hardware effects
* Brightness
* Custom frames
* Read firmware data (e.g. serial, version)
* DPI and polling rate
* Multiple lighting zones


### Future Ambitions

In future, the project would like to integrate support for:

* [phue (Philips Hue)](https://github.com/polychromatic/polychromatic/issues/296)
* [OpenRGB](https://gitlab.com/CalcProgrammer1/OpenRGB) (SDK Client)


## Something not working?

If your device isn't being recognised, it's important to know
whether the issue is specific to Polychromatic (frontend) or the backend.

### OpenRazer

Try the **Troubleshooter** provided by Polychromatic (accessible via the **menu bar → Tools → OpenRazer**).
This identities most common problems. Alternately, take a look at [OpenRazer's
Troubleshooting Guide](https://github.com/openrazer/openrazer/wiki/Troubleshooting).

If your device isn't listed as supported, [search for an issue on their repository](https://github.com/openrazer/openrazer/issues)
and create one if the device doesn't exist. If you feel like hacking the code,
look at commits from [previous hardware support as examples](https://github.com/openrazer/openrazer/search?q=Add+support+for&type=commits)
and see if you can get your device working by replicating the data needed for a similar device.


### Reporting device-specific issues

While this project would love everything to "just work" for you, inevitably,
bugs slip through as the developer doesn't have the
hardware to verify.

Before reporting an issue:

* **Make sure you are using the latest (development) version of Polychromatic.**
    * Polychromatic calls these "edge" builds.
    * The software can be ran from the Git repository directly.
* **Make sure you are using the latest version of the backend.**
    * Some projects may call these "daily", "git" or "master" builds.

**OpenRazer**

Please try debugging the action with the backend directly and
[raise the issue on OpenRazer](https://github.com/openrazer/openrazer/issues)
if the problem continues. [OpenRazer] provides multiple ways to interact with the driver:

* Use [d-feet] or [QDBusViewer] to debug driver calls (via D-Bus)
* Try the Python library to communicate with the daemon.
* Test an alternate frontend application or project.

**Polychromatic**

For UI issues, incorrect/missing device implementation and behaviour problems,
search and raise the issue here [on Polychromatic's repository](https://github.com/polychromatic/polychromatic/issues?q=is%3Aissue).



[OpenRazer]: https://openrazer.github.io
[d-feet]: https://wiki.gnome.org/Apps/DFeet
[QDBusViewer]: https://doc.qt.io/qt-5/qdbusviewer.html
