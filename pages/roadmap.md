---
layout: roadmap
title: Roadmap
permalink: /roadmap/
class: docs

roadmap:
    - name: v0.3.12 - v0.6.0 - Reimagining the project
      desc: It's been a slow journey, but the application had a redesign
            both visually and internally so it's easier to maintain for the growing
            number of devices and features.
      checked: true
      completed:
        - New command line utility
        - New website and documentation
        - Rewrite tray applet
        - Refactor Controller (Pass 1, 2018)
        - Refactor Controller (Pass 2, 2019)
        - Port Controller to PyQt5 (Pass 3, 2020)
        - New Preferences
        - New Devices tab
        - New Effects tab ("application profiles" replacement)
        - New effect format (with support for animation)
        - New troubleshooter for OpenRazer

    - name: v0.6.1 - A stable beta
      desc: v0.3.12 is no longer stable, but the latest development hasn't
            had all its new features finished either. So... time to consolidate
            progress and make a new release!
      checked: progress
      completed:
        null
      in_progress:
        - Polish little things for a new stable release
      pending:
        - Quality assurance testing across distros with progress so far

    - name: v1.0.0 - The big one
      desc: This release will expand custom (software) effects, introduce presets
            for multiple devices and events for automating your lighting.
      checked: false
      completed:
        null
      in_progress:
        null
      pending:
        - Improve build system
        - Improve translation system
        - 'New feature: Presets'
        - 'New feature: Triggers'
        - 'New Effect Type: Scripted'
        - 'New Effect Type: Layered'

    - name: v1.1.0
      desc:
      checked: false
      completed:
        null
      in_progress:
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
