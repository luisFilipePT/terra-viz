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

export default CustomTooltip;
