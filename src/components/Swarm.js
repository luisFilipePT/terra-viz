import { ResponsiveSwarmPlot } from "@nivo/swarmplot";
import { useSwarmData } from "../hooks/useSwarmData";

const SwarmPlot = () => {
  const swarmData = useSwarmData();

  return (
    <ResponsiveSwarmPlot
      theme={{
        background: "transparent",
        textColor: "#ffee00",
        fontSize: 14,
        axis: {
          domain: {
            line: {
              stroke: "#777777",
              strokeWidth: 0,
            },
          },
          ticks: {
            line: {
              stroke: "#777777",
              strokeWidth: 0,
            },
          },
        },
        grid: {
          line: {
            stroke: "#ffee00",
            strokeWidth: 1,
          },
        },
        legends: {
          text: { fontSize: "20px" },
        },
      }}
      layout="horizontal"
      enableGridX={false}
      enableGridY={false}
      gap={20}
      data={swarmData}
      groups={["degens", "lunatics", "interstellars"]}
      groupBy="faction"
      identity="staker"
      value="ste"
      valueScale={{ type: "linear", min: 5000, max: 70000, reverse: false }}
      size={{ key: "ste", values: [250, 10000], sizes: [2, 10] }}
      simulationIterations={120}
      colors={["#c74dad", "#00e5ff", "#fc8600"]}
      borderColor={{ from: "color", modifiers: [["darker", 0.6]] }}
      margin={{ top: 80, right: 100, bottom: 80, left: 100 }}
      axisTop={{
        orient: "top",
        tickSize: 10,
        tickPadding: 5,
        tickRotation: 0,
        legend: "starterra energy - Top 100 / faction",
        legendPosition: "middle",
        legendOffset: -46,
      }}
      axisRight={null}
      axisLeft={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 10,
        tickPadding: 5,
        tickRotation: 0,
        legendPosition: "middle",
        legendOffset: 46,
      }}
      tooltip={({ data: { ste } }) => (
        <div
          style={{
            padding: 8,
            background: "#333333",
          }}
        >
          <div>
            <text>{`${ste} STE`}</text>
            <br />
          </div>
        </div>
      )}
    />
  );
};

export default SwarmPlot;
