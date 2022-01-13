---
layout: docs
title: OpenRazer
permalink: /openrazer/
---

### What is OpenRazer?

[OpenRazer] is an open source driver and daemon for Razer USB peripherals.
The project analyses protocols through packet capturing, with the aim to
support hardware features, like lighting and DPI.

The daemon is written in Python, communicating with the driver using sysfs,
and accessible to applications/scripts via D-Bus. The driver handles the
actual USB payloads and is built using DKMS so it can be recompiled across
kernel updates.

> This project is NOT supported or created by Razer Inc.

[OpenRazer]: https://openrazer.github.io

---

### Does OpenRazer support Windows or macOS?

Officially, no. One of the OpenRazer team members has experimented by
rewriting OpenRazer to handle everything in userspace, eliminating
the dependency on DKMS drivers for GNU/Linux. This rewrite uses [hidapi](https://github.com/signal11/hidapi)
but is still in early development.

* <https://github.com/z3ntu/razer_test>
* <https://github.com/z3ntu/python-openrazer>
* <https://github.com/z3ntu/openrazer-shim>
* <https://github.com/openrazer/openrazer/issues/623>

There are other projects that use OpenRazer's efforts.

> **Use at your own risk:** These third party projects use code/knowledge from OpenRazer,
> but have nothing to do with the project itself. Please do not create issues on the OpenRazer repository
> for other operating systems or projects.

**Windows**

[openrazer-win32](https://github.com/CalcProgrammer1/openrazer-win32)
is an unofficial wrapper that produces an OpenRazer DLL for Windows. [OpenRGB](https://openrgb.org/)
is a program implementing this library.

* <https://gitlab.com/CalcProgrammer1/OpenRGB/>

**macOS**

There is an Electron-based project which ports devices individually from OpenRazer.

* <https://github.com/1kc/razer-macos>

---

### Can I use on-the-fly macro recording?

Yes, the OpenRazer daemon supports this for Razer keyboards (like the BlackWidow Chroma)
that have dedicated macro keys (M1-M5). Keystrokes can be recorded and stored in
the daemon until it is stopped, meaning they are **not saved** across sessions,
but it's useful for one-off repetitive tasks!

> **Note:** The key combination is slightly different to Razer's official drivers.

1. Press <kbd>FN</kbd> + <kbd>F9</kbd>.
  * The macro LED will start blinking.
2. Press the key that will save this macro.
  * E.g. <kbd>M1</kbd>. The macro LED will turn solid.
3. Type your keystrokes.
4. Press <kbd>FN</kbd> + <kbd>F9</kbd> to finish.

If the macro LED rapidly blinks on step 1, the device is not in the correct mode.
Restart the daemon and try again.

Playback will play the keystrokes one-after-the-other, which is incredibly fast.
Most applications are OK with this, but some games may not. Time delays are not supported right now.

> Keyboards **without** dedicated macro keys cannot use this feature.
> The macro light will continue flashing.
>
> Typically, they are supposed to be the FN + [0-9] number row, however the
> daemon swallows the FN key. Some investigation is needed on that.
>
> There is a "hack" to [delete these lines](https://github.com/openrazer/openrazer/blob/bd71e769d9239fc4ffac69c04cf3cc88b12d7bda/daemon/openrazer_daemon/misc/key_event_management.py#L488-L493) and bind macros to any key.

---

### My device is showing up as unrecognised!

Try the troubleshooter provided by Polychromatic (via **Tools → OpenRazer** in the Controller).
This identities most common problems. Alternately, take a look at [OpenRazer's
Troubleshooting Guide](https://github.com/openrazer/openrazer/wiki/Troubleshooting).

If your device is not supported in the version of OpenRazer you have installed,
it is normal for Razer `[1532]` USB devices to appear as unrecognised.

---

### My device isn't listed as supported, what do I do?

If your device isn't listed on the [Supported Devices](https://polychromatic.app/devices/) page,
there's some work to do in OpenRazer.

[Search for an issue on the OpenRazer repository](https://github.com/openrazer/openrazer/issues)
as well as any [open pull requests](https://github.com/openrazer/openrazer/pulls)
and create one if it doesn't exist, following the issue template. You may need access to
a Windows PC (or virtual machine) to take screenshots and generate "pcaps". Capturing packets
helps to identify the USB protocol suitable for your device and the features expected to work.

If you feel like hacking, look at commits from
[previous hardware support as examples](https://github.com/openrazer/openrazer/search?q=Add+support+for&type=commits)
and see if you can get the device working yourself by replicating the changes needed for a similar device.

---

### I'm setting an option but nothing happens!

If things were working earlier, try restarting the daemon and Polychromatic.

Otherwise, check the kernel log in case the driver sent data to the hardware
that wasn't understood:

    dmesg

The message may look similar to this:

>
    razer driver: Device data transfer failed.
    razer driver: Invalid USB response.
    razerkbd: Invalid Report Length.

Alternately, restart the daemon in verbose mode and watch for any abnormal behaviour:

    openrazer-daemon -Fv

---

### I'm getting an error when setting an option!

> **OpenRazer users:** We're aware some devices may have implementation issues.
>
> See <https://github.com/openrazer/openrazer/pull/1673>

First, try the latest development versions of both
[Polychromatic](https://github.com/polychromatic/polychromatic/#hacking--contributing)
and OpenRazer, in case the bug has been fixed already.

The details (traceback) should give a clue on which project has the bug.

If necessary, test the operation with other tools to isolate whether the bug is
specific to this software, or OpenRazer.

* Use [d-feet] or [QDBusViewer] to debug driver calls (via D-Bus)
* Try the Python library to communicate with the daemon.
* Try an alternate frontend project.

Does it fail outside of Polychromatic? [It's one to raise on OpenRazer](https://github.com/openrazer/openrazer/issues),
otherwise please create one [on our repository](https://github.com/polychromatic/polychromatic/issues?q=is%3Aissue).

---

### My device is missing a feature!

> Are you thinking of key mapping, or macros? [It's on our roadmap](/roadmap/).
> For now, [check out the alternates](/faqs/#can-i-remap-keys).

Devices with Hypershift are not supported in OpenRazer, so we don't have anything
to present for configuration.

Apart from Ripple, OpenRazer works with hardware effects. A handful of hardware may
not have the firmware to playback certain ones like spectrum, wave or breathing.
Lots of aspects of Razer Synapse 3 are software-based.

For other issues with broken UI or incorrect behaviour for specific devices, please raise
them [on our repository](https://github.com/polychromatic/polychromatic/issues?q=is%3Aissue).

---

### Does this project integrate with Razer Chroma ecosystem?

No. OpenRazer does not integrate with Razer Chroma software, also known as
"Razer SDK REST", "Razer Chroma REST API" or "Powered by Razer Chroma".

So, even though games may have Razer Chroma support, nothing will happen as there is no
internal server. There's the possibility that Linux-native games do not have the library, since the
SDK is designed for Windows/macOS. Proton/Wine remains unknown.

A search on GitHub shows some implementations of the server:

* <https://github.com/captin411/python-chroma-rest-server>
* <https://github.com/jessemillar/razer-chroma-http-wrapper>

---

### How can I test imaginary devices?

OpenRazer has the ability to create fake devices that simulate their existence.
This makes it very useful for testing, for demonstration purposes or to get a
feel if you had the real hardware sitting in front of you.

1. [Install OpenRazer](https://openrazer.github.io/#download) as usual.

1. Stop the daemon if it's running.

       openrazer-daemon -s

1. Next, [download a copy of OpenRazer's repository](https://github.com/openrazer/openrazer/archive/refs/heads/master.zip),
and run this script:

       ./scripts/setup_fake_devices.sh

This will show a list of devices to choose from.
If the window does not appear, install `zenity` and try again.

After that, two terminal
windows will spawn providing the fake environment. Go ahead and start Polychromatic!
Any physical "real" devices currently plugged in will be unavailable
until the fake environment is stopped and the daemon is restarted.


[OpenRazer]: https://openrazer.github.io
[d-feet]: https://wiki.gnome.org/Apps/DFeet
[QDBusViewer]: https://doc.qt.io/qt-5/qdbusviewer.html

---

### Where can I find OpenRazer's technical documentation?

Refer to the wiki on OpenRazer's repository:

* <https://github.com/openrazer/openrazer/wiki>
