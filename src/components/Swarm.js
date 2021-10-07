import { ResponsiveSwarmPlot } from "@nivo/swarmplot";
import { useData } from "../hooks/useData";
// import data from '../data/data.json'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const SwarmPlot = () => {
  const data = useData();

  return (
    <ResponsiveSwarmPlot
      theme={{
        "background": "transparent",
        "textColor": "#ffee00",
        "fontSize": 14,
        "axis": {
            "domain": {
                "line": {
                    "stroke": "#777777",
                    "strokeWidth": 0
                }
            },
            "ticks": {
                "line": {
                    "stroke": "#777777",
                    "strokeWidth": 0
                }
            }
        },
        "grid": {
            "line": {
                "stroke": "#dddddd",
                "strokeWidth": 0
            }
        }
      }}
      layout="horizontal"
      gap={20}
      data={data}
      groups={["degens", "lunatics", "interstellars"]}
      groupBy="faction"
      identity="staker"
      value="ste"
      valueScale={{ type: 'linear', min: 0, max: 70000, reverse: false }}
      size={{ key: "ste", values: [0, 10000], sizes: [2, 8] }}
      simulationIterations={120}
      colors={['#c74dad', '#00e5ff', '#fc8600']}
      borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.6 ] ] }}
      margin={{ top: 80, right: 100, bottom: 80, left: 100 }}
      axisTop={{
          orient: 'top',
          tickSize: 10,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'starterra energy',
          legendPosition: 'middle',
          legendOffset: -46
      }}
      axisRight={{
          orient: 'right',
          tickSize: 10,
          tickPadding: 5,
          tickRotation: 0,
          legendPosition: 'middle',
          legendOffset: 76
      }}
      axisBottom={{
          orient: 'bottom',
          tickSize: 10,
          tickPadding: 5,
          tickRotation: 0,
          legendPosition: 'middle',
          legendOffset: 46
      }}
      axisLeft={{
          orient: 'left',
          tickSize: 10,
          tickPadding: 5,
          tickRotation: 0,
          legendPosition: 'middle',
          legendOffset: -76
      }}
    />
  );
};

export default SwarmPlot;
