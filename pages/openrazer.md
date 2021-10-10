---
layout: docs
title: OpenRazer
permalink: /openrazer/
class: docs
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

> When using third party projects providing support for other operating systems,
> please do not create issues on the OpenRazer repository.

**Windows**

[openrazer-win32](https://github.com/CalcProgrammer1/openrazer-win32)
is an unofficial wrapper that produces an OpenRazer DLL for Windows. [OpenRGB](https://openrgb.org/)
is a program implementing this library.

* <https://gitlab.com/CalcProgrammer1/OpenRGB/>

**macOS**

There is an Electron-based project which ports devices individually from OpenRazer.

* <https://github.com/1kc/razer-macos>

---

### Are macros supported for keyboards **with** dedicated macro keys?

Yes, the OpenRazer daemon provides on-the-fly macro recording for Razer
keyboards (such as BlackWidow Chroma) that have dedicated macro keys (M1-M5).
Keystrokes can be recorded and stored in the daemon until it is stopped,
meaning they are not saved across sessions, but quite useful for one-off repetitive tasks!

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

---

### Are macros supported for keyboards **without** dedicated macro keys?

Officially, no. With a patch, yes. To make on-the-fly recording work for ANY key,
locate this file and remove these lines:

[/usr/lib/python3/**/openrazer_daemon/misc/key_event_management.py](https://github.com/openrazer/openrazer/blob/bd71e769d9239fc4ffac69c04cf3cc88b12d7bda/daemon/openrazer_daemon/misc/key_event_management.py#L488-L495)

```diff
                    if self._current_macro_bind_key is None:
-                        # Restrict macro bind keys to M1-M5
-                        if key_name not in ('M1', 'M2', 'M3', 'M4', 'M5'):
-                            self._logger.warning("Macros are only for M1-M5 for now.")
-                            self._recording_macro = False
-                            self._parent.setMacroMode(False)
-                        else:
                            self._current_macro_bind_key = key_name
                            self._parent.setMacroEffect(0x00)
```

This 'hack' is just for reference. This does not
work with gamepads as they behave like a Chroma keyboard (default device behaviour).

See also: [Can I remap keys? (FAQs)](/faqs/#can-i-remap-keys)

---

### My device is not listed, what do I do?

[Search for an issue on the OpenRazer repository](https://github.com/openrazer/openrazer/issues)
and create one if it doesn't exist, following the issue template. You may need access to
a Windows PC (or virtual machine) so others can identify the protocol for your
device and expected features to support.

If you feel like hacking, look at commits from
[previous hardware support as examples](https://github.com/openrazer/openrazer/search?q=Add+support+for&type=commits)
and see if you can get the device working yourself by replicating the changes needed for a similar device.

---

### I'm setting an option but nothing happens!

Check the kernel log in case OpenRazer sent data to the hardware that your
device does not understand.

If things were working earlier, try restarting the daemon and Polychromatic.

---

### My device is showing up as unrecognised!

Try the troubleshooter provided by Polychromatic (accessible via **Tools → OpenRazer** in the Controller).
This identities most common problems. Alternately, take a look at [OpenRazer's
Troubleshooting Guide](https://github.com/openrazer/openrazer/wiki/Troubleshooting).

If your device is not supported in the version of OpenRazer you have installed,
it is normal for Razer `(1532)` USB devices to appear as unrecognised.

---

### I'm getting an error when setting an option!

While we'd love everything to "just work", inevitably, bugs slip through as
we don't have all the hardware to verify.

Before reporting an issue:

* **Make sure you are using the latest (development) version of Polychromatic.**
    * Polychromatic calls these "edge" builds.
    * [The software can be downloaded and run from the Git repository directly.](https://polychromatic.app/download/manual/)
* **Make sure you are using the latest version of OpenRazer.**
    * Ubuntu users can use `ppa:openrazer/daily` for instance.
    * Other distros may need to build the package from the repository.

The details (traceback) should give a clue on which project has the bug.

Try debugging the action with the backend directly and
[raise the issue on OpenRazer](https://github.com/openrazer/openrazer/issues)
if the problem happens at a driver/daemon level.
There are multiple ways to do this:

* Use [d-feet] or [QDBusViewer] to debug driver calls (via D-Bus)
* Try the Python library to communicate with the daemon.
* Test an alternate frontend application or project.

> **Is it a Polychromatic issue?**
>
> For UI issues, incorrect/missing device features (that are supported by OpenRazer)
> and behaviour problems, search and raise the issue
> [on Polychromatic's repository](https://github.com/polychromatic/polychromatic/issues?q=is%3Aissue)
> instead.

---

### How can I test imaginary devices?

OpenRazer has the ability to create fake devices that simulate their existence.
This makes it very useful for testing, for demonstration purposes or to get a
feel if you had the real hardware sitting in front of you.

1. [Install OpenRazer](https://openrazer.github.io/#download) as usual.

1. Stop the daemon if it's running.

       openrazer-daemon -s

1. Next, [download a copy](https://github.com/openrazer/openrazer/archive/refs/heads/master.zip)
of the repository, and run this script:

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

### Where's the technical documentation?

Refer to the wiki on OpenRazer's repository:

* <https://github.com/openrazer/openrazer/wiki>
