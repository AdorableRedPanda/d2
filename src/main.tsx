import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './components';

const elem = document.getElementById('root') as HTMLElement;
const app = (
	<StrictMode>
		<App />
	</StrictMode>
);

const root = createRoot(elem);
root.render(app);
