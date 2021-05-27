---
layout: roadmap
title: Roadmap
permalink: /roadmap/
class: docs

roadmap:
    - name: v0.3.12 ("Stable")
      checked: true
      completed:
        - Development series finished. Working on next major version...
      pending:
        - The tray applet can be tempermental on some DEs, this will be addressed in next version.

    - name: 'v1.0.0 (dev: v0.6.0)'
      checked: progress
      completed:
        - New command line utility
        - New website and documentation
        - Rewrite tray applet to fix its shortcomings
        - Refactor Controller (first pass, 2018)
        - Refactor Controller (second pass, 2019)
        - Port Controller to PyQt5 (third refactor, 2020)
        - Implement new Devices tab
        - Implement Preferences
        - Implement new Effects tab ("application profiles" replacement)
      in_progress:
        - Improve build system
        - Implement Presets tab ("profiles")
      pending:
        - Implement Triggers tab (a new feature to activate presets based on events, such as session login)
        - Implement scripted effects
        - Implement layer-based effects
        - Beta Release - Cross-distro, device testing and documentation publishing

    - name: v1.1.0
      checked: false
      completed:
        null
      pending:
        - Browse/share effects designed by other Polychromatic users.
        - Optional hardware survey

    - name: Future Ambitions
      checked: false
      completed:
        null
      pending:
        - Add backend support for Philips Hue.
        - Add backend support for OpenRGB.
        - Key remapping (macro) support.
        - Interactive effect layers.
        - Port application to Windows and macOS.

---

{:.grey}
The roadmap is subject to change at any time.
