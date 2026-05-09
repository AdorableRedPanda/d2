import type React from 'react';

import { clsJoin } from '@utils';

import bun from '@/assets/logo.svg?url';
import react from '@/assets/react.svg?url';

import css from './styles.module.css';

export const App: React.FC = () => {
	return (
		<div className={css.app}>
			<div className={css.logo_container}>
				<img alt="Bun Logo" className={clsJoin(css.logo, css.bun)} src={bun} />
				<img
					alt="React Logo"
					className={clsJoin(css.logo, css.react)}
					src={react}
				/>
			</div>

			<h1>Bun + React</h1>
			<p>
				Edit <code>src/App.tsx</code> and save to test HMR
			</p>
		</div>
	);
};
