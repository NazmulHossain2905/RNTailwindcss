# React Native Tailwindcss

# NativeWind

## 1. Installation

You will need to install both `nativewind` and `tailwindcss`

`tailwindcss` is not used during runtime so it can be added as a development dependency.

```bash
npm install nativewind
npm install --save-dev tailwindcss@3.3.2
```

## 2. Setup Tailwind CSS

Run `npx tailwindcss init` to create a `tailwind.config.js` file

```bash
npx tailwindcss init
```

Add the paths to all of your component files in your `tailwind.config.js` file.

```javascript
// tailwind.config.js

module.exports = {
- content: [],
+ content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 3. Add the Babel plugin

Modify your `babel.config.js`

```javascript
// babel.config.js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
+ plugins: ["nativewind/babel"],
};
```

### Thats it 🎉

---

# Resolve Typescript `ClassName` Error

NativeWind extends the React Native types via declaration merging. The simplest method to include the types is to create a new exact `nativewind-env.d.ts` file to the root dir and add a triple-slash directive referencing the types.

Add the following code to the `nativewind-env.d.ts` file.

```javascript
/// <reference types="nativewind/types" />
```

---

# Add Prettier (Sorting ClassNames Order)

## 1. Uninstall Pre-Installed `prettier`

```bash
npm uninstall -D prettier

// or

npm uninstall --save-dev prettier
```

## 2. install `prettier` & `prettier-plugin-tailwindcss`

```bash
npm install -D prettier prettier-plugin-tailwindcss
```

## 3. Rename the `.prettierrc.js` file

Rename the `.prettierrc.js` file to `prettier.json` or just `.prettierrc` and then paste below the codes.

```json
{
  "arrowParens": "avoid",
  "bracketSameLine": true,
  "bracketSpacing": false,
  "singleQuote": true,
  "trailingComma": "all",
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

## Finally, Restart the Project.

🎉 I hove that's downing well.

To run the project

```bash
npx react-native run-android
```
