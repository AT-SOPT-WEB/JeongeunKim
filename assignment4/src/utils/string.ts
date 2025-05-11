export const isStringWithEnglishNumber = (str: string) => {
  const regex = /^[A-Za-z0-9]+$/;
  return regex.test(str);
};

export const isStringWithKoreanEnglishNumber = (str: string) => {
  const regex = /^[가-힣a-zA-Z0-9]+$/;
  return regex.test(str);
};
