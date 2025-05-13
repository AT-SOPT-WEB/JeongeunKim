export const isStringWithEnglishNumber = (str: string) => {
  const regex = /^[A-Za-z0-9]+$/;
  return regex.test(str);
};

export const isStringWithKoreanEnglishNumber = (str: string) => {
  const regex = /^[가-힣a-zA-Z0-9]+$/;
  return regex.test(str);
};

export const createQueryParamUrl = ({
  url,
  params,
}: {
  url: string;
  params: string;
}) => {
  const queryParams = new URLSearchParams(params);
  queryParams.append("keyword", params);

  return `${url}?${queryParams.toString()}`;
};

export const createPathUrl = (links: Array<string>) => {
  return links
    .map((link) => link.replace(/^\/+|\/+$/g, ""))
    .filter(Boolean)
    .join("/")
    .replace(/^/, "/");
};
