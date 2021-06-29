---
layout: docs
title: FAQs
permalink: /faqs/
class: docs
---

### What is Polychromatic?

Polychromatic is becoming a vendor agnostic frontend to control various kinds
of RGB peripherals from different brands. This suite of software provides a
GUI, a tray applet and command line interface.

<!-- , as well as handling custom
effects, presets and automating them with trigger events. -->

Currently, the only supported backend is [OpenRazer].

[OpenRazer]: https://openrazer.github.io

The application is written in Python/PyQt5. If you're upgrading from the older
v0.3.12, this switched from WebKitGTK.


### Is Windows or macOS supported?

Not right now, but this an ambition in the distant future.
For OpenRazer users, see below for alternates.


### Are other LED peripherals supported, such as Logitech or Corsair?

Potentially! Right now, only [OpenRazer] is supported. If you're a developer,
you can [add integration](/backends/) in the form of a backend module for this program.
Polychromatic can integrate with existing Python libraries.

The project would like to support these in future:

* [phue [Philips Hue] (#296)](https://github.com/polychromatic/polychromatic/issues/296)
* [OpenRGB](https://gitlab.com/CalcProgrammer1/OpenRGB#openrgb-sdk) (SDK Client)

Previously, this was not possible in legacy `(< v0.6.0)` versions of this software, due to
the codebase heavily resolving around the OpenRazer daemon.


---

## OpenRazer Questions

### What is OpenRazer?

[OpenRazer] is a driver and daemon which analyzed the protocols used to speak
to Razer peripherals and control their lighting and hardware effects. An
API is exposed for scripts and applications to control the devices at a higher level.

The project aims to support the hardware's features (e.g. DPI and lighting).
The daemon is written in Python, with a DKMS driver to enable device-specific
features like handling special keys.

**This project is an unofficial implementation and is not supported or created by Razer Inc.**

[OpenRazer]: https://openrazer.github.io


### Does OpenRazer support Windows or macOS?

Officially, no. One of the OpenRazer team members is experimenting by
rewriting [OpenRazer] to handle everything in userspace, eliminating
the dependency on DKMS drivers for GNU/Linux. This rewrite uses [hidapi](https://github.com/signal11/hidapi)
but is still in early development.

* <https://github.com/z3ntu/razer_test>
* <https://github.com/z3ntu/python-openrazer>
* <https://github.com/z3ntu/openrazer-shim>
* <https://github.com/openrazer/openrazer/issues/623>

> When using third party projects providing support for other operating systems,
> please do not create issues on the OpenRazer repository.

**Windows**

[openrazer-win32](https://github.com/CalcProgrammer1/openrazer-win32)
is an unofficial wrapper that brings OpenRazer's efforts on Windows. [OpenRGB](https://openrgb.org/)
is a program implementing this library.

* <https://gitlab.com/CalcProgrammer1/OpenRGB/>

**macOS**

There is an Electron-based project which ports devices individually from OpenRazer.

* <https://github.com/1kc/razer-macos>


### Are macros supported for keyboards **with** dedicated macro keys?

Yes, the OpenRazer daemon provides on-the-fly macro recording for Razer
keyboards (such as BlackWidow Chroma) that have dedicated macro keys (M1-M5).
Keystrokes can be recorded and stored in the daemon until it is stopped.

> **Note:** The key combination is slightly different to Razer's official drivers.

1. Press <kbd>FN</kbd> + <kbd>F9</kbd>.
  * The macro LED will start blinking.
2. Press the key that will save this macro.
  * E.g. <kbd>M1</kbd>. The macro LED will turn solid.
3. Type your keystrokes.
4. Press <kbd>FN</kbd> + <kbd>F9</kbd> to finish.

If the macro LED rapidly blinks on step 1, you may need to restart the daemon.

Playback will play the keystrokes one-after-the-other, which is incredibly fast.
Time delays are not supported right now.


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


### What is macro support like in Polychromatic?

The application only informs you about OpenRazer's on-the-fly macro recording
feature. See [Can I remap keys?] below.


### Can I configure keys on a gamepad?

Sadly no, not right now. A third party application is required. See [Can I remap keys?] below.

---

## Feature Questions

### Can I remap keys?

Not yet. This is a future ambition. In the meantime, other users have reported using these utilities:

* [key-mapper](https://github.com/sezanzeb/key-mapper) _(Python 3, GTK)_
* [Keyboarding Master](https://sites.google.com/site/keyboardingmaster/) _(Java, GUI)_
* [Pystromo](https://github.com/byrongibson/Pystromo) _(Python 2)_
* [boppreh/keyboard] _(Python 3)_
* [boppreh/mouse] _(Python 3)_

Polychromatic intends to use [boppreh/keyboard] and [boppreh/mouse] projects in future.

[boppreh/keyboard]: https://github.com/boppreh/keyboard
[boppreh/mouse]: https://github.com/boppreh/mouse
[Can I remap keys?]: #can-i-remap-keys


### Can I create my own effects?

With v0.6.1, you can create your own static frames or animated sequences!
For complex requirements, this is somewhat limiting, and so
[the upcoming v1.0.0 future update](/roadmap/) will introduce new tools for effect creation.

Custom effects can be created for any supported device.


### Can I create my own profiles?

Not yet, but Polychromatic will add profile ("presets") functionality [in the upcoming v1.0.0 update](/roadmap/).



### When will the next version be released?

> v0.6.1 is here!

Check out [the roadmap](/roadmap/) to see what new and improved features
that next. If you like to be cutting edge, consider the **edge** builds which
comes with a "experimental" label.

As with any open source project, progress can be slow at times. It's been 2 years since the
release of v0.3.12, with [not just one](https://github.com/polychromatic/polychromatic/releases/tag/v0.4.0),
or [two](https://github.com/polychromatic/polychromatic/releases/tag/v0.5.0), but **three** refactors internally!
We're back on track, with the Controller using a desktop toolkit (PyQt5) instead
of being based on hybrid web technologies.

Future releases will be out as soon as humanly possible!
