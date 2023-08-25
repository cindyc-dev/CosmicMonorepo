# Cosmic Monorepo 🌌

## Tech

- Client
  - [Vite](https://vitejs.dev/)
  - [React](https://react.dev/)
- Server
  - [ExpressJS](https://expressjs.com/)
  - [NodeJS](https://nodejs.org/en)
- [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces/)

## Setup

1. `npm install`
2. (Sometimes necessary) Link the `shared` package
   - Enter the `/server` folder, link the local package and return to the root folder
   ```bash
   cd server
   npm link ../shared
   cd ..
   ```
   - Enter the `/client` folder, link the local package and return to the root folder
   ```bash
   cd client
   npm link ../shared
   cd ..
   ```
3. Run the client and server's development scripts
   - Running `npm run dev` at the root level concurrently runs the client and server's `dev` scripts as well
   ```bash
   npm run dev
   ```

## Folder Structure

```
cosmicmonorepo/
├── client/
│   ├── src/
│   │   ├── ... // React (Vite) application files
│   ├── package.json
│   ├── tsconfig.json
│   └── ... // other React (Vite) config files
├── server/
│   ├── src/
│   │   ├── ... // Node.js application files
│   ├── package.json
│   └── tsconfig.json
├── shared/
│   ├── ... Shared application/type/constant files
│   ├── package.json
│   └── tsconfig.json
├── node_modules/
└── package.json
```
