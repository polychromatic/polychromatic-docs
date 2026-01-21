---
layout: docs
title: OpenRazer
permalink: /openrazer/
---

### What is OpenRazer?

[OpenRazer] is an open source driver and daemon for Razer peripherals over USB.
The project analyses protocols through packet capturing, with the aim to
support hardware features, like lighting and DPI.

The daemon is written in Python, communicating with the driver using sysfs,
and accessible to applications/scripts via D-Bus. The driver handles the
actual USB payloads and is built using DKMS so it can be recompiled across
kernel updates.

> OpenRazer is NOT supported or created by Razer Inc.

[OpenRazer]: https://openrazer.github.io

---

### Does OpenRazer support Windows or macOS?

Officially, no. There has been an experiment years ago by
rewriting OpenRazer to handle everything in userspace, eliminating
the dependency on DKMS drivers for GNU/Linux. This rewrite uses [hidapi](https://github.com/signal11/hidapi)
but is still in early development.

* <https://github.com/z3ntu/razer_test>
* <https://github.com/z3ntu/python-openrazer>
* <https://github.com/z3ntu/openrazer-shim>
* <https://github.com/openrazer/openrazer/issues/623>

There are other projects that use OpenRazer's efforts.

> **Use at your own risk:** The following third party projects use code/knowledge from OpenRazer,
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

### How do I set up secure boot?

Secure boot is a UEFI feature to prevent unsigned kernels and drivers from loading.
This can be a problem for OpenRazer, as the driver is not signed.

See [Secure Boot](https://github.com/openrazer/openrazer/wiki/Secure-Boot) on OpenRazer's wiki.

---

### Can I use on-the-fly macro recording?

{:.alert}
> This feature is [deprecated](https://github.com/openrazer/openrazer/pull/2337) and will be removed in a future OpenRazer release.

Yes, the OpenRazer daemon supports this for Razer keyboards (like the BlackWidow Chroma)
that have dedicated macro keys (M1-M5). Keystrokes can be recorded and stored in
the daemon until it is stopped, meaning they are **not saved** across sessions,
but it may be useful for one-off keystrokes!

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

---

### My device is showing up as unrecognised!

This either means:

* OpenRazer isn't properly installed (usually a driver or permissions problem)
* The USB device ID isn't supported yet.

Try the troubleshooter provided by Polychromatic (via **Tools → OpenRazer**).
This identities most common problems. Alternately, take a look at [OpenRazer's
Troubleshooting Guide](https://github.com/openrazer/openrazer/wiki/Troubleshooting).

If the device is connected via Bluetooth, unfortunately, OpenRazer doesn't support this as it doesn't identify as a USB device. <sup>[[See Bluetooth Issues]](https://github.com/openrazer/openrazer/issues?q=state%3Aopen%20label%3ABluetooth)</sup>

---

### My device isn't supported, what do I do?

If your device USB ID isn't listed on the [Supported Devices](https://polychromatic.app/devices/) page,
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

First, try the latest development packages for both Polychromatic
and OpenRazer, in case the bug has been fixed already.

The details (traceback) should give a clue on which project has the bug.

If necessary, test the operation with other tools to isolate whether the bug is
specific to this software, or OpenRazer.

* Use [d-feet] or [QDBusViewer] to debug driver calls (via D-Bus)
* Try the Python library to communicate with the daemon.
* Try an alternate frontend project.

Does it still fail outside of Polychromatic? [Raise this on OpenRazer](https://github.com/openrazer/openrazer/issues),
otherwise please create one [on our repository](https://github.com/polychromatic/polychromatic/issues?q=is%3Aissue).

---

### My device is missing a feature!

These functions are not supported by this application nor OpenRazer:

* Key rebinding
* Hypershift
* Firmware upgrades

OpenRazer works with hardware effects on the firmware itself (except ripple, provided by OpenRazer's daemon).
If your device is lacking effects, it's likely because it's a Razer Synapse 3 device
that was designed to be software-driven by the driver.

For other issues with broken UI or incorrect behaviour for specific devices, please raise
them [on our repository](https://github.com/polychromatic/polychromatic/issues?q=is%3Aissue).

---

### Some buttons on my mouse don't seem to be working!

Some keys like the DPI button are known to not to emit a keypress. <sup>[[1]](https://github.com/openrazer/openrazer/issues/201)</sup>

In rare cases, side buttons on newer mice may not work unless mapped in Razer Synapse first. <sup>[[2]](https://github.com/openrazer/openrazer/issues/2664)</sup>. Try configuring the buttons using a Windows machine with Razer Synapse, to explicitly map <kbd>Mouse Button 4</kbd> to <kbd>Mouse Button 4</kbd> (repeat as necessary) and see if it works under Linux / OpenRazer afterwards.

For mapping keys under Linux, use a dedicated remapping tool like [input-remapper](https://github.com/sezanzeb/input-remapper).
Polychromatic is designed for lighting and doesn't support key remapping.

To test your keys are emitting keystrokes:

    sudo evtest

---

### My device stopped working after a Razer update on Windows!

We've seen reports
<sup>[[1]](https://github.com/openrazer/openrazer/issues/2428)</sup>
<sup>[[2]](https://github.com/openrazer/openrazer/issues/2507)</sup>
of devices losing some device functionality after updating to Razer Synapse 4.

Mice, for instance, might lose their ability to middle (wheel) click or
no longer run the macros that were saved to the device when used outside of Windows.

If this happens, please uninstall Razer Synapse 4, and downgrade to [Razer Synapse 3],
reset the device, and set it up again. Your device should work better under OpenRazer again.

Optionally, consider [raising an issue on OpenRazer's repository](https://github.com/openrazer/openrazer/issues)
if there isn't one already for your device if it is affected by Razer Synapse 4.

[Razer Synapse 3]: https://rzr.to/synapse-3-pc-download

---

### Does this project integrate with Razer Chroma ecosystem?

No. OpenRazer does not integrate with Razer Chroma software, also known as
"Razer SDK REST", "Razer Chroma REST API" or "Powered by Razer Chroma".

So, even though games may have Razer Chroma support, nothing will happen as there is no
internal server. There's the possibility that Linux-native games do not have the library, since the
SDK is designed for Windows/macOS. Proton/Wine remains unknown.

A search on GitHub shows some implementations of the server:

* <https://github.com/captin411/python-chroma-rest-server>

---

### How can I test imaginary devices?

OpenRazer has the ability to create "fake devices" for simulation/testing:

1. [Install OpenRazer](https://openrazer.github.io/#download) as usual.

1. Stop the daemon if it's running.

       openrazer-daemon -s

1. [Download a copy of OpenRazer's repository](https://github.com/openrazer/openrazer/archive/refs/heads/master.zip),
and run this script:

       ./scripts/setup_fake_devices.sh

This will show a list of devices to choose from.
If the window does not appear, install `zenity` and try again.

After that, two terminal
windows will spawn providing the fake environment. Go ahead and start Polychromatic!
Any physical "real" devices currently plugged in will be unavailable
until the fake environment is stopped and the daemon is restarted.

> **Alternately,** there is a project that emulates the USB device itself:
>
> <https://github.com/meeuw/razer-emulator>

[OpenRazer]: https://openrazer.github.io
[d-feet]: https://wiki.gnome.org/Apps/DFeet
[QDBusViewer]: https://doc.qt.io/qt-5/qdbusviewer.html

---

### Where can I find OpenRazer's technical documentation?

Refer to the wiki on OpenRazer's repository:

* <https://github.com/openrazer/openrazer/wiki>
