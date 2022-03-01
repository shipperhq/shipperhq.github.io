# shipperhq.github.io

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator. 

The live site is at https://dev.shipperhq.com/ .

## Prerequisites
- Set up Git: https://stackoverflow.com/c/shipperhq/questions/481
- Set up ssh key: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

## Installation

- Install npm: https://nodejs.org/en/download/
- Install 'yarn' via npm: https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable

## Getting Started

1. `git clone https://dev.shipperhq.com/`
2. `ls` -> verify shipperhq.github.io is listed
3. `cd shipperhq.github.io`
4. `cd dev-shipperhq`  
5. `yarn`
6. `yarn start`

Go to http://localhost:3000/ to see the site!

Optional: create a `.env` file and add your GitHub username. Use `.env.template` as an example.

## Build and Deploy
1. `yarn build`
2. `yarn serve`
3. `GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy`  - this command is a convenient way to build the website and push to the `gh-pages` branch. This command **automatically deploys** your local changes to the live site. 

## Important Commands

- `yarn start` - Starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.
- `yarn build` - Generates static content into the `build` directory.
- `yarn serve` - Serves the built website locally.
- `yarn deploy` - Pushes to the `gh-pages` branch and publishes the website to GitHub pages.
- `yarn rate-service-graphql` - generates graphQL docs for rate service using `https://api.shipperhq.com/v2/graphql` for insprospection.
- `yarn order-view-service-graphql` - generates graphQL docs for order view service using `https://ovs.shipperhq.com` for insprospection
- `yarn run docusaurus docs:version 1.1.0` - copies docs into a versioned directory and marks docs with that specified version.

## Branch

- `gh-pages` - The branch to deploy the static files to.

## Project Structure

- `/blog/` - Contains the blog Markdown files. You can delete the directory if you do not want/need a blog. More details can be found in the [blog guide](https://docusaurus.io/docs/blog).
- `/docs/` - Contains the Markdown files for the docs. Customize the order of the docs sidebar in `sidebars.js`. More details can be found in the [docs guide](https://docusaurus.io/docs/docs-markdown-features).
- `/src/` - Non-documentation files like pages or custom React components. You don't have to strictly put your non-documentation files in here but putting them under a centralized directory makes it easier to specify in case you need to do some sort of linting/processing.
    - `/src/pages` - Any files within this directory will be converted into a website page. More details can be found in the [pages guide](https://docusaurus.io/docs/creating-pages).
- `/static/` - Static directory. Any contents inside here will be copied into the root of the final `build` directory.
- `/docusaurus.config.js` - A config file containing the site configuration. More details can be found in the [api docs](https://docusaurus.io/docs/api/docusaurus-config).
- `/package.json` - A Docusaurus website is a React app. You can install and use any npm packages you like in them.
- `/sidebar.js` - Used by the documentation to specify the order of documents in the sidebar.

## Versioning

- Run the command with the new version number

```jsx
yarn run docusaurus docs:version 1.1.0
```

- When tagging a new version, the document versioning mechanism will:
    - Copy the full `docs/` folder contents into a new `versioned_docs/version-<version>/` folder.
    - Create a versioned sidebars file based from your current [sidebar](https://docusaurus.io/docs/docs-introduction#sidebar) configuration (if it exists) - saved as `versioned_sidebars/version-<version>-sidebars.json`.
    - Append the new version number to `versions.json`.

## Adding API docs
