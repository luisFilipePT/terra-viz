import { abbreviateNumber } from 'js-abbreviation-number';

export const groupBy = (list, keyGetter) => {
	const map = new Map();

	list.forEach(item => {
		const key = keyGetter(item);
		const collection = map.get(key);
		if (!collection) {
			map.set(key, [item]);
		} else {
			collection.push(item);
		}
	});

	return map;
};

export const formatNumber = (value, decimal = 0, abbreviate = false) =>
	abbreviate
		? abbreviateNumber(value, decimal).replace(/\.0+$/, '')
		: Number(value).toFixed(decimal).replace(/\.0+$/, '');

export const average = (amount, total) => ((amount * 100) / total).toFixed(2);
