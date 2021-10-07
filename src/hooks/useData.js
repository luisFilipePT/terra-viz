import { useState, useEffect } from "react";
import Papa from "papaparse";

function groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
         const key = keyGetter(item);
         const collection = map.get(key);
         if (!collection) {
             map.set(key, [item]);
         } else {
             collection.push(item);
         }
    });
    return map;
}

export const useData = () => {
  const [data, setData] = useState([]);


  const parseData = ({ data }) => {
    const grouped = groupBy(data, item => item.faction);
    const top100degens = grouped.get('degens').sort((a,b) => a.ste - b.ste).slice(-100);
    const top100lunatics = grouped.get('lunatics').sort((a,b) => a.ste - b.ste).slice(-100);
    const top100interstellars = grouped.get('interstellars').sort((a,b) => a.ste - b.ste).slice(-100);

    setData([...top100degens, ...top100lunatics, ...top100interstellars])
  }


  useEffect(() => {
    Papa.parse(
      "https://raw.githubusercontent.com/starterra/tools/main/ste-staking-results/06102021-stt_staking_users.csv",
      {
        download: true,
        complete: (results) => parseData(results),
        header: true,
      }
    );
  }, []);

  return data;
};
