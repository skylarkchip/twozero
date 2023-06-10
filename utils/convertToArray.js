import { assignItemId } from "./assignItemId";

export const converToArray = (data, preText) => {
  const arr = Object.entries(data)
    .filter(([key]) => key.startsWith(preText))
    .reduce((acc, [key, value]) => {
      const index = key.split("_")[1];
      if (!acc[index]) {
        acc[index] = {};
      }
      const field = key.split("_").slice(2).join("_");
      acc[index][field] = value;
      return acc;
    }, []);

  return assignItemId(arr);
};
