import * as React from 'react';
import {Mail, Facebook, Instagram, Twitter, Linkedin} from 'react-feather';
import Telegram from './Telegram';
import SectionTitle from './SectionTitle';
import useI18n from '../hooks/use-i18n';
import i18n from '../lib/i18n';

i18n.set('en', {
	contacts: {
		title: 'Contacts',
	},
});

i18n.set('fr', {
	contacts: {
		title: 'Contacts',
	},
});

i18n.set('de', {
	contacts: {
		title: 'Kontakte',
	},
});

i18n.set('lt', {
	contacts: {
		title: 'Kontaktai',
	},
});

i18n.set('it', {
	contacts: {
		title: 'Contatti',
	},
});

i18n.set('uk', {
	contacts: {
		title: 'Контакти',
	},
});

const Contacts = () => {
	const t = useI18n();

	return (
		<div className="bg-blue-500">
			<div className="container-sm py-20 text-white">
				<a id="contacts">
					<SectionTitle>{t('contacts.title')}</SectionTitle>
				</a>

				<p className="mt-8">
					Charitable foundation «I am not alone»
					<br />
					9 Sharanevycha Street, Lviv, 79018, Ukraine
					<br />
					<a href="tel:+380939595999">+38 (093) 959 59 99</a>
					<br />
					<a href="email:ya.ne.odyn@gmail.com">ya.ne.odyn@gmail.com</a>
				</p>

				<div className="mt-4 flex items-center space-x-4">
					<a
						href="https://www.facebook.com/%D0%91%D0%BB%D0%B0%D0%B3%D0%BE%D0%B4%D1%96%D0%B9%D0%BD%D0%B8%D0%B9-%D0%A4%D0%BE%D0%BD%D0%B4-%D0%AF-%D0%9D%D0%95-%D0%9E%D0%94%D0%98%D0%9D-111038361521631/about/?ref=page_internal"
						rel="nofollow noreferrer"
						className="block bg-white hover:bg-blue-50 w-7 h-7 flex items-center justify-center rounded-full"
					>
						<Facebook className="w-4 h-4 text-blue-500" />
					</a>

					<a
						href="https://www.instagram.com/yaneodyn_foundation/"
						rel="nofollow noreferrer"
						className="block bg-white hover:bg-blue-50 w-7 h-7 flex items-center justify-center rounded-full"
					>
						<Instagram className="w-4 h-4 text-blue-500" />
					</a>

					<a
						href="https://twitter.com/yaneodyn"
						rel="nofollow noreferrer"
						className="block bg-white hover:bg-blue-50 w-7 h-7 flex items-center justify-center rounded-full"
					>
						<Twitter className="w-4 h-4 text-blue-500" />
					</a>

					<a
						href="https://t.me/yaneodyn"
						rel="nofollow noreferrer"
						className="block bg-white hover:bg-blue-50 w-7 h-7 flex items-center justify-center rounded-full"
					>
						<Telegram className="w-4 h-4 text-blue-500" />
					</a>

					<a
						href="https://www.linkedin.com/company/i-am-not-alone/"
						rel="nofollow noreferrer"
						className="block bg-white hover:bg-blue-50 w-7 h-7 flex items-center justify-center rounded-full"
					>
						<Linkedin className="w-4 h-4 text-blue-500" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Contacts;
