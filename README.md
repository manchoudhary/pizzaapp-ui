# Tapri Pizza Cafe — Mobile UI

React Native mobile UI for **Tapri Pizza Cafe** — browse the menu, search products (including voice search), view product details, manage cart, and place orders against the VoiceXP / Tapri backend.

> This repository is shared for **code review / portfolio evaluation**. It is not intended as an open-source starter or a public forkable product.

## Highlights

- Home and menu browsing experience
- Product list and product detail screens
- Search with voice input support
- Cart and order description flows
- FAQs
- Redux state management and React Navigation

## Tech stack

| Area | Technology |
| --- | --- |
| Framework | React Native 0.72, React 18 |
| UI | Native Base |
| State | Redux / Redux Toolkit |
| Navigation | React Navigation 6 |
| Networking | Axios |
| Voice | React Native Voice / TTS |
| Platforms | Android & iOS |

## Project structure

```text
App.js                 Application entry
app/
  api/                 API helpers
  screens/             Home, Menu, Search, Cart, Product, FAQs, Orders
  components/          Shared UI
  navigator/           Tab and stack navigation
  containers/          Connected containers (e.g. mic / voice)
  reducers/            Redux reducers
  config/              REST base URL and app config
  theme/               Theme and icons
  assets/              Fonts and images
android/ / ios/        Native projects
```

## Role on the project

Mobile UI development for the Tapri Pizza Cafe client: screens, navigation, state, voice search integration, and API wiring.

## Notes for reviewers

- Backend base URL is configured under `app/config/restURLs.js`.
- App display name: **Tapri Pizza Cafe** (`tapriPizzaCafe`).
- Production services and data are proprietary.

## License

All rights reserved. See [LICENSE](./LICENSE).
