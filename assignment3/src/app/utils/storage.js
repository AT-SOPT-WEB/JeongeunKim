/**
 * localStorage에 항목을 저장합니다.
 *
 * @param {string} id - 저장할 키
 * @param {Array} list - 저장할 배열
 */
export const setLocalStorage = (id, list) => {
  localStorage.setItem(id, JSON.stringify(list));
};

/**
 * localStorage에서 항목을 가져옵니다.
 * 항목이 없으면 빈 배열을 반환합니다.
 *
 * @param {string} id - 가져올 항목의 키입
 * @returns {Array} 찾는 항목을 반환하고 항목이 없으면 빈 배열을 반환합니다.
 */
export const getLocalStorage = (id) => {
  const list = localStorage.getItem(id);

  return list ? JSON.parse(list) : [];
};

/**
 * localStorage에서 특정 인덱스의 값을 삭제합니다.
 *
 * @param {string} id - 배열이 저장된 키
 * @param {number} deleteItemIndex - 삭제할 항목의 인덱스
 */
export const deleteLocalStorage = (id, deleteItemIndex) => {
  const list = getLocalStorage(id);
  const updatedList = list.filter((_, index) => index !== deleteItemIndex);
  setLocalStorage(id, updatedList);
};

/**
 * localStorage에 새로운 항목을 추가합니다.
 *
 * @param {string} id - 저장할 항목의 키
 * @param {Object} newItem - 추가할 항목
 */
export const addLocalStorage = (id, newItem) => {
  const list = getLocalStorage(id);
  const deleteAlreadyExist = list.filter((item) => item !== newItem);
  const updatedList = [newItem, ...deleteAlreadyExist];

  setLocalStorage(id, updatedList);
};
