---
sidebar_position: 7
---

# Versioning

- Run the command with the new version number

```jsx
yarn run docusaurus docs:version 1.1.0
```

- When tagging a new version, the document versioning mechanism will:
    - Copy the full `docs/` folder contents into a new `versioned_docs/version-<version>/` folder.
    - Create a versioned sidebars file based from your current [sidebar](https://docusaurus.io/docs/docs-introduction#sidebar) configuration (if it exists) - saved as `versioned_sidebars/version-<version>-sidebars.json`.
    - Append the new version number to `versions.json`.