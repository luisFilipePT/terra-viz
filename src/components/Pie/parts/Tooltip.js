import { formatNumber } from "../../../hooks/utils";

const CustomTooltip = ({
  datum: {
    data: { percentage, value, ...props },
  },
  mode,
}) => (
  <div
    style={{
      padding: 8,
      background: "#333333",
    }}
  >
    <div>
      <text>{`${formatNumber(value, 2)} ${mode.toUpperCase()}`}</text>
      <br />
      <strong>{percentage}%</strong>
    </div>
  </div>
);

export default CustomTooltip;
