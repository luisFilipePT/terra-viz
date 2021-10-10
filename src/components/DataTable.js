import Table from 'rsuite/Table';

const tableHeaderStyle = { fontSize: 16, color: 'white' };

const DataTable = ({ data }) => {
	if (!data) return null;

	return (
		<div>
			<Table virtualized height={400} data={data}>
				<Table.Column width={200} align="center" fixed>
					<Table.HeaderCell style={tableHeaderStyle}>Staker</Table.HeaderCell>
					<Table.Cell dataKey="staker" />
				</Table.Column>

				<Table.Column width={160}>
					<Table.HeaderCell style={tableHeaderStyle}>Faction</Table.HeaderCell>
					<Table.Cell dataKey="faction" />
				</Table.Column>

				<Table.Column flexGrow={1}>
					<Table.HeaderCell style={tableHeaderStyle}>LP</Table.HeaderCell>
					<Table.Cell dataKey="lp" />
				</Table.Column>

				<Table.Column flexGrow={1}>
					<Table.HeaderCell style={tableHeaderStyle}>STE</Table.HeaderCell>
					<Table.Cell dataKey="ste" />
				</Table.Column>

				<Table.Column flexGrow={1}>
					<Table.HeaderCell style={tableHeaderStyle}>STT</Table.HeaderCell>
					<Table.Cell dataKey="stt" />
				</Table.Column>
			</Table>
		</div>
	);
};

export default DataTable;
