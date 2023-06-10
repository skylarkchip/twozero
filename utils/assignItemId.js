import { v4 as uuid } from "uuid";

export const assignItemId = (items) => {
  return items.map((item) => ({
    ...item,
    id: uuid(),
  }));
};
