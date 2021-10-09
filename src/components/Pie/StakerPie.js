import { ResponsivePie } from "@nivo/pie";
import { animated } from "@react-spring/web";
import { usePieData } from "../../hooks/usePieData";

const CenteredMetric = ({ dataWithArc, centerX, centerY }) => {
  const total = dataWithArc.reduce((acc, cur) => acc + cur.value, 0);

  return (
    <text
      x={centerX}
      y={centerY}
      textAnchor="middle"
      dominantBaseline="central"
      style={{
        fill: "white",
        fontSize: "28px",
        fontWeight: 600,
      }}
    >
      {total}
    </text>
  );
};

const CustomArcLabels = ({ style, label }) => (
  <animated.g transform={style.transform} style={{ pointerEvents: "none" }}>
    <text
      textAnchor="middle"
      dominantBaseline="central"
      fill={style.textColor}
      style={{
        fontSize: 16,
        fontWeight: 800,
      }}
    >
      {label}
    </text>
  </animated.g>
);

const CustomTooltip = ({
  datum: {
    data: { percentage },
  },
}) => (
  <div
    style={{
      padding: 8,
      background: "#333333",
    }}
  >
    <strong>{percentage}%</strong>
  </div>
);

const StakerPie = () => {
  const data = usePieData();

  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      enableArcLinkLabels={false}
      cornerRadius={10}
      activeOuterRadiusOffset={4}
      arcLabelsSkipAngle={10}
      arcLabelsComponent={CustomArcLabels}
      arcLabelsTextColor={{ from: "color", modifiers: [["darker", 5]] }}
      colors={{ datum: "data.color" }}
      layers={["arcs", "arcLabels", "legends", CenteredMetric]}
      tooltip={CustomTooltip}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 60,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#FFFFFF",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
        },
      ]}
    />
  );
};

export default StakerPie;
