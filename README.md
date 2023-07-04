# Audiophile Ecommerce web-app

## The features

Users are be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add/Remove products from the cart
- Fill in all fields in the checkout
- Receive form validations if fields are missed or incorrect during checkout
- See correct checkout totals depending on the products in the cart
  - Shipping always adds $50 to the order
  - VAT is calculated as 20% of the product total, excluding shipping
- See an order confirmation modal after checking out with an order summary

## Screenshot
![](/public/images/screenshot.png)

## Links
- Live Site URL: [https://audiophile-v2.netlify.app/](https://audiophile-v2.netlify.app/)

## Built with
- Tailwind
- Composition API
- SCSS
- Mobile-first workflow
- [Nuxt](https://nuxt.com/) - Vuejs framework 
- [Pinia](https://pinia.vuejs.org/) - State (store) library

## Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`

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

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
