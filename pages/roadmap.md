---
layout: roadmap
title: Roadmap
permalink: /roadmap/

roadmap:
    - name: v0.7.0 - Design Update
      desc: The application got a redesign both visually and internally so it's
            easier to maintain for the growing number of devices and features.
            This consolidates and polishes all progress since v0.3.12.
      checked: true
      completed:
        - New command line utility
        - New website and documentation
        - Rewrite tray applet
        - Port Controller to PyQt5
        - New Preferences
        - New Devices tab
        - New Effects tab (replaces "application profiles")
        - New effect format (with animation support)
        - New troubleshooter for OpenRazer
        - Improved device support and inspection
        - Polished and quality assured

    - name: v0.8.0 - Presets & Triggers
      desc: This release performs some housecleaning and introduces presets and
            triggers for lighting automation.
      checked: progress
      completed:
        null
      in_progress:
        - Rework backend and internals
      pending:
        - Port tray applet to QSystemTrayIcon
        - New presets feature
        - New triggers feature

    - name: v0.9.0 - Software Effects
      desc: This release will introduce a software effect editor, as well as
            reorganising device graphics to provide better support for different
            keyboard layouts.
      checked: false
      completed:
        null
      in_progress:
        null
      pending:
        - Rework device mapping
        - New scripted effects
        - New layered effects

    - name: v1.0.0
      desc: This release will introduce online functionality.
      checked: false
      completed:
        null
      in_progress:
        null
      pending:
        - Browse/share effects designed by other Polychromatic users
        - Add an optional hardware survey
        - Add support for offline help

    - name: v1.1.0
      desc: This release will introduce interactive features.
      checked: false
      completed:
        null
      pending:
        - Add support for key remapping / macros
        - Add support for interactive effect layers

    - name: Undetermined
      desc: Future ambitions for the distant future.
      checked: false
      completed:
        null
      pending:
        - Support devices via OpenRGB, phue, ckb-next and libratbag.
        - Port application to Windows and macOS.

---

{:.grey}
The roadmap is subject to change at any time.
