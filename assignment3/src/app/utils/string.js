/**
 * 배열 요소에 중복된 값이 있는지 확인하는 합수입니다.
 * @param {Array<string>} arr 중복 검사를 수행할 배열
 * @returns {boolean} 중복값 존재 여부
 */
export const isDuplicate = (arr) => {
  const filtered = new Set(arr);
  return arr.length !== filtered.size;
};
