# socvr.org website content

This repository holds the content for the [socvr.org](https://socvr.org) website.

# Website pages

We are currently using GitHub pages to host this website. We are choosing to use the Static Files option. Because of that, we need to produce HTML files for GitHub to serve.

_Right now_, we're using EJS to template HTML files, using markdown as the "page content". The `pages` directory has all of the site's pages. There are three types of files:

* `<pagename>.md`. This is the markdown file for the actual page's content. If you want to update what the page says, do it here.
* `<pagename>.ejs`. This file sets up the page's HTML DOM structure and grabs the navigation bar and the renders the markdown file. For the method call to render the markdown (`GLOBEL.md(<filepath>)`)
  * The file path needs to be relative to the root of the repository. It should start with `pages/`.
  * Yes I am aware that "GLOBEL" is not spelled correctly. This symbol comes from [ejs-cli](https://github.com/jaywcjlove/ejs-cli).
  * The `md` method is defined in the `.ejscrc.mjs` file.
* `_nav.ejs`. This is just a partial HTML template with the top-of-page navigation menu. This will be applied to _all_ pages. If you need a navigation entry applied to only one page, modify that page's ejs file.

# Auto Comments

See the [auto comments readme file](comments/readme.md).
