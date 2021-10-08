import { ResponsivePie } from "@nivo/pie";
import { animated } from "@react-spring/web";
import { usePieData } from "../hooks/usePieData";

const CenteredMetric = (props) => {
  const { dataWithArc, centerX, centerY } = props;
  let total = 0;
  dataWithArc.forEach((datum) => {
    total += datum.value;
  });

  return (
    <text
      x={centerX}
      y={centerY}
      textAnchor="middle"
      dominantBaseline="central"
      style={{
        fill: "white",
        fontSize: "32px",
        fontWeight: 600,
      }}
    >
      {total}
    </text>
  );
};

const CustomArcLabels = ({ style, datum, label }) => {
  console.log(datum);
  return (
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
};

const Pie = () => {
  const data = usePieData();

  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={10}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#FFFFFF"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsComponent={CustomArcLabels}
      arcLabelsTextColor={{ from: "color", modifiers: [["darker", 5]] }}
      colors={{ datum: "data.color" }}
      layers={["arcs", "arcLabels", "arcLinkLabels", "legends", CenteredMetric]}
      theme={{
        labels: {
          text: { fontSize: "16px", fontFamily: "Raleway" },
        },
      }}
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

export default Pie;
