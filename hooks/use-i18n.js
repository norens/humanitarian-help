import * as React from 'react';
import {useRouter} from 'next/router';
import i18n from '../lib/i18n';
import {useCallback} from "react";

const useI18n = () => {
	const router = useRouter();

	return useCallback(
		(key, params) => {
			return i18n.t(key, params, router.locale);
		},
		[router.locale],
	);
};

export default useI18n;
