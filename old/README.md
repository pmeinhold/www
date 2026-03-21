# My Blog
My simple static blog built with [Zola](https://www.getzola.org/).

```bash
zola {serve|build|check} # local preview, production build, build without render
```

Also using:
- [KaTeX](https://katex.org/) for math formulas
- [Catppuccin](https://catppuccin.com/) Latte/Mocha as light/dark color schemes

## Creating a New Blog Post

1. Create a new markdown file in `content/blog/`:
    ````bash
    nvim content/blog/my-new-post.md
    ````

2. Add front matter and content:
    ````markdown
    +++
    title = "Post Title"      # Required
    date = 2024-12-08         # Required (YYYY-MM-DD)
    [taxonomies]
    tags = ["tag1", "tag2"]   # Optional
    +++

    Your blog post content goes here.

    ## Headings work

    You can use **bold**, *italic*, and `code`.
    ```python
    def example():
        print("Code blocks too!")
    ```
    ````

Visit [`http://127.0.0.1:1111`](http://127.0.0.1:1111) to see your changes live.

The static site will be in the `public/` folder.

Posts are automatically sorted by date (newest first).
