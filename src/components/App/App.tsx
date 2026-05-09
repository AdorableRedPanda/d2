import bun from '@/assets/logo.svg';
import react from '@/assets/react.svg';
import type React from 'react';

import css from './styles.module.css';

export const App: React.FC = () => {
	return (
		<div className={css.app}>
			<div className={css.logo_container}>
				<img alt="Bun Logo" className={`${css.logo} ${css.bun_logo}`} src={bun} />
				<img alt="React Logo" className={`${css.logo} ${css.react_logo}`} src={react}/>
			</div>

			<h1>Bun + React</h1>
			<p>
				Edit <code>src/App.tsx</code> and save to test HMR
			</p>
		</div>
	);
};
