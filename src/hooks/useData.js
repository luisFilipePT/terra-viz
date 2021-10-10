import { useState, useEffect } from 'react';
import Papa from 'papaparse';

import { average, groupBy } from './utils';

const groupByFaction = data => {
	return groupBy(data, item => item.faction);
};

const getFactionData = (factionsData, targetFaction) => {
	return factionsData.get(targetFaction)?.sort((a, b) => a.ste - b.ste);
};

const getTop100Faction = factionData => {
	return factionData?.slice(-100 || []);
};

const getTop100Factions = (degensData, lunaticsData, interstellarsData) => {
	return [...getTop100Faction(degensData), ...getTop100Faction(lunaticsData), ...getTop100Faction(interstellarsData)];
};

const getStakersPerFaction = (degens, lunatics, interstellars, numberOfRecords) => {
	return [
		{
			id: 'degens',
			label: 'Degens',
			value: degens?.length,
			color: '#9F3F8A',
			percentage: average(degens.length, numberOfRecords),
		},
		{
			id: 'lunatics',
			label: 'Lunatics',
			value: lunatics?.length,
			color: '#01E4FF',
			percentage: average(lunatics.length, numberOfRecords),
		},
		{
			id: 'interstellars',
			label: 'Interstellars',
			value: interstellars?.length,
			color: '#FF8800',
			percentage: average(interstellars.length, numberOfRecords),
		},
	];
};

const getTotalPerFaction = (predicate, factionData) => {
	return factionData.reduce((acc, cur) => acc + Number(cur[predicate]), 0);
};

const sum = (data, predicate) => data?.reduce((acc, cur) => acc + Number(cur[predicate]), 0);

const getPerFaction = (degens, lunatics, interstellars, all, predicate) => {
	const total = sum(all, predicate);
	const degensTotal = getTotalPerFaction(predicate, degens);
	const lunaticsTotal = getTotalPerFaction(predicate, lunatics);
	const interstellarsTotal = getTotalPerFaction(predicate, interstellars);

	return [
		{
			id: 'degens',
			label: 'Degens',
			value: sum(degens, predicate),
			color: '#9F3F8A',
			percentage: average(degensTotal, total),
		},
		{
			id: 'lunatics',
			label: 'Lunatics',
			value: sum(lunatics, predicate),
			color: '#01E4FF',
			percentage: average(lunaticsTotal, total),
		},
		{
			id: 'interstellars',
			label: 'Interstellars',
			value: sum(interstellars, predicate),
			color: '#FF8800',
			percentage: average(interstellarsTotal, total),
		},
	];
};

export const useData = () => {
	const [data, setData] = useState([[], [], [], [], [], []]);

	const parseData = results => {
		const totalResults = results.data.length;
		const factionsData = groupByFaction(results.data);
		const degensData = getFactionData(factionsData, 'degens');
		const lunaticsData = getFactionData(factionsData, 'lunatics');
		const interstellarsData = getFactionData(factionsData, 'interstellars');

		setData([
			getTop100Factions(degensData, lunaticsData, interstellarsData),
			getStakersPerFaction(degensData, lunaticsData, interstellarsData, totalResults),
			getPerFaction(degensData, lunaticsData, interstellarsData, results.data, 'lp'),
			getPerFaction(degensData, lunaticsData, interstellarsData, results.data, 'stt'),
			getPerFaction(degensData, lunaticsData, interstellarsData, results.data, 'ste'),
			results.data,
		]);
	};

	useEffect(() => {
		Papa.parse(
			'https://raw.githubusercontent.com/starterra/tools/main/ste-staking-results/06102021-stt_staking_users.csv',
			{
				download: true,
				complete: parseData,
				header: true,
			},
		);
	}, []);

	return data;
};
