import * as React from 'react';
import clsx from 'clsx';

const SectionTitle = ({children, className}) => (
	<h2 className={clsx('text-3xl font-bold uppercase', className)}>
		{children}
	</h2>
);

export default SectionTitle;
