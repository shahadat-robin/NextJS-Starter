# NextJS-Starter

This is a [Next.js](https://nextjs.org/) project starter kit bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features

- **Next.js 14:** The latest version of Next.js with all its powerful features.
- **TypeScript:** TypeScript support for type safety and better developer experience.
- **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
- **ESLint and Prettier:** Code quality tools to maintain a consistent codebase.
- **Husky:** Automatically lint commit messages and code upon committing.
- **Environment Variables:** Easy management of environment variables.
- **Customizable Layout:** Flexible layouting components.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Getting Start

### Prerequisites

- Node.js (>= 18.17)
- yarn

### Installation

```bash

# Clone the repository:
git clone https://github.com/yourusername/NextJS-Starter.git

# Go to project directory
cd NextJS-Starter

# Install dependencies:
yarn

# Start the development server:
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) into your browser to see the result.

## Project Structure

```plaintext

NextJS-Starter/
├── public/                # Static assets
│   pages/                 # Next.js pages
├── src/
│   ├── styles/            # Global styles
│   ├── layouts/           # Layout components
│   ├── components/        # Reusable components
│   ├── page-builder/      # Build page from here with better and simpler drive more custom component.
│   ├── utils/             # Utility functions
│   ├── hooks/             # Custom React hooks
│   ├── services/          # API services
│   └── context/           # React context for global state
├── .eslintrc.js           # ESLint configuration
├── .prettierrc            # Prettier configuration
├── jest.config.js         # Jest configuration
├── next.config.js         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project metadata and scripts
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
