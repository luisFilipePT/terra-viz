import { ResponsivePie } from "@nivo/pie";
import { usePieData } from "../../hooks/usePieData";
import ArcLabels from "./parts/ArcLabels";
import CenteredMetrics from "./parts/CenteredMetrics";
import Tooltip from "./parts/Tooltip";

const LpPie = () => {
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
      arcLabelsComponent={ArcLabels}
      arcLabelsTextColor={{ from: "color", modifiers: [["darker", 5]] }}
      colors={{ datum: "data.color" }}
      layers={["arcs", "arcLabels", "legends", CenteredMetrics]}
      tooltip={Tooltip}
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

export default LpPie;
