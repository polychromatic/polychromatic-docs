---
layout: docs
title: Configuration
permalink: /config/
class: docs
---

Polychromatic's uses JSON to store its data. The location is based on
the XDG spec, which is usually:

    ~/.config/polychromatic/
    ~/.cache/polychromatic/

Preferences can be changed via the Controller's **Edit → Preferences**.

{% include img-2x.html alt="Preferences is accessible via the Edit menu bar" src="/images/preferences.png" %}

You can manually edit the JSON files based on the specifications below. Note that
changes take effect on the next launch and invalid syntax will cause the file to
be reinitialised (appending `.bak` to the file name)

It is usually necessary to restart the application (or editor windows)
for new preferences to take effect.

---

## Folder Structure

| Folder/File           | Purpose                                              |
| --------------------- | ---------------------------------------------------- |
| backends/             | Backends may use this to store runtime or persistent data
| custom_icons/         | Copies of imported images for effects, presets or tray icons
| [effects/]            | Storage for custom software effects
| states/               | Internal data noting a device's current software status
| colours.json          | Your saved colours list
| [preferences.json]    | Application configuration

<!--
| [presets/]            | Stores pre-determined device settings. Other apps may call these "profiles"
-->

[effects/]: /config/effects/
[presets/]: /config/presets/
[preferences.json]: #preferencesjson

**Obsolete Folders**

These were previously used in previous versions `(<= 0.3.12)` and
can be safely deleted.

| Folder/File   | Purpose                                                      |
| ------------- | ------------------------------------------------------------ |
| backups/      | Copies of old effects (v0.3.12)
| profiles/     | Storage for keyboard graphic mappings (v0.3.12)

---

## preferences.json

| Group         | Value             | Data Type | Purpose                              |
| ------------- | ----------------- | --------- | ------------------------------------ |
|               | `config_version`  | int       | Internally keeps track of preference version. (Don't touch!)
| `controller`  | `landing_tab`     | int       | Starting from `0`, open a tab index at start-up.
| `controller`  | `show_menu_bar`   | bool      | Keep the menu bar visible. Press Alt to reveal if hidden.
| `controller`  | `system_qt_theme` | bool      | Use the system's Qt theme. Dependant on current theme and environment.
| `controller`  | `window_behaviour`| int       | `0` - Always open in center <br> `1` - Remember last position/size <br> `2` - Let window manager decide
| `controller`  | `toolbar_style`   | int       | `0` - System default <br> `1` - Icons only <br> `2` - Text only <br> `3` - Text alongside icons <br> `4` - Text under icons
| `custom`      | `use_dpi_stages`  | bool      | Use custom DPI values (mice only)
| `custom`      | `dpi_stage_{1..5}`| int       | 5 keys defining the custom DPI value.<br> For example, `"dpi_stage_1": 800, "dpi_stage_2": 1600`
| `editor`      | `hide_key_labels` | bool      | Hide text labels for keyboards/keypads in the editor.
| `editor`      | `live_preview`    | bool      | Show the changes on the physical device while in the editor.
| `editor`      | `show_saved_colour_shades` | bool | Generate light/dark variants of each of your saved colours in the dock.
| `editor`      | `suppress_confirm_dialog` | bool | Don't prompt confirmation for actions such as deleting a layer/frame.
| `editor`      | `system_cursors`  | bool      | Don't use custom cursors in the editor.
| `tray`        | `autostart`       | bool      | Start tray applet when the user logs in?
| `tray`        | `autostart_delay` | int       | How long (in seconds) to wait before autostarting. This helps some desktop environments that suffer from a race condition which causes the applet to display incorrectly or show no devices.
| `tray`        | `mode`            | int       | `0` - Use Default <br> `1` - AppIndicator3 (GTK) <br> `2` - GTK Status Icon (Legacy)
| `tray`        | `icon`            | str       | Relative path from data directory, `custom_icons` **or** an absolute path to the tray icon.

---

### Software Updates

When major changes happen to the application that affects save data, the next run
under the new version will automatically update its configuration.
Old versions will be copied to a separate file or folder.

As a result, downgrading the software isn't supported without first restoring the old
save data manually.
