# Website

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

```
npm init docusaurus@latest
``` 

The website is hosted at [InfoSum API Documentation](https://infosum.github.io/infosum-docs).

### Installation

```
npm i
```

### Local Development

```
npx docusaurus start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Deployment is handled by the CI pipeline on merging to main.