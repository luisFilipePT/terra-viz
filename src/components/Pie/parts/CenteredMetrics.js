const CenteredMetrics = ({ dataWithArc, centerX, centerY }) => {
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

export default CenteredMetrics;
