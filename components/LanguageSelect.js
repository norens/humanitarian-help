import * as React from 'react';
import Image from 'next/image';
import {useRouter} from 'next/router';
import cookies from 'js-cookie';
import {ChevronDown} from 'react-feather';
import ukFlag from '../public/flag-uk.png';
import enFlag from '../public/flag-en.png';
import itFlag from '../public/flag-it.png';
import ltFlag from '../public/flag-lt.png';
import deFlag from '../public/flag-de.png';
import frFlag from '../public/flag-fr.png';
import {useCallback} from "react";

const LanguageSelect = () => {
	const router = useRouter();

	const changeLocale = useCallback(
		event => {
			const locale = event.target.value;

			cookies.set('NEXT_LOCALE', locale);
			router.push(router.pathname, router.pathname, {locale});
		},
		[router],
	);

	return (
		<div className="relative">
			<div className="flex items-center space-x-1">
				<div className="relative w-6 h-6">
					{router.locale === 'en' && (
						<Image src={enFlag} layout="fill" objectFit="cover" />
					)}
					{router.locale === 'de' && (
						<Image src={deFlag} layout="fill" objectFit="cover" />
					)}
					{router.locale === 'fr' && (
						<Image src={frFlag} layout="fill" objectFit="cover" />
					)}
					{router.locale === 'it' && (
						<Image src={itFlag} layout="fill" objectFit="cover" />
					)}
					{router.locale === 'lt' && (
						<Image src={ltFlag} layout="fill" objectFit="cover" />
					)}
					{router.locale === 'uk' && (
						<Image src={ukFlag} layout="fill" objectFit="cover" />
					)}
				</div>

				<ChevronDown className="w-4 h-4 text-gray-500" />
			</div>

			<select
				className="absolute inset-0 max-w-full opacity-0"
				value={router.locale}
				onChange={changeLocale}
			>
				<option value="en">🇺🇸 English</option>
				<option value="fr">🇫🇷 Français</option>
				<option value="de">🇩🇪 Deutsche</option>
				<option value="it">🇮🇹 Italiano</option>
				<option value="lt">🇱🇹 Lietuvių</option>
				<option value="uk">🇺🇦 Українська</option>
			</select>
		</div>
	);
};

export default LanguageSelect;
