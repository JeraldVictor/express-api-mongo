/**
 * @type {{ ADMIN: "ADMIN"; USER: "USER"} as const}
 */
export const UserRolesEnum = {
  ADMIN: "ADMIN",
  USER: "USER",
};
export const AvailableUserRoles = Object.values(UserRolesEnum);

/**
 * @type {{ DOB: "DOB"; EMAIL: "EMAIL"} as const}
 */
export const LoginTypeEnum = {
  DOB: "DOB",
  EMAIL: "EMAIL",
};
export const AvailableLoginTypes = Object.values(LoginTypeEnum);

export const USER_TEMPORARY_TOKEN_EXPIRY = 20 * 60 * 1000; // 20 minutes
