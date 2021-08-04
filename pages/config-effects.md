---
layout: docs
title: Effect Internals
permalink: /config/effects/
class: docs
---

## The Concept

Polychromatic has two concepts of effects:

* **[Hardware](#hardware-effects)** - provided by the firmware or backend. These usually persist across power cycles.
* **[Software](#software-effects)** - powered by Polychromatic and require the backend to be running.

---

## Hardware Effects

### OpenRazer

Availablity of effects and parameters vary on the hardware's firmware.

{:.has-icons}
| Effect                                        | Parameters / Notes            |
| --------------------------------------------- | ----------------------------- |
| ![](/images/effects/none.svg) None            |
| ![](/images/effects/spectrum.svg) Spectrum    |
| ![](/images/effects/wave.svg) Wave            | Direction <1-2>
| ![](/images/effects/reactive.svg) Reactive    | Speed <1-4> and 1 colour
| ![](/images/effects/ripple.svg) Ripple        | Random or 1 colour | Technically a software effect provided by daemon
| ![](/images/effects/breath.svg) Breath        | Random or 1, 2 or 3 colour(s)
| ![](/images/effects/static.svg) Static        | 1 colour
| ![](/images/effects/pulsate.svg) Pulsate      | 1 colour
| ![](/images/effects/blinking.svg) Blinking    | 1 colour

Some Razer firmware retain hardware effects across power cycles and when plugged into
other computers. Similarly, when software effects are used, the last frames may
be retained across power cycles. However, newer hardware may default to an effect
until OpenRazer and/or Polychromatic has started.

OpenRazer 3.0 introduced persistence. This can be turned off within Polychromatic
via _Tools → OpenRazer → Configure_.

---

## Software Effects

Like with any RGB application, Polychromatic works with its own format for
storing "software effects". Polychromatic stores them as JSON files in
`~/.config/polychromatic/effects/` <!--and can be imported
and exported for use in other applications. -->

Writing effects in this software will work on any supported backend where the
device is capable of individually addressable LEDs (matrix). <!-- and can be
set to work within specifications  (for example, a scripted effect that
should only be played on keyboards) -->

<!--
There are three types:

| ID | Type                                                         | Purpose                   |
| -- | ------------------------------------------------------------ | ------------------------- |
| 1  | [![](/images/effect_types/layered.svg) Layered](layered/)    | Each layer describes how to display a specified range of LEDs
| 2  | [![](/images/effect_types/scripted.svg) Scripted](scripted/) | Programmable effects written in Python
| 3  | [![](/images/effect_types/sequence.svg) Sequence](sequence/) | Animated (or static) effect based on pixels and frames
-->

> Polychromatic v0.7.0  effects are known as [Sequence](sequence/).
>
> Users previously running v0.3.12 will have their "application profiles"
> converted to this new format.

### Edit Effects

Create and edit existing effects using the [Controller](/controller/) application.
The Controller does not need to be installed to run them.

### Playback

`polychromatic-helper` runs as a process per device.
To avoid two processes controlling the device at the same time,
lock files are placed in the **run directory** (based on the XDG spec, which is
usually `/run/user/$PID/polychromatic`).


### Common Metadata

All effects use JSON files to describe the effect and additional data depending
on the type of effect.

Every effect starts with this common data:

```json
{
    "name": "Example Effect",
    "name[fr_FR]": "Exemple d'effet",
    "type": 1,
    "author": "ghost",
    "author_url": "https://github.com/ghost",
    "icon": "ui/img/emblems/lamp.svg",
    "summary": "This is an example effect",
    "summary[fr_FR]": "Ceci est un exemple d'effet",
    "map_device": "Razer BlackWidow Chroma",
    "map_device_icon": "keyboard",
    "map_graphic": "blackwidow_m_keys_en_GB.svg",
    "map_cols": 22,
    "map_rows": 6,
    "save_format": 8,
    "revision": 1,
}
```

| Key           | Data Type | Purpose                                       |
| ------------- | --------- | --------------------------------------------- |
| `name`        | str       | Name of effect (English)
| `name[fr]`    | str       | Name of effect (other language, e.g. `fr`)
| `type`        | int       | Internal effect type
| `author`      | str       | Full name or username of creator
| `author_url`  | str       | Optional URL to author, e.g. GitHub profile
| `icon`        | str       | Relative path to icon (from data directory or user's `custom_icons` folder), or absolute path to a custom icon.
| `summary`     | str       | Brief description (English)
| `summary[fr]` | str       | Brief description (other language, e.g. `fr`)
| `map_device`  | str       | Name of the device that will play this effect. <!-- For scripted effects, leave empty. -->
| `map_device_icon` | str | Form factor icon representing this device (`data/img/devices/` folder)
| `map_graphic` | str       | Filename of the mapping graphic to use when editing this effect. For a grid, leave empty.
| `map_cols`    | int       | Number of columns in this mapping. <!-- Set to `0` for scripted effects. -->
| `map_rows`    | int       | Number of rows in this mapping. <!-- Set to `0` for scripted effects. -->
| `save_format` | int       | Internal save version. **Should not be changed.**
| `revision`    | int       | Author's version number of the effect. Incrementing this helps identify updates from the original.

All fields are required.

More data is specified depending on the type of effect:

<!--
* [Layered (type 1)](layered/#additional-metadata)
* [Scripted (type 2)](scripted/#additional-metadata)
-->
* [Sequence (type 3)](sequence/#additional-metadata)

Localisation keys are optional and is intended to be used in [a future update](/roadmap/)
where a facility will allow you to upload/download effects created by other users.

---

## Map Graphics

The editor will show a graphic to help visually map your effect to the hardware
where available. If your device doesn't have one, the grid will be used.
See [Device Maps & Graphics](/devicemaps/) for details on how to create the SVG.

> A device's matrix can be directly tested via the Controller. Choose the device
from the **Devices** tab, click **Device Info** and then **Test Matrix**.
