/**
 * GitHub 사용자 정보를 API에서 가져옵니다.
 *
 * @async
 * @function
 * @param {Object} params
 * @param {string} params.user - 검색할 사용자 id
 * @param {Function} params.setUserInfo - 사용자 정보 저장 함수
 * @returns {Promise<void>}
 */
export const getUserInfo = async (userId) => {
  try {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return data;
  } catch {
    return null;
  }
};
