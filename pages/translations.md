---
layout: docs
title: Translations
permalink: /translations/
---

## Overview

Polychromatic uses gettext to localize the application to different languages.
The source language is **English (United Kingdom)** for both the interface and
code.

Currently, this application's translation system is decentralised.
The translation is performed offline using POT and PO files and is then
added into the project's version control system.

---

## Prerequisites

You'll need to install:

* [Poedit] (or other translation editor)
* The `git` package (or other Git client)
* The `intltool` and `gettext` package

In order to contribute your changes, you'll also need:

* An account on [GitHub](https://github.com)

Before starting, make sure there isn't an [open pull request] for your language already.
If so, consider leaving a review.

It might be worth checking if there's been any new, unreleased translations [since the last release].

[open pull request]: https://github.com/polychromatic/polychromatic/pulls?q=is%3Apr+is%3Aopen+label%3Ai18n+
[since the last release]: https://github.com/polychromatic/polychromatic/compare/stable...master
[Poedit]: https://poedit.net/

> This guide uses [Poedit] for writing translations and the Terminal for
running the `git` command for version control.

---

## Set up the project

1. [Fork the polychromatic repository](https://github.com/polychromatic/polychromatic/fork) on GitHub.

1. Clone this repository to your computer.

       git clone https://github.com/<your username>/polychromatic.git

1. Ensure the translation templates are up-to-date.

       ./scripts/create-locales.sh

1. **(Optional)** If you've forked this project before, you may need to reset your repository and obtain the latest changes.

       git reset HEAD --hard
       git pull --rebase https://github.com/polychromatic/polychromatic.git master

1. Check the `locales` folder for your language's locale code:

    [Translate an existing language](#translate-for-an-existing-language){:.btn}
    [Translate for a new language](#translate-for-a-new-language){:.btn}

---

## Translate for a new language

1. Open `locale/polychromatic.pot` and click the **[Create New Translation]** button.

    ![Screenshot of Poedit after opening pot file](/images/poedit-1.png)

1. Choose your desired language.

    ![Language selection screen](/images/poedit-2.png)

1. Start translating!

    > **Tip:** Enable the sidebar (View → Show Sidebar) to find translator notes
    for some strings to assist in determining the context.

    ![Example of translating to Spanish](/images/poedit-3.png)

1. When finished, save the file to the `locales` directory.

    > Poedit will automatically set the filename to the locale code as appropriate.

    The file name should be the locale code. For example, **"Spanish (Spain)"** would be saved as `es_ES.po`.

1. Open `locale/LINGUAS` in your text editor and add the new locale code.

1. Open `source/launchers/polychromatic.desktop` in your text editor.

    Duplicate these lines:
    * `Comment`
    * `GenericName`
    * `Name` (under `Desktop Action`)

    Append the locale code before the `=` sign inside square brackets `[]` and translate the line, like so:

    ```ini
    GenericName=Device Manager for RGB Lighting
    GenericName[es]=Administrador de dispositivos para iluminación RGB

    Comment=Configure connected lighting peripherals
    Comment[es]=Configurar conectado iluminación periféricos

    [Desktop Action devices]
    Name=Configure Devices
    Name[es]=Configurar dispositivos
    ```

1. **(Optional)** Test your work to check it looks good for end users.

    [Test translation](#test-a-translation){:.btn}

1. When you're happy with your progress, commit/push your changes.

    [Commit your changes](#commit-your-changes){:.btn}

---

## Translate for an existing language

> Assumes the [prerequisites](#prerequisites) have been followed and that your
> copy of the repository is up-to-date.

1. Ensure the translations are up-to-date with the source code.

       ./scripts/create-locales.sh

1. Open [Poedit] and translate!

1. **(Optional)** You may wish to check these files too:

       source/launchers/polychromatic.desktop

1. **(Optional)** Test your work to check it looks good for end users.

    [Test translation](#test-a-translation){:.btn}

1. When you're happy with your progress, commit/push your changes.

    [Commit your changes](#commit-your-changes){:.btn}


---

## Test a translation

1. Build the locales:

       ./scripts/build-locales.sh

1. Run the application from the repository, using the `--locale` parameter to
    specify the locale code.

    In order to run the main application from the repository folder, some [build dependencies]
    may need to be installed. A message will let you know if something is missing.

       ./polychromatic-controller-dev --locale <locale>
       ./polychromatic-tray-applet --locale <locale>
       ./polychromatic-cli --locale <locale>

    > **Note:** Only the user interface is translated. Verbose/debugging output in
    the Terminal remains in English.

1. When you're happy with your progress, commit/push your changes.

    [Commit your changes](#commit-your-changes){:.btn}


[build dependencies]: /dependencies/

---

## Commit your changes

1. Open the repository folder in a Terminal. Add the files to Git regarding your locale
and create a commit.

       git add locale/<locale>.po
       git add locale/LINGUAS
       git commit -m "Add translation for <locale>"

    > **Note:** Please do not add the `.pot` or `.po` files for other languages, which
    are likely to be modified.

1. Push your commit to your fork `(origin)`

       git push origin master

1. Open a pull request on GitHub. Use the URL below, and replace `GITHUB_USERNAME` with your user name.

       https://github.com/GITHUB_USERNAME/polychromatic/compare

---
