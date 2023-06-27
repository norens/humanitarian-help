import * as React from 'react';
import Link from 'next/link';
import {Menu as MenuIcon} from 'react-feather';
import {Menu, Transition} from '@headlessui/react';
import clsx from 'clsx';
import LanguageSelect from './LanguageSelect';
import useI18n from '../hooks/use-i18n';
import i18n from '../lib/i18n';

i18n.set('en', {
	navigation: {
		whatWeDo: 'What we do',
		partners: 'Partners',
		memorandums: 'Memorandums',
		blog: 'Blog',
		updates: 'Latest Updates',
		contacts: 'Contacts',
		donate: 'Donate',
	},
});

i18n.set('fr', {
	navigation: {
		whatWeDo: "Ce qu'on fait",
		partners: 'Les partenaires',
		memorandums: 'Les accords',
		blog: 'Blog',
		updates: 'Dernières mises à jour',
		contacts: 'Contacts',
		donate: 'Faire un don',
	},
});

i18n.set('de', {
	navigation: {
		whatWeDo: 'Was machen wir',
		partners: 'Partner',
		memorandums: 'Memoranden',
		blog: 'Bloggen',
		updates: 'Letzte Aktualisierung',
		contacts: 'Kontakte',
		donate: 'Spenden',
	},
});

i18n.set('lt', {
	navigation: {
		whatWeDo: 'Ką mes darom',
		partners: 'Partneriai',
		memorandums: 'Memorandumai',
		blog: 'Dienoraštį',
		updates: 'Naujausi Atnaujinimai',
		contacts: 'Kontaktai',
		donate: 'Aukokite',
	},
});

i18n.set('it', {
	navigation: {
		whatWeDo: 'Cosa facciamo',
		partners: 'Partner',
		memorandums: 'Memorandum',
		blog: 'Blog',
		updates: 'Ultimi aggiornamenti',
		contacts: 'Contatti',
		donate: 'Donare',
	},
});

i18n.set('uk', {
	navigation: {
		whatWeDo: 'Що ми робимо',
		partners: 'Партнери',
		memorandums: 'Меморандуми',
		blog: 'Блог',
		updates: 'Останні оновлення',
		contacts: 'Контакти',
		donate: 'Пожертвувати',
	},
});

const Navigation = () => {
	const t = useI18n();

	return (
		<div className="bg-white p-4 flex items-center bg-white shadow sticky top-0 z-10">
			<div className="flex-1 min-w-0 block lg:hidden">
				<Menu as="div" className="relative">
					<Menu.Button className="p-1 rounded-md hover:bg-gray-50">
						<MenuIcon className="w-5 h-5" />
					</Menu.Button>

					<Transition
						as={React.Fragment}
						enter="transition ease-out duration-100"
						enterFrom="transform opacity-0 scale-95"
						enterTo="transform opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100 scale-100"
						leaveTo="transform opacity-0 scale-95"
					>
						<Menu.Items className="absolute left-0 origin-top-left w-56 mt-2 bg-white rounded-md border shadow-lg p-1">
							<Menu.Item>
								{({active}) => (
									<Link href="/#what-we-do">
										<a
											className={clsx(
												'block px-2 py-1 rounded-md',
												active && 'bg-blue-500 text-white',
											)}
										>
											{t('navigation.whatWeDo')}
										</a>
									</Link>
								)}
							</Menu.Item>

							<Menu.Item>
								{({active}) => (
									<Link href="/#partners">
										<a
											className={clsx(
												'block px-2 py-1 rounded-md',
												active && 'bg-blue-500 text-white',
											)}
										>
											{t('navigation.partners')}
										</a>
									</Link>
								)}
							</Menu.Item>

							<Menu.Item>
								{({active}) => (
									<Link href="/#memorandums">
										<a
											className={clsx(
												'block px-2 py-1 rounded-md',
												active && 'bg-blue-500 text-white',
											)}
										>
											{t('navigation.memorandums')}
										</a>
									</Link>
								)}
							</Menu.Item>

							<Menu.Item>
								{({active}) => (
									<Link href="/#updates">
										<a
											className={clsx(
												'block px-2 py-1 rounded-md',
												active && 'bg-blue-500 text-white',
											)}
										>
											{t('navigation.updates')}
										</a>
									</Link>
								)}
							</Menu.Item>

							<Menu.Item>
								{({active}) => (
									<Link href="/#contacts">
										<a
											className={clsx(
												'block px-2 py-1 rounded-md',
												active && 'bg-blue-500 text-white',
											)}
										>
											{t('navigation.contacts')}
										</a>
									</Link>
								)}
							</Menu.Item>
						</Menu.Items>
					</Transition>
				</Menu>
			</div>

			<div className="flex-1 min-w-0 hidden lg:block">
				<Link href="/">
					<a>
						<img src="/logo.png" className="h-8" />
					</a>
				</Link>
			</div>

			<nav className="flex-[3] min-w-0 hidden lg:flex items-center justify-center space-x-6">
				<Link href="/#what-we-do">
					<a className="font-medium hover:text-blue-600">
						{t('navigation.whatWeDo')}
					</a>
				</Link>

				<Link href="/#partners">
					<a className="font-medium hover:text-blue-600">
						{t('navigation.partners')}
					</a>
				</Link>

				<Link href="/#memorandums">
					<a className="font-medium hover:text-blue-600">
						{t('navigation.memorandums')}
					</a>
				</Link>

				<Link href="/#updates">
					<a className="font-medium hover:text-blue-600">
						{t('navigation.updates')}
					</a>
				</Link>

				<Link href="/#contacts">
					<a className="font-medium hover:text-blue-600">
						{t('navigation.contacts')}
					</a>
				</Link>
			</nav>

			<div className="flex-1 min-w-0 flex items-center justify-end space-x-4">
				<LanguageSelect />

				<Link href="/#donate">
					<a className="block px-4 py-1 rounded-full bg-black hover:bg-gray-700 text-white font-semibold">
						{t('navigation.donate')}
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Navigation;
