/**
 * 중요도 레벨
 * @typedef {1|2|3} Priority
 */

/**
 * 투두 항목
 * @typedef {Object} Todo
 * @property {number} id - 투두 항목의 고유 id
 * @property {string} title - 투두 항목의 제목
 * @property {boolean} completed - 항목 완료 여부
 * @property {Priority} priority - 항목의 중요도 레벨
 */

export const Priority = "Priority";
export const Todo = "Todo";
