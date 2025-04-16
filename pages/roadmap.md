---
layout: roadmap
title: Roadmap
permalink: /roadmap/

roadmap:
    - name: Internal Improvements
      desc: Overhaul of the internals for improved performance and expandability.
      checked: progress
      completed:
        - Port to PyQt6
      in_progress:
        - Full rewrite with static typing
      pending:
        - Port tray applet to QSystemTrayIcon (drop GTK)
        - Drop CLI interface

    - name: Presets & Triggers
      desc: New feature to enable one-click actions and convenient automation.
      checked: false
      completed:
        null
      in_progress:
        null
      pending:
        - New presets feature
        - New triggers feature

    - name: Software Effects
      desc: Introduce a new editor to easily customise effects, as well as
            improving the internals to provide better support for keyboard layouts,
            and mapping to a device graphic.
      checked: false
      completed:
        null
      in_progress:
        null
      pending:
        - Rework device mapping
        - New scripted effects
        - New layered effects

    - name: Online Exchange
      desc: Introduce optional online functionality.
      checked: false
      completed:
        null
      in_progress:
        null
      pending:
        - Browse/share effects designed by other Polychromatic users
        - Add an optional hardware survey
        - Add support for offline help

    - name: Interactivity
      desc: Builds on top of software effects by reacting to input.
      checked: false
      completed:
        null
      pending:
        - Add support for interactive effects/layers

    - name: Vendor Agnostic
      desc: Just in case your next product isn't Razer.
      checked: false
      completed:
        null
      pending:
        - Support devices via OpenRGB, phue, ckb-next and libratbag.
        - Support devices with USB HID LampArray?

    - name: Cross Platform Support
      desc: By exploring how to bring open source RGB to other platforms.
      checked: false
      completed:
        null
      pending:
        - Windows
        - macOS

---

{:.grey}
The roadmap is subject to change at any time.
