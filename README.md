# Website

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

```
npm init docusaurus@latest
``` 

The website is hosted at [InfoSum API Documentation](https://infosum.github.io/infosum-docs).

### Installation

Install `yarn`.

```
brew install yarn
```

If you're on linux or windows then install yarn via your pkg manager or downloader.

Make sure your working DIR is the root of this project and then run `yarn` to install all dependencies.

```
yarn
yarn install
```

### Local Development

```
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Deployment is handled by the CI pipeline on merging to main.