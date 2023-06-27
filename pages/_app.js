import * as React from 'react';
import Head from 'next/head';
import '../global.css';

const MyApp = ({Component, pageProps}) => {
	return (
		<>
			<Head>
				<meta
					name="description"
					content="We organize humanitarian aid logistics from Europe and distribute within Ukrainian cities."
				/>
				<meta
					name="keywords"
					content="ukraine, help ukraine, humanitarian aid, humanitarian help, donate to ukraine"
				/>
			</Head>

			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
