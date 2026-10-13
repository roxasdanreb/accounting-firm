# React.js and Vite.js Installation Guide

This guide explains how to install React.js with Vite.js and prepare the P & C Accounting Firm website for migration from static HTML, CSS, and JavaScript.

The current website does not use a Node.js package setup yet. This guide only covers installation and setup. It does not convert the existing pages into React components.

## 1. Prerequisites

Install the following before starting:

- Node.js 20 or newer
- npm, which is included with Node.js
- Visual Studio Code
- Git, if the project will be version-controlled

Confirm that Node.js and npm are installed in PowerShell:

```powershell
node --version
npm --version
```

If either command is not recognized, install Node.js from:

<https://nodejs.org/>

After installation, restart Visual Studio Code and run the version commands again.

## 2. Create the Vite React Application

Open PowerShell in the parent directory of this website and run:

```powershell
npm create vite@latest accounting-firm-react -- --template react
```

When prompted, accept the default options or select:

- Framework: `React`
- Variant: `JavaScript`

Move into the new project directory:

```powershell
cd accounting-firm-react
```

Install the project dependencies:

```powershell
npm install
```

## 3. Start the Development Server

Run the Vite development server:

```powershell
npm run dev
```

Vite will display a local address similar to:

```text
http://localhost:5173/
```

Open that address in a browser. Keep the PowerShell window open while developing. Stop the server with `Ctrl+C`.

## 4. Open the Project in Visual Studio Code

From the project directory, run:

```powershell
code .
```

If `code` is not recognized, open Visual Studio Code manually and select **File > Open Folder**, then choose the `accounting-firm-react` folder.

## 5. Install Recommended Packages

React and Vite are already installed by the project generator. The existing website does not require extra packages for its current functionality.

Optional packages can be added later when needed:

```powershell
npm install lucide-react
```

Only install additional packages when the website requires them. The basic React and Vite setup works without this optional package.

## 6. Project Structure

After installation, the project should contain files similar to these:

```text
accounting-firm-react/
|-- public/
|-- src/
|   |-- App.jsx
|   |-- main.jsx
|   |-- index.css
|-- index.html
|-- package.json
|-- vite.config.js
```

The important files are:

- `src/App.jsx`: main React component
- `src/main.jsx`: React application entry point
- `src/index.css`: global styles
- `public/`: static files that can be referenced directly by URL
- `package.json`: dependencies and npm scripts
- `vite.config.js`: Vite configuration

## 7. Move Existing Website Assets

Copy the existing `assets/` folder into the new project's `public/` folder:

```powershell
Copy-Item -Path ..\assets -Destination .\public\assets -Recurse
```

In React components, reference those files with paths beginning at the public folder root:

```jsx
<img src="/assets/who-we-are.png" alt="Accounting firm illustration" />
```

Do not use `../assets/...` when the files are inside `public/`.

## 8. Preserve the Existing Website During Migration

Keep the current static website folder unchanged while setting up the React project. The current files are:

- `index.html`
- `about.html`
- `services.html`
- `contact.html`
- `style.css`
- `script.js`
- `assets/`

The React project should be created as a separate folder first. This makes it possible to compare the original website with the new React version during migration.

## 9. Install and Run the Project Later

Whenever the React project is opened on another computer, install its dependencies first:

```powershell
cd accounting-firm-react
npm install
npm run dev
```

The `node_modules` folder should not be copied into source control. It is recreated by `npm install` from `package.json`.

## 10. Production Build Test

Before publishing the React website, create a production build:

```powershell
npm run build
```

Preview the production build locally:

```powershell
npm run preview
```

If the build succeeds, Vite creates the deployable files in the `dist/` folder.

## 11. Useful npm Commands

| Command | Purpose |
| --- | --- |
| `npm install` | Install project dependencies |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build |
| `npm outdated` | Check for outdated dependencies |

## 12. Common Issues

### `node` or `npm` is not recognized

Install Node.js, restart PowerShell and Visual Studio Code, and run the version commands again.

### Port 5173 is already in use

Start Vite on another port:

```powershell
npm run dev -- --port 5174
```

### Images are not displayed

Confirm that the image is inside `public/assets/` and that the React path starts with `/assets/`.

### Dependencies are missing

Run:

```powershell
npm install
```

### PowerShell blocks npm scripts

If Windows reports an execution policy error, open PowerShell as the current user and run:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

Then restart the terminal and run the npm command again.

## Installation Complete

React.js and Vite.js are installed when:

1. `npm install` completes without errors.
2. `npm run dev` starts a local Vite server.
3. The starter React page opens in the browser.
4. `npm run build` completes successfully.

The next development step is to migrate the existing HTML pages into reusable React components and move the existing styling into the React project.
