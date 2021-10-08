import { useCSVData } from "./useCSVData";

export const usePieData = () => {
  const dataToParse = useCSVData();
  const degens = dataToParse?.filter((data) => data.faction === "degens");
  const lunatics = dataToParse?.filter((data) => data.faction === "lunatics");
  const interstellars = dataToParse?.filter(
    (data) => data.faction === "interstellars"
  );

  return [
    {
      id: "degens",
      label: "Degens",
      value: degens?.length + 1,
      color: "#9F3F8A",
    },
    {
      id: "lunatics",
      label: "Lunatics",
      value: lunatics?.length + 1,
      color: "#01E4FF",
    },
    {
      id: "interstellars",
      label: "Interstellars",
      value: interstellars?.length + 1,
      color: "#FF8800",
    },
  ];
};
