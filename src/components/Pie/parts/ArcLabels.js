import { animated } from "@react-spring/web";

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
      {label}
    </text>
  </animated.g>
);

export default ArcLabels;
