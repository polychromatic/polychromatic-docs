---
layout: docs
title: Tips & Tricks
permalink: /tips/
---

Here's some ideas you might like to try.

---

### Sync across computers

Polychromatic isn't cloud software, and has no desire to become one.
As the configuration and effects are file-based, it is possible to use
third party file syncing software.

**For local syncing**, such as [Syncthing](https://syncthing.net/), add the
`~/.config/polychromatic` folder on both machines, and let the tool
do the rest!

**For cloud providers** like Dropbox and Nextcloud, consider moving
`~/.config/polychromatic` to your cloud folder, and create
a symbolic link to `polychromatic` in `.config/`. This is because some clients
might sync a link "file" rather then the contents themselves.

Links can usually be made by dragging
the file while holding <kbd>CTRL</kbd> and <kbd>SHIFT</kbd>, but if not,
use the Terminal:

    ln -s /path/to/cloud/polychromatic ~/.config/polychromatic

---

### The welcome effect

Create an animated effect and turn off looping. When the animation ends, the
last frame will remain visible. This will run again at login providing you
haven't changed to another effect.

[OpenRazer](/openrazer/) users may wish to turn off persistence in
**Tools → OpenRazer → Configure**.

---

### Apply options at login

> This is something that will be improved in a future version!

The [polychromatic-cli](/cli/) application offers the power to change your
lighting through scripts. By using your desktop's "start-up applications" list, you
can add commands to set your lighting to the desired state as soon as you login.

For example, set the brightness to 25% and static green effect:

    /usr/bin/polychromatic-cli -o brightness -p 25
    /usr/bin/polychromatic-cli -o static -c 00FF00

---

### Automatically set effect for Steam/Proton games

Wouldn't it be nice to click "Play" and your key mapping (effect) is applied
to your hardware? With the power of scripting, yes!

First, you'll need to create a "wrapper" script, create this in your **Text Editor**
and place it somewhere.
```bash
#!/bin/bash
polychromatic-cli -e "$1"
shift 1
exec "$@"
```

Right click the file, choose **Properties** and under **Permissions**, check a
box to similar to "Mark as executable".

Over in Steam, set the launch options for the game, usually by right clicking and
selecting properties.

    /path/to/script.sh "Effect Name Here" %command%

The script is agnostic and works for any application/game, even non-Steam ones.
This uses the CLI interface to apply your custom effect (`-e`) with the name as
your first parameter, and the rest of the parameters launch the game/application.
Steam populates the `%command%`.

In a future update, we'll implement an alternate approach so a wrapper script
wouldn't be needed for the same outcome.

---

### Exchanging effects

Polychromatic hasn't implemented an import/export facility yet, but that doesn't
mean you can't share your works of art!

Navigate to `~/.config/polychromatic/effects` and send these files to your
family & friends. Right now, effects will only run on identical hardware.

For various reasons, Polychromatic isn't ready to have a central repository yet,
but [keep an eye on the roadmap around v1.1!](/roadmap/)
