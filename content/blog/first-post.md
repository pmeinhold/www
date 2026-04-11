+++
title = "My First Blog Post"
date = 2026-04-11
[taxonomies]
+++

Finally, I came around to create my own little room on the web.
I cannot imagine there being a better use of my time than creating a nice little blog and enjoying
to avoid writing my master's thesis! :D

Anyway, this first post should be about the process of creating this site, my thoughts and
preferences for it, and whatever else I'll come up with.

## Inspiration

In the middle of 2025, I started reading [Steve Klabnik's blog](https://steveklabnik.com/), for very
interesing thoughts on the [Rust programming language](https://rust-lang.org/) and
[AI](https://www.youtube.com/watch?v=VZWEhS3u-FI).
Inevitably, I got motivated to create a similar blog for myself, in which I can just poop out all
the badly fleshed-out thoughts that I have without needing to rely on ancient and
difficult-to-share technology like these smelly, not at all fire-resistant, iPad-shaped sheets they
make from trees.
Also, social media is ass!

Steve's website looks nice and clean. It would be a nice challenge to create something
similar-looking. So I thought.
But first, I had to decide on what tech "stack" fitted my needs:
+ simple, minimal setup and looks
+ markdown writing
+ math typesetting
+ code highlighting
+ [catppuccin](https://catppuccin.com/) colors with dark/light theme toggling

So, I landed on the no-dependency static site generator
[Zola](https://www.getzola.org/), which is advertised as being written in Rust, fast, etc.
But am I the only one that thinks that their website, ironically, looks like crap? Whatever.
Then there is the [Bear theme](https://www.getzola.org/themes/bearblog/), which comes quite close
to the aesthetics I'm going for.

## Setup

Setting this up for local development was super easy:
1. Create a new Git repository for the project.
    ```bash
    mkdir mysite/
    cd mysite/
    git init
    ```
2. Install Zola. (By defining a devshell in a [Nix flake](https://nixos.wiki/wiki/flakes) if you're cool. ;)
3. Initialize the Zola project.
    ```bash
    zola init .
    ```
4. Add the theme via Git submodules. (No idea how these work, just go with it.)
    ```bash
    git submodule add https://codeberg.org/alanpearce/zola-bearblog themes/zola-bearblog
    ```
5. Add `theme = "zola-bearblog"` and other important stuff to the `zola.toml` config file.
6. Content (in the form of markdown files) goes in the `content/` directory. What a concept!

I'm too lazy to do a full tutorial here.
Look into [Zola's docs](https://www.getzola.org/documentation/getting-started/overview/),
the [Bear theme](https://www.getzola.org/themes/bearblog/),
or my [repo](https://github.com/pmeinhold/www.pmeinhold)
for details.
I'll just highlight the things in my setup I thought were interesting:

-   Do math typesetting with [KaTeX](https://katex.org/) by creating `templates/custom_head.html`
    and adding the [starter template](https://katex.org/docs/browser) with
    [inline math](https://katex.org/docs/autorender#api) to its `<head>`.

-   Add custom CSS by creating `static/css/custom.css` and including it with
    ```html
    <!-- templates/custom_head.html -->
    <link rel="stylesheet" href="/css/custom.css">
    ```
    That's how I got my preferred colors.

-   Get a dark/light theme switching button and avatar image by copying the relevant header file to
    your templates.
    ```bash
    cp themes/zola-bearblog/templates/header.html templates/header.html
    ```
    Then, this overwrites the header from the theme and one can add desired content:
    ```html
    <!-- templates/header.html -->
    <button id="theme-toggle" aria-label="Toggle dark/light mode">🌓</button>
    ```
    Then, add the JavaScript for dark/light toggle into `templates/custom_head.html`.
    Yes. You heard right. What a cruel world we live in.
    Needing JavaScript to do a simple thing like a dark/light toggle button...
    (Maybe there even is a way of doing this with good ol'
    [Adobe Flash Player](https://en.wikipedia.org/wiki/Adobe_Flash_Player)?)


Okay. Now you've seen code highlighting. This is math:
$$
    \int_a^b f(x) \text{d}x= \frac{1}{3}(b^3 - a^3)
$$
for $f: \Reals \to \Reals, f(x) = x^2, a \leq b$.
