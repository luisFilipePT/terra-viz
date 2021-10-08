import { useCSVData } from './useCSVData';
import { groupBy } from './utils';

export const useSwarmData = () => {
	const data = useCSVData();

	const grouped = groupBy(data, item => item.faction);

	const top100degens =
		grouped
			.get('degens')
			?.sort((a, b) => a.ste - b.ste)
			?.slice(-100) || [];

	const top100lunatics =
		grouped
			.get('lunatics')
			?.sort((a, b) => a.ste - b.ste)
			?.slice(-100) || [];

	const top100interstellars =
		grouped
			.get('interstellars')
			?.sort((a, b) => a.ste - b.ste)
			?.slice(-100) || [];

	return [...top100degens, ...top100lunatics, ...top100interstellars];
};
