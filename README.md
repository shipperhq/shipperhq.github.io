# shipperhq.github.io

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```
$ yarn
```

## Getting Started

- To get started, `cd dev-shipperhq` and `yarn start`
- Create a `.env` file and add your GitHub username. Use `.env.template` as an example.

## Local Development

- `yarn start` - Starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.
- `yarn build` - Generates static content into the `build` directory.
- `yarn serve` - Serves the built website locally.
- `yarn deploy`- Pushes to the `gh-pages` branch and publishes the website to GitHub pages.

## Build and Deploy
1. `yarn build`
2. `yarn serve`
3. `GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy`  - this command is a convenient way to build the website and push to the `gh-pages` branch.

## Branch

- `gh-pages` - The branch to deploy the static files to.

## Project Structure

- `/blog/` - Contains the blog Markdown files. You can delete the directory if you do not want/need a blog. More details can be found in the [blog guide](https://docusaurus.io/docs/blog).
- `/docs/` - Contains the Markdown files for the docs. Customize the order of the docs sidebar in `sidebars.js`. More details can be found in the [docs guide](https://docusaurus.io/docs/docs-markdown-features).
- `/src/` - Non-documentation files like pages or custom React components. You don't have to strictly put your non-documentation files in here but putting them under a centralized directory makes it easier to specify in case you need to do some sort of linting/processing.
    - `/src/pages` - Any files within this directory will be converted into a website page. More details can be found in the [pages guide](https://docusaurus.io/docs/creating-pages).
- `/static/` - Static directory. Any contents inside here will be copied into the root of the final `build` directory.
- `/docusaurus.config.js` - A config file containing the site configuration. More details can be found in the [api docs](https://docusaurus.io/docs/api/docusaurus-config).
- `/package.json` - A Docusaurus website is a React app. You can install and use any npm packages you like in them.
- `/sidebar.js` - Used by the documentation to specify the order of documents in the sidebar.
