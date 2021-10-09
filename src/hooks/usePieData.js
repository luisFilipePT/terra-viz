import { useCSVData } from './useCSVData';
import { average } from './utils';

const getStakersPerFaction = (degens, lunatics, interstellars, numberOfRecords) => {
	const degensPercentage = average(degens.length, numberOfRecords);
	const lunaticsPercentage = average(lunatics.length, numberOfRecords);
	const interstellarsPercentage = average(interstellars.length, numberOfRecords);

	return [
		{
			id: 'degens',
			label: 'Degens',
			value: degens?.length,
			color: '#9F3F8A',
			percentage: degensPercentage,
		},
		{
			id: 'lunatics',
			label: 'Lunatics',
			value: lunatics?.length,
			color: '#01E4FF',
			percentage: lunaticsPercentage,
		},
		{
			id: 'interstellars',
			label: 'Interstellars',
			value: interstellars?.length,
			color: '#FF8800',
			percentage: interstellarsPercentage,
		},
	];
};

const getLpPerFaction = (degens, lunatics, interstellars, totalLP) => {
	const degensTotalLP = degens.reduce((acc, cur) => acc + Number(cur.lp), 0);
	const lunaticsTotalLP = lunatics.reduce((acc, cur) => acc + Number(cur.lp), 0);
	const interstellarsTotalLP = interstellars.reduce((acc, cur) => acc + Number(cur.lp), 0);

	const degensSTTPercentage = average(degensTotalLP, totalLP);
	const lunaticsSTTPercentage = average(lunaticsTotalLP, totalLP);
	const interstellarsSTTPercentage = average(interstellarsTotalLP, totalLP);

	return [
		{
			id: 'degens',
			label: 'Degens',
			value: degens?.reduce((acc, cur) => acc + Number(cur.lp), 0),
			color: '#9F3F8A',
			percentage: degensSTTPercentage,
		},
		{
			id: 'lunatics',
			label: 'Lunatics',
			value: lunatics?.reduce((acc, cur) => acc + Number(cur.lp), 0),
			color: '#01E4FF',
			percentage: lunaticsSTTPercentage,
		},
		{
			id: 'interstellars',
			label: 'Interstellars',
			value: interstellars?.reduce((acc, cur) => acc + Number(cur.lp), 0),
			color: '#FF8800',
			percentage: interstellarsSTTPercentage,
		},
	];
};

const getSTTPerFaction = (degens, lunatics, interstellars, totalSTT) => {
	const degensTotalSTT = degens.reduce((acc, cur) => acc + Number(cur.stt), 0);
	const lunaticsTotalSTT = lunatics.reduce((acc, cur) => acc + Number(cur.stt), 0);
	const interstellarsTotalSTT = interstellars.reduce((acc, cur) => acc + Number(cur.stt), 0);

	const degensSTTPercentage = average(degensTotalSTT, totalSTT);
	const lunaticsSTTPercentage = average(lunaticsTotalSTT, totalSTT);
	const interstellarsSTTPercentage = average(interstellarsTotalSTT, totalSTT);

	return [
		{
			id: 'degens',
			label: 'Degens',
			value: degens?.reduce((acc, cur) => acc + Number(cur.stt), 0),
			color: '#9F3F8A',
			percentage: degensSTTPercentage,
		},
		{
			id: 'lunatics',
			label: 'Lunatics',
			value: lunatics?.reduce((acc, cur) => acc + Number(cur.stt), 0),
			color: '#01E4FF',
			percentage: lunaticsSTTPercentage,
		},
		{
			id: 'interstellars',
			label: 'Interstellars',
			value: interstellars?.reduce((acc, cur) => acc + Number(cur.stt), 0),
			color: '#FF8800',
			percentage: interstellarsSTTPercentage,
		},
	];
};

const getStePerFaction = (degens, lunatics, interstellars, totalSTE) => {
	const degensTotalSTE = degens.reduce((acc, cur) => acc + Number(cur.ste), 0);
	const lunaticsTotalSTE = lunatics.reduce((acc, cur) => acc + Number(cur.ste), 0);
	const interstellarsTotalSTE = interstellars.reduce((acc, cur) => acc + Number(cur.ste), 0);

	const degensSTEPercentage = average(degensTotalSTE, totalSTE);
	const lunaticsSTEPercentage = average(lunaticsTotalSTE, totalSTE);
	const interstellarsSTEPercentage = average(interstellarsTotalSTE, totalSTE);
	return [
		{
			id: 'degens',
			label: 'Degens',
			value: degens?.reduce((acc, cur) => acc + Number(cur.ste), 0),
			color: '#9F3F8A',
			percentage: degensSTEPercentage,
		},
		{
			id: 'lunatics',
			label: 'Lunatics',
			value: lunatics?.reduce((acc, cur) => acc + Number(cur.ste), 0),
			color: '#01E4FF',
			percentage: lunaticsSTEPercentage,
		},
		{
			id: 'interstellars',
			label: 'Interstellars',
			value: interstellars?.reduce((acc, cur) => acc + Number(cur.ste), 0),
			color: '#FF8800',
			percentage: interstellarsSTEPercentage,
		},
	];
};

export const usePieData = () => {
	const dataToParse = useCSVData();

	const totalStakers = dataToParse.length;
	const totalLP = dataToParse.reduce((acc, cur) => acc + Number(cur.lp), 0);
	const totalSTT = dataToParse.reduce((acc, cur) => acc + Number(cur.stt), 0);
	const totalSTE = dataToParse.reduce((acc, cur) => acc + Number(cur.ste), 0);

	const degens = dataToParse?.filter(data => data.faction === 'degens');
	const lunatics = dataToParse?.filter(data => data.faction === 'lunatics');
	const interstellars = dataToParse?.filter(data => data.faction === 'interstellars');

	const sttPerFaction = getSTTPerFaction(degens, lunatics, interstellars, totalSTT);
	const lpPerFaction = getLpPerFaction(degens, lunatics, interstellars, totalLP);
	const stePerFaction = getStePerFaction(degens, lunatics, interstellars, totalSTE);
	const stakersPerFaction = getStakersPerFaction(degens, lunatics, interstellars, totalStakers);

	return {
		stakers: stakersPerFaction,
		lp: lpPerFaction,
		stt: sttPerFaction,
		ste: stePerFaction,
	};
};
