
Default to using Bun instead of Node.js.

- Use `bun <file>` instead of `node <file>` or `ts-node <file>`
- Use `bun test` instead of `jest` or `vitest`
- Use `bun build <file.html|file.ts|file.css>` instead of `webpack` or `esbuild`
- Use `bun install` instead of `npm install` or `yarn install` or `pnpm install`
- Use `bun run <script>` instead of `npm run <script>` or `yarn run <script>` or `pnpm run <script>`
- Bun automatically loads .env, so don't use dotenv.

## Frontend

Use HTML imports with `Bun.serve()`. Don't use `vite`. HTML imports fully support React, CSS, Tailwind.

HTML files can import .tsx, .jsx or .js files directly and Bun's bundler will transpile & bundle automatically. `<link>` tags can point to stylesheets and Bun's CSS bundler will bundle.

```html#index.html
<html>
  <body>
    <h1>Hello, world!</h1>
    <script type="module" src="./frontend.tsx"></script>
  </body>
</html>
```

```sh
bun --hot ./index.ts
```

## Modules
- Every react component must be present a module
- Module is a single .tsx file or a folder with an index.ts file
- All modules from module directory should be exported from index.ts file
- Module directory should be named as main React component
- All module utilities, styles and subcomponents should be located in the same module directory
- In a module local `components`, `hooks`, `utils` can be folders or files. Every folder should have an index.ts file that exports all components, hooks or utils from the folder. For example, if you have a `components` folder with `Icon.tsx` and `Button.tsx`, you should have an `index.ts` file that exports only items, that used outside


## React components
- **Class composition**: use `clsJoin` from `@/utils` to compose class names, not `clsx` or `classnames`
  - Example: `clsJoin(css.button, isActive && css.active)`
- **Props**: use TypeScript interfaces for component props, props should be local
  
The example below shows a simple `IconButton` component with an icon and a label. The styles are imported from a CSS module and class names are composed using `clsJoin`. The component accepts `onClick`, `label`, and `disabled` props.:
```IconButton.tsx
import type React from 'react';

import { clsJoin } from '/@utils';
import { Icon } from './components'; // subcomponent located in the same module directory in components folder

import css from './styles.module.css';

interface Props {
	onClick: () => void;
	label: string;
	disabled?: boolean;
}

export const IconButton: React.FC<Props> = ({ onClick, label, disabled }) => {
    return (
        <button onClick={onClick} className={css.button} type="button">
            <Icon />
            <span className={clsJoin(css.label, disabled && css.disabled)}>
                {label}
            </span>
        </button>
    );
};
```

## Styles

- **CSS Modules**: write all component styles in `styles.module.css` files and import as `import css from './styles.module.css'`
- **Exception**: global styles in `src/styles/` are plain `.css` files (no modules)
- **Nesting**: use nested selectors with `&`
- **Local scope**: all styles are locally scoped by default, no need for unique class names or BEM
- **Single component** all styles are imported into the component file, no separate global stylesheet
- **Snake case**: use snake_case for class names, not camelCase or kebab-case

Example:
```css
.button {
    padding: 8px 16px;

    &:hover {
        opacity: 0.8;
    }

    &.icon {
        margin-right: 4px;
    }
}
```

For more information, read the Bun API docs in `node_modules/bun-types/docs/**.md`.
