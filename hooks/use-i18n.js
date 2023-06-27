import * as React from 'react';
import {useRouter} from 'next/router';
import i18n from '../lib/i18n';

const useI18n = () => {
	const router = useRouter();

	const t = React.useCallback(
		(key, params) => {
			return i18n.t(key, params, router.locale);
		},
		[router.locale],
	);

	return t;
};

export default useI18n;
