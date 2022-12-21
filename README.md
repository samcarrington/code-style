# Code Style

![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/samcarrington/code-style/main?style=flat-square)
![Netlify](https://img.shields.io/netlify/a68a85f7-ee00-4dc1-bd8d-e1916b7e4e41?style=flat-square)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![GitHub](https://img.shields.io/github/license/samcarrington/code-style?style=flat-square)

An [opinionated but simple style guide][code-style] for engineering projects.

## Build Setup

Local setup is simple enough; install dependencies and run the Nuxt project.
The master branch automatically deploys to Netlify.

It's a static (nuxt generated) site. Individual guidelines are Markdown files,
added to pages via `@nuxt/content`.

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```


## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## TODO

- Improve .NET section
- Add section on Infrastructure as code
- Add API Design principles (REST, versioning etc.)
- Translation to Spanish

[code-style]: https://code-style.gwawr.uk/
