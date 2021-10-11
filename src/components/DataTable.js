import { useState } from 'react';
import Table from 'rsuite/Table';

const tableHeaderStyle = { fontSize: 16, color: 'white' };

const DataTable = ({ data }) => {
	const [sortColumn, setSortColumn] = useState();
	const [sortType, setSortType] = useState();
	const [isLoading, setIsLoading] = useState(false);

	const getData = () => {
		if (sortColumn && sortType) {
			return data.sort((a, b) => {
				let x = Number(a[sortColumn]);
				let y = Number(b[sortColumn]);
				if (typeof x === 'string') {
					x = x.charCodeAt();
				}
				if (typeof y === 'string') {
					y = y.charCodeAt();
				}
				if (sortType === 'asc') {
					return x - y;
				} else {
					return y - x;
				}
			});
		}
		return data;
	};

	const handleSortColumn = (sortColumn, sortType) => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
			setSortColumn(sortColumn);
			setSortType(sortType);
		}, 500);
	};

	return (
		<div>
			<Table
				virtualized
				height={400}
				data={getData()}
				onSortColumn={handleSortColumn}
				loading={isLoading}
				sortColumn={sortColumn}
				sortType={sortType}
			>
				<Table.Column width={200} align="center" fixed>
					<Table.HeaderCell style={tableHeaderStyle}>Staker</Table.HeaderCell>
					<Table.Cell dataKey="staker" />
				</Table.Column>

				<Table.Column width={200}>
					<Table.HeaderCell style={tableHeaderStyle}>Faction</Table.HeaderCell>
					<Table.Cell dataKey="faction" />
				</Table.Column>

				<Table.Column sortable width={250}>
					<Table.HeaderCell style={tableHeaderStyle}>LP</Table.HeaderCell>
					<Table.Cell dataKey="lp" />
				</Table.Column>

				<Table.Column sortable width={250}>
					<Table.HeaderCell style={tableHeaderStyle}>STE</Table.HeaderCell>
					<Table.Cell dataKey="ste" />
				</Table.Column>

				<Table.Column sortable minwidth={250} flexGrow={2}>
					<Table.HeaderCell style={tableHeaderStyle}>STT</Table.HeaderCell>
					<Table.Cell dataKey="stt" />
				</Table.Column>
			</Table>
		</div>
	);
};

export default DataTable;
