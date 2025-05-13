export const VALID_ID = {
  MIN: 8,
  MAX: 20,
};

export const SIGNUP_STEP = {
  ID: "ID",
  PASSWORD: "PASSWORD",
  NICKNAME: "NICKNAME",
} as const;

export const VALID_PASSWORD = {
  MIN: 8,
  MAX: 20,
};

export const VALID_NICKNAME = {
  MIN: 1,
  MAX: 20,
};

export const ERROR_MESSAGE = {
  VALID_ID_ERROR: "아이디는 대소문자와 영어로 이루어져야 해요.",
  VALID_PASSWORD_ERROR: "비밀번호는 대소문자와 영어로 이루어져야 해요.",
  BLANK_NOT_ALLOW: "공백은 존재할 수 없어요.",
  VALID_NICKNAME_ERROR: "닉네임은 한글, 영어, 숫자만 가능해요",
  INCONSISTENCY_PASSWORD: "비밀번호 확인에 실패했어요.",
};
