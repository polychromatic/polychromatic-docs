---
layout: roadmap
title: Roadmap
permalink: /roadmap/
class: docs

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

    - name: v0.8.0
      desc:
      checked: progress
      completed:
        null
      in_progress:
        - Rework backend module and code optimisations
      pending:
        - Port tray applet to QSystemTrayIcon
        - Improve build system
        - Improve translation system

    - name: v1.0.0
      desc: This release will expand custom (software) effects, introduce presets
            for multiple devices and add events for automating your lighting.
      checked: false
      completed:
        null
      in_progress:
        null
      pending:
        - 'New feature: Presets'
        - 'New feature: Triggers'
        - 'New Effect Type: Scripted'
        - 'New Effect Type: Layered'

    - name: v1.1.0
      desc: This release will focus on online functionality.
      checked: false
      completed:
        null
      in_progress:
        null
      pending:
        - Browse/share effects designed by other Polychromatic users.
        - Optional hardware survey
        - Offline help

    - name: v1.2.0
      desc: This release will focus on interactive functions.
      checked: false
      completed:
        null
      pending:
        - Key remapping (macro) support.
        - Interactive effect layers.

    - name: Future Ambitions
      checked: false
      completed:
        null
      pending:
        - Add backend support for Philips Hue.
        - Add backend support for OpenRGB.
        - Port application to Windows and macOS.

---

{:.grey}
The roadmap is subject to change at any time.
