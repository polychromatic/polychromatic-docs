---
layout: docs
title: Effect Internals
permalink: /config/effects/
---

## The Concept

Polychromatic considers effects to be either:

* **Hardware** - Provided by the firmware or daemon. Usually persists between power cycles.
* **Software** - Powered by Polychromatic. Requires the device's driver/daemon to be running.

This page will detail the software kind. For hardware effects, see [Devices](/controller/devices/).

---

## Summary

Like with any RGB application, Polychromatic works with its own format for
storing "software effects". Polychromatic stores them as JSON files in
`~/.config/polychromatic/effects/` <!--and can be imported
and exported for use in other applications. -->

Writing effects in this software will work on any supported backend where the
device is capable of individually addressable LEDs. <!-- and can be
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

To edit effects, use the [Controller](/controller/effects/) application, or
manually according to the spec. The Controller does not need to be installed to run them.

For playback, `polychromatic-helper` runs as a process per device.
To avoid two processes controlling the device at the same time,
lock files are placed in the **run directory** (based on the XDG spec, which is
usually `/run/user/$PID/polychromatic`).

---

## Common Metadata

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
