---
layout: docs
title: Devices tab
permalink: /controller/devices/
class: docs
---

Options provided by a device's driver or daemon appear here, as well
as the tray applet.

![Screenshot of Devices tab](/images/guide/controller.webp)

---

## Hardware Effects

Availablity of effects (and parameters) depend on the hardware's firmware and
if they have been fully implemented when the device was added to the driver/daemon.

### [OpenRazer]

{:.has-icons}
| Effect                                        | Parameters                    | Notes
| --------------------------------------------- | ----------------------------- | ----- |
| ![](/images/effects/none.svg) None            |
| ![](/images/effects/spectrum.svg) Spectrum    |
| ![](/images/effects/wave.svg) Wave            | Direction <1-2>
| ![](/images/effects/reactive.svg) Reactive    | Speed <1-4> and 1 colour
| ![](/images/effects/ripple.svg) Ripple        | Random or 1 colour | Technically a software effect provided by daemon
| ![](/images/effects/breath.svg) Breath        | Random or 1, 2 or 3 colour(s)
| ![](/images/effects/starlight.svg) Starlight  | Random or 1 or 2 colour(s)
| ![](/images/effects/static.svg) Static        | 1 colour
| ![](/images/effects/pulsate.svg) Pulsate      | 1 colour | API broken in Python library
| ![](/images/effects/blinking.svg) Blinking    | 1 colour | API broken in Python library

#### Differences with Razer Synapse

Unlike the official driver, OpenRazer writes the effect to the device's firmware,
meaning that the hardware will retain the state across power cycles and when
plugged into other computers. The only limitation is
that it's restricted to what the firmware can do, unless your device has
individually addressable LEDs in which you could
[create a software effect](/controller/effects/) (which requires Polychromatic
installed and running)

Keyboards (as of OpenRazer v3.1.0) write custom frames into device memory, so the last frame
is saved across power cycles. This is subject to change in a future version
[(openrazer#1580)](https://github.com/openrazer/openrazer/pull/1580)
as this potentially wears out the memory controller.

If the device defaults to a specific hardware effect (usually Spectrum),
you'll need the daemon with persistence enabled (introduced in v3.0.0) for your
last effect to activate. This feature can be turned off within Polychromatic
via **Tools → OpenRazer → Configure**.

#### Daemon Features

OpenRazer 3.1.0 by default:

* Turns off the brightness when the screen saver / lock screen is activated.
  * Including system sleep/suspend.
* Shows a notification of current battery % (if battery is present)
* Restores device settings at start-up (software persistence)

> These options can be turned off within Polychromatic via **Tools → OpenRazer → Configure**.

#### Onboard Memory

For devices marketed with the ability to store settings on the hardware,
support is limited. A handful of mice support syncing of DPI ranges, but other
then that, any features that change key/button behaviour at a hardware level
may still require Razer Synapse until they are implemented in OpenRazer.

---

## Device Info

View hardware information and details that Polychromatic understands about
this device.

![Screenshot of Device Info dialog](/images/guide/device-info.webp)

Note that while the firmware version is displayed, none of the projects support
firmware upgrades. For [OpenRazer], you must use Razer Synapse
on Windows to upgrade the firmware. There is a chance of bricking
if you try upgrading firmware inside a virtual machine using passthrough USB,
so bare metal is recommended.

---

## Inspect Matrix

If your device supports individually addressable LEDs, your device supports
**software effects**! To test your LEDs or note their positions, use this
tool to find out.

![Screenshot of Device Info dialog](/images/guide/inspect-matrix.webp)

For Razer hardware, if your device should support individually
addressable LEDs but this button is greyed out, some work is needed in
[OpenRazer] to implement/test matrix support for your device.

---

## Device Support

For the full list of supported devices, see
[Supported Devices](httpS://polychromatic.app/devices/) on the main website.

---

## Unrecognised Devices

If your devices show up as "unrecognised", it could mean that:

- The driver was not installed properly. Try running the troubleshooter.
- Device permissions are wrong. Try replugging the device.
- The driver's daemon is not responding. Try restarting the daemon.
- The device is not supported in that version of the driver.

> For Razer peripherals, see ["My device is not listed, what can I do?"](/openrazer/#my-device-is-not-listed-what-do-i-do)
> on the [OpenRazer] page.

[OpenRazer]: /openrazer/
