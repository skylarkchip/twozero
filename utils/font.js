export const getFontSizeForHeadingBase = (level) => {
  // console.log(window.screen.width)
  const fontSizeMap = {
    1: "3xl",
    2: "2xl",
    3: "xl",
    4: "lg",
    5: "md",
    6: "sm",
  };

  return `${fontSizeMap[level] || ""}`;
};

export const getFontSizeForHeadingMd = (level) => {
  const fontSizeMap = {
    1: "4xl",
    2: "3xl",
    3: "2xl",
    4: "xl",
    5: "lg",
    6: "md",
  };

  return `${fontSizeMap[level] || ""}`;
};

export const getFontSizeForHeadingLg = (level) => {
  const fontSizeMap = {
    1: "5xl",
    2: "4xl",
    3: "3xl",
    4: "2xl",
    5: "xl",
    6: "lg",
  };

  return `${fontSizeMap[level] || ""}`;
};
