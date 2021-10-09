import { useCSVData } from "./useCSVData";

export const usePieData = () => {
  const dataToParse = useCSVData();

  const degens = dataToParse?.filter((data) => data.faction === "degens");
  const lunatics = dataToParse?.filter((data) => data.faction === "lunatics");
  const interstellars = dataToParse?.filter(
    (data) => data.faction === "interstellars"
  );

  const average = (amount) => (amount * 100) / dataToParse.length;

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
