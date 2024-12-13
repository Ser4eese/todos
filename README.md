# Mindbox Project

This project is a React application using TypeScript and Vite for development. It includes a setup for ESLint, testing with Vitest, and uses various libraries such as Mantine for UI components.

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your machine. This project uses the following versions:

- Node.js: >= 14.x
- npm: >= 6.x

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Ser4eese/todos
   cd todos
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Development

To start the development server with Vite, run:

```bash
npm run dev
```

This will start the server with Hot Module Replacement (HMR) enabled.

### Building for Production

To build the application for production, use:

```bash
npm run build
```

This will compile the TypeScript files and bundle the application using Vite.

### Linting

To run ESLint and check for code style issues, execute:

```bash
npm run lint
```

The ESLint configuration is set up to use type-aware lint rules for better code quality.

### Testing

The project uses Vitest for testing. To run the tests, use:

```bash
npm run test
```

The test environment is configured to use JSDOM, and setup files are located in `src/setupTests.js`.

## Configuration

### ESLint

The ESLint configuration is expanded to include type-aware lint rules. It uses `tseslint.configs.recommendedTypeChecked` for stricter type checking and includes the `eslint-plugin-react` for React-specific linting.

### TypeScript

The `tsconfig.json` is configured with modern JavaScript features and strict type checking. It includes paths for `src` and `src/types`.

### Vite

The `vite.config.js` file includes plugins for React and SVGR. It is configured to use Vitest for testing with global variables and a JSDOM environment.

## Dependencies

The project uses several dependencies, including:

- React and ReactDOM for building the UI
- Mantine for UI components and hooks
- Zustand for state management
- Vite for development and build tooling
- Vitest for testing

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
