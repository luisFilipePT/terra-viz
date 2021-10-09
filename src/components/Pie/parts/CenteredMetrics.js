import { formatNumber } from "../../../hooks/utils";

const CenteredMetrics = ({ dataWithArc, centerX, centerY }) => {
  const total = dataWithArc.reduce((acc, cur) => acc + Number(cur.value), 0);

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
      {formatNumber(total, 2, true)}
    </text>
  );
};

export default CenteredMetrics;
