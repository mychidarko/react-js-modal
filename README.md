# React JS Modal

The simplest modal manager for your react apps.

## Installation

You can get react js modal up and running simply with yarn or npm

```sh
npm install react-ts-modal --save
```

```sh
yarn add react-ts-modal
```

## QuickStart

To get started, simply import the modal component.

```js
import Modal from "react-ts-modal";
```

React JS modal also comes with styles you can apply for cool effects and transitions. It comes in both CSS and SCSS, so you can use whichever you prefer.

```js
import "react-ts-modal/css/styles.scss";
// or
import "react-ts-modal/css/styles.css";
```

> It's better to import the styles in a top-most component like `App.js` in create-react-app.

From there, you can start building your awesome modal.

> react-ts-modal also has 100% typescript support as it's completely written in TypeScript.

```tsx
import Modal from "react-ts-modal";

const MyAwesomeModal = () => {
  return (
    <Modal name="awesome-modal">
      <div>This is the modal content!</div>
    </Modal>
  );
};

const App = () => {
  return (
    <div className="application">
      ... all the stuff on this page
      <MyAwesomeModal />
      {/* used here to make sure it's present in the DOM */}
    </div>
  );
};
```

From here, you can trigger the modal by simply doing this

```tsx
import { modal } from "react-ts-modal";

// show modal defined above
modal.show("awesome-modal");

// hide modal
modal.hide("awesome-modal");

// get modal instance in dom
const myModal = modal.find("awesome-modal");

// check if modal is open
modal.isOpen("awesome-modal");
```

That's it! A very easy to use project.

**Watch out: `<Modal>` requires the name prop. When using TypeScript, the compiler will shout at you if you miss this :-(**

Other available props for `<Modal>`

- name: string ------------------ The name of the modal (required)
- className?: string ------------ Modal className (optional)
- close?: Function -------------- Custom modal close method (optional)
- closeButton?: boolean --------- Show/hide modal close button (default `true`)
- children: any ----------------- Modal contents (required)
- show?: boolean ---------------- Manually show/hide modal (optional)
- size?: string ----------------- Size of modal (optional, uses modal styling)
- pageScroll?: boolean ---------- Enable/Disable page content scroll with modal active

You can find a "real-world" demo [here](https://mychi-store.netlify.app/) source code [here](https://github.com/darko-mychi/store-front).

Leave a star, contribute or give your feedback on this package. Thanks.

## Changelog

### v1.1.0 - Apr 19, 2021

#### Added

- `modal.exists` to check if modal exists in DOM

#### Fixed

Modal close button onClick fixed.

#### Changed

- Warnings moved from `modal.find` to dependent methods.
