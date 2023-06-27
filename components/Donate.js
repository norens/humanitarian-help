import * as React from 'react';
import SectionTitle from './SectionTitle';
import useI18n from '../hooks/use-i18n';
import i18n from '../lib/i18n';

i18n.set('en', {
	donate: {
		title: 'Donate',
		globally: 'Globally',
	},
});

i18n.set('fr', {
	donate: {
		title: 'Faire un don',
		globally: 'Au niveau mondial',
	},
});

i18n.set('de', {
	donate: {
		title: 'Spenden',
		globally: 'Global',
	},
});

i18n.set('lt', {
	donate: {
		title: 'Aukokite',
		globally: 'Pasauliniu mastu',
	},
});

i18n.set('it', {
	donate: {
		title: 'Donare',
		globally: 'Globale',
	},
});

i18n.set('uk', {
	donate: {
		title: 'Пожертвувати',
		globally: 'По всьому світові',
	},
});

const Donate = () => {
	const t = useI18n();

	return (
		<div className="py-20">
			<a id="donate" className="scroll-mt-32">
				<SectionTitle>{t('donate.title')}</SectionTitle>
			</a>

			<h3 className="mt-8 font-semibold underline">
				{t('donate.globally')} (SWIFT)
			</h3>

			<p>
				<span className="font-medium">Beneficiary:</span> Charitable foundation
				«I am not alone»
				<br />
				<span className="font-medium">Address:</span> 9 Sharanevycha Street,
				Lviv, 79018, Ukraine
				<br />
				<span className="font-medium">Bank SWIFT Code:</span> PBANUA2X
				<br />
				<span className="font-medium">Name of the bank:</span> JSC CB
				"PRIVATBANK", 1D Hrushevskoho Street, Kyiv, 01001, Ukraine
				<br />
				<span className="font-medium">IBAN (UAH):</span>{' '}
				<span className="tabular-nums">UA833052990000026000001014009</span>
				<br />
				<span className="font-medium">IBAN (USD):</span>{' '}
				<span className="tabular-nums">UA253052990000026032001008436</span>
				<br />
				<span className="font-medium">IBAN (EUR):</span>{' '}
				<span className="tabular-nums">UA763052990000026032001006063</span>
				<br />
				<span className="font-medium">IBAN (PLN):</span>{' '}
				<span className="tabular-nums">UA303052990000026033041005971</span>
			</p>

			<h3 className="mt-8 font-semibold underline">Online</h3>

			<div className="mt-2">
				<a
					href="https://pay.fondy.eu/merchants/569833850171d45c8eb66fbac82ebec692e5aaf7/default/index.html?button=f9e08dbcc3ffab3312f4480ba212a2580719ff59"
					className="inline-block px-4 py-1 rounded-full bg-black hover:bg-gray-700 text-white font-semibold"
				>
					{t('navigation.donate')}
				</a>
			</div>

			<h3 className="mt-8 font-semibold underline">По Україні</h3>
			<p>
				Найменування отримувача: БО БЛАГОДІЙНИЙ ФОНД «Я НЕ ОДИН»
				<br />
				Код отримувача: 38007820
				<br />
				Рахунок отримувача: UA833052990000026000001014009
				<br />
				Назва банку: АТ КБ «ПРИВАТБАНК»
			</p>

			<p className="mt-4">
				Якщо ви клієнт ПриватБанку, ви можете сканувати QR-код, щоб швидше
				здійснити переказ.
			</p>

			<svg
				width="150"
				height="150"
				viewBox="-1 -1 23 23"
				xmlns="http://www.w3.org/2000/svg"
				shapeRendering="crispEdges"
				className="mt-2 relative -left-1.5"
			>
				<rect
					fillOpacity="1"
					fill="rgb(255, 254, 249)"
					x="-1"
					y="-1"
					width="23"
					height="23"
				/>
				<path
					fillOpacity="1"
					fill="rgb(25, 26, 26)"
					fillRule="evenodd"
					d="M 9 0 L 10 0 L 10 4 L 9 4 L 9 3 L 8 3 L 8 1 L 9 1 z M 11 0 L 13 0 L 13 1 L 12 1 L 12 2 L 11 2 z M 12 2 L 13 2 L 13 3 L 12 3 z M 11 3 L 12 3 L 12 4 L 11 4 z M 8 4 L 9 4 L 9 7 L 10 7 L 10 6 L 11 6 L 11 7 L 12 7 L 12 6 L 11 6 L 11 5 L 12 5 L 12 4 L 13 4 L 13 8 L 11 8 L 11 9 L 9 9 L 9 8 L 8 8 z M 0 8 L 2 8 L 2 9 L 1 9 L 1 10 L 0 10 z M 3 8 L 4 8 L 4 9 L 6 9 L 6 10 L 5 10 L 5 11 L 4 11 L 4 12 L 5 12 L 5 11 L 6 11 L 6 12 L 8 12 L 8 13 L 2 13 L 2 12 L 3 12 L 3 10 L 2 10 L 2 9 L 3 9 z M 6 8 L 8 8 L 8 9 L 6 9 z M 14 8 L 17 8 L 17 9 L 18 9 L 18 8 L 20 8 L 20 10 L 18 10 L 18 12 L 20 12 L 20 10 L 21 10 L 21 13 L 19 13 L 19 14 L 18 14 L 18 13 L 15 13 L 15 12 L 14 12 L 14 13 L 13 13 L 13 15 L 14 15 L 14 16 L 13 16 L 13 18 L 14 18 L 14 17 L 15 17 L 15 18 L 17 18 L 17 19 L 16 19 L 16 20 L 17 20 L 17 21 L 12 21 L 12 18 L 10 18 L 10 20 L 9 20 L 9 21 L 8 21 L 8 19 L 9 19 L 9 18 L 8 18 L 8 17 L 9 17 L 9 16 L 10 16 L 10 17 L 11 17 L 11 16 L 12 16 L 12 15 L 11 15 L 11 14 L 12 14 L 12 13 L 11 13 L 11 12 L 12 12 L 12 10 L 13 10 L 13 11 L 16 11 L 16 12 L 17 12 L 17 10 L 16 10 L 16 9 L 14 9 zM 13 19 L 15 19 L 15 20 L 13 20 z M 11 9 L 12 9 L 12 10 L 11 10 z M 13 9 L 14 9 L 14 10 L 13 10 z M 6 10 L 7 10 L 7 11 L 6 11 z M 8 10 L 9 10 L 9 11 L 11 11 L 11 12 L 10 12 L 10 13 L 11 13 L 11 14 L 9 14 L 9 15 L 8 15 L 8 13 L 9 13 L 9 12 L 8 12 z M 16 14 L 17 14 L 17 16 L 19 16 L 19 17 L 18 17 L 18 18 L 17 18 L 17 17 L 15 17 L 15 16 L 16 16 z M 19 14 L 20 14 L 20 15 L 19 15 z M 10 15 L 11 15 L 11 16 L 10 16 z M 19 17 L 21 17 L 21 19 L 20 19 L 20 18 L 19 18 z M 17 19 L 18 19 L 18 20 L 17 20 z M 10 20 L 11 20 L 11 21 L 10 21 z M 19 20 L 20 20 L 20 21 L 19 21 z"
				/>
				<path
					d="M0,0h7h0v0v7v0h0h-7h0v0v-7v0h0zM1,1h5h0v0v5v0h0h-5h0v0v-5v0h0zM2,2h3h0v0v3v0h0h-3h0v0v-3v0h0z M14,0h7h0v0v7v0h0h-7h0v0v-7v0h0zM15,1h5h0v0v5v0h0h-5h0v0v-5v0h0zM16,2h3h0v0v3v0h0h-3h0v0v-3v0h0z M0,14h7h0v0v7v0h0h-7h0v0v-7v0h0zM1,15h5h0v0v5v0h0h-5h0v0v-5v0h0zM2,16h3h0v0v3v0h0h-3h0v0v-3v0h0z"
					fillRule="evenodd"
					fillOpacity="1"
					fill="rgb(25, 26, 26)"
				/>
			</svg>
		</div>
	);
};

export default Donate;
