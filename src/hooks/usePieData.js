import { useCSVData } from "./useCSVData";
import { average } from "./utils";

const getStakersPerFaction = (
  degens,
  lunatics,
  interstellars,
  numberOfRecords
) => {
  const degensPercentage = average(degens.length).toFixed(2);
  const lunaticsPercentage = average(lunatics.length).toFixed(2);
  const interstellarsPercentage = average(interstellars.length).toFixed(2);

  return [
    {
      id: "degens",
      label: "Degens",
      value: degens?.length,
      color: "#9F3F8A",
      percentage: degensPercentage,
    },
    {
      id: "lunatics",
      label: "Lunatics",
      value: lunatics?.length,
      color: "#01E4FF",
      percentage: lunaticsPercentage,
    },
    {
      id: "interstellars",
      label: "Interstellars",
      value: interstellars?.length,
      color: "#FF8800",
      percentage: interstellarsPercentage,
    },
  ];
};

const getLpPerFaction = (degens, lunatics, interstellars) => [
  {
    id: "degens",
    label: "Degens",
    value: degens?.reduce((acc, cur) => acc + Number(cur.lp), 0),
    color: "#9F3F8A",
  },
  {
    id: "lunatics",
    label: "Lunatics",
    value: lunatics?.reduce((acc, cur) => acc + Number(cur.lp), 0),
    color: "#01E4FF",
  },
  {
    id: "interstellars",
    label: "Interstellars",
    value: interstellars?.reduce((acc, cur) => acc + Number(cur.lp), 0),
    color: "#FF8800",
  },
];

const getSTTPerFaction = (degens, lunatics, interstellars) => [
  {
    id: "degens",
    label: "Degens",
    value: degens?.reduce((acc, cur) => acc + Number(cur.stt), 0),
    color: "#9F3F8A",
  },
  {
    id: "lunatics",
    label: "Lunatics",
    value: lunatics?.reduce((acc, cur) => acc + Number(cur.stt), 0),
    color: "#01E4FF",
  },
  {
    id: "interstellars",
    label: "Interstellars",
    value: interstellars?.reduce((acc, cur) => acc + Number(cur.stt), 0),
    color: "#FF8800",
  },
];

const getStePerFaction = (degens, lunatics, interstellars) => [
  {
    id: "degens",
    label: "Degens",
    value: degens?.reduce((acc, cur) => acc + Number(cur.ste), 0),
    color: "#9F3F8A",
  },
  {
    id: "lunatics",
    label: "Lunatics",
    value: lunatics?.reduce((acc, cur) => acc + Number(cur.ste), 0),
    color: "#01E4FF",
  },
  {
    id: "interstellars",
    label: "Interstellars",
    value: interstellars?.reduce((acc, cur) => acc + Number(cur.ste), 0),
    color: "#FF8800",
  },
];

export const usePieData = () => {
  const dataToParse = useCSVData();

  const degens = dataToParse?.filter((data) => data.faction === "degens");
  const lunatics = dataToParse?.filter((data) => data.faction === "lunatics");
  const interstellars = dataToParse?.filter(
    (data) => data.faction === "interstellars"
  );

  const sttPerFaction = getSTTPerFaction(degens, lunatics, interstellars);
  const lpPerFaction = getLpPerFaction(degens, lunatics, interstellars);
  const stePerFaction = getStePerFaction(degens, lunatics, interstellars);
  const stakersPerFaction = getStakersPerFaction(
    degens,
    lunatics,
    interstellars,
    dataToParse.length
  );

  return {
    stakers: stakersPerFaction,
    lp: lpPerFaction,
    stt: sttPerFaction,
    ste: stePerFaction,
  };
};
