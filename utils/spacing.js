export const getBlockGap = (value) => {
  if (value !== undefined) {
    let newValue = `${String(value).split("|")[2]}`;

    switch (newValue) {
      case "20":
        return "0.44rem";

      case "30":
        return "0.67rem";

      case "40":
        return "1rem";

      case "50":
        return "1.5rem";

      case "60":
        return "2.25rem";

      case "70":
        return "3.38rem";

      case "80":
        return "5.06rem";

      default:
        return "0";
    }
  }

  return;
};
