import { animated } from "@react-spring/web";
import { formatNumber } from "../../../hooks/utils";

const ArcLabels = ({ style, label }) => (
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
      {formatNumber(label, 2, true)}
    </text>
  </animated.g>
);

export default ArcLabels;
