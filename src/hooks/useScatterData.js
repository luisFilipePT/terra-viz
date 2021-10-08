import { useCSVData } from './useCSVData';

export const useScatterData = () => {
	const data = useCSVData();

	const degenData = data.filter(item => item.faction === 'degens');
	const interstellarsData = data.filter(item => item.faction === 'interstellars');
	const lunaticsData = data.filter(item => item.faction === 'lunatics');

	return [];
};
