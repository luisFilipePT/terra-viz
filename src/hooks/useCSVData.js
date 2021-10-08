import { useState, useEffect } from 'react';
import Papa from 'papaparse';

export const useCSVData = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		Papa.parse(
			'https://raw.githubusercontent.com/starterra/tools/main/ste-staking-results/06102021-stt_staking_users.csv',
			{
				download: true,
				complete: results => setData(results.data),
				header: true,
			},
		);
	}, []);

	return data;
};
