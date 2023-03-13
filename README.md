# vite-setup

Vite(react) + React Router Dom + TailwindCss + React Icons + Framer motion (more to come)

### Vite Setup

```
npm create vite@latest my-project -- --template react
cd my-project
```

### Tailwind Setup

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### tailwind config

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### tailwind css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Install React Router Dom

```
npm install react-router-dom
```

### Install React Icons

```
npm install react-icons --save
```

### Install Framer Motion

```
npm install framer-motion
```
