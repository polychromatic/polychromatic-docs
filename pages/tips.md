---
layout: docs
title: Tips & Tricks
permalink: /tips/
class: docs
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

### Apply options at login, or cron schedule

> This is something that will be improved in a future version!

The [polychromatic-cli](/cli/) application offers the power to change your
lighting through scripts. Add the command to your desktop's start-up application
list to set your desired state as soon as you login.

You may wish to use user cron jobs to automate changes throughout the day.
Make sure it's a **user** cron job as this won't work under root.

    env EDITOR=nano crontab -e

[crontab.guru](https://crontab.guru/) is a useful site for cron syntax.
Here's an example of turning down the lights every day at 6 PM:

```
0 18 * * * /usr/bin/polychromatic-cli -o brightness -p 25
```

---

### Exchanging effects

Polychromatic hasn't implemented an import/export facility yet, but that doesn't
mean you can't share your works of art!

Navigate to `~/.config/polychromatic/effects` and send these files to your
family & friends. Right now, effects will only run on identical hardware.

For various reasons, Polychromatic isn't ready to have a central repository yet,
but [keep an eye on the roadmap around v1.1!](/roadmap/)
