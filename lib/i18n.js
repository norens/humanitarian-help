import rosetta from 'rosetta';

const i18n = rosetta({
	en: {
		title: 'Humanitarian Help 🇺🇦',
	},
	uk: {
		title: 'Гуманітарна Допомога 🇺🇦',
	},
});

i18n.locale('en');

export default i18n;
