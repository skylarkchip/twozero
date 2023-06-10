export const stripHtml = (value) => {
  let stringValue = value;
  let replacedValue = stringValue.replaceAll(/<\/?[^>]+(>|$)/gi, "");

  return replacedValue;
};
