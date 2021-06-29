---
layout: docs
title: Sequence Effects
permalink: /config/effects/sequence/
class: docs
---

## The Concept

This format uses a frame system to light up LEDs like pixel art.
The effect can be static with a single frame or be made up of multiple frames
to create an animation.

<!--
Images, videos and GIF files can be imported to be converted into blocky
pixels. The playback speed and whether the effect loops can be adjusted too.
-->

## Additional Metadata

In addition to the [common metadata](../#common-metadata), this effect is
specified by the following data:

```
{
    "fps": 10,
    "loop": true,
    "frames": [
        {
            "<x>": {
                "<y>": "<hex string>"
            },
            "0": {
                "0": "#00FF00",
                "1": "#008000",
                "2": "#004000",
            }
        }
    ]
}
```

| Key           | Data Type | Purpose                                       |
| ------------- | --------- | --------------------------------------------- |
| `frames`      | list      | A dictionary for each frame mapping the LED matrix. See example above. <br> The key is `x`, followed by child keys of the `y` containing the hex colour string.
| `fps`         | int       | Approximately how many frames to render per second. This isn't precise due to influences by processing speed, such as the LED's firmware or overheads.
| `loop`        | bool      | Replay the effect after the last frame

> **Frames per second:** Polychromatic has a soft limit of **80 FPS** when editing using the editor.
> The limit is not enforced when playing the effect, meaning the file can store a higher value.
>
> It is unknown what the actual limits are, as they may
> vary depending on USB bandwidth, power requirements, LED firmware and CPU load.
> You are entirely responsible for wear and tear on your LED controller.
