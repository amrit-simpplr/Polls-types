export const enum ErrorCode {
  GENERAL_ERROR = 100,
  DATABASE_ERROR = 200,
  BAD_REQUEST_ERROR = 300,
  INVALID_PATH_PARAMS = 301,
  MALFORMATTED_AUTHENTICATION_REQUEST = 400,
  ENTITY_NOT_FOUND = 404,
  CONFLICT = 409,
  CANT_CHANGE_SENDTIME_ALREADY_SENT = 1001,
  CORRUPTED_SURVEY_DATA = 1002,
  SCHEDULED_SURVEY_CANNOT_BE_PAUSED = 1005,
  SURVEY_WITH_PAST_TIME = 1006,
  ACTIVE_SURVEY_CANNOT_BE_DELETED = 1007,
  SURVEY_ALREADY_PARTICIPATED = 1008,
  IN_USE_QUESTION_CANNOT_BE_DELETED = 1009,
  DEFAULT_QUESTION_CANNOT_BE_DELETED = 1010,
  CANT_UPDATE_SURVEYSCHEDULE_WITH_PAST_DATE = 1011,
  IN_USE_QUESTION_CANNOT_BE_DISABLED = 1029,
  IN_USE_THEME_CANNOT_BE_DELETED = 1030,
  IN_USE_THEME_CANNOT_BE_DISABLED = 1031,
  DEFAULT_THEME_CANNOT_BE_DELETED = 1040,
  AI_RESPONSE_ERROR = 1050,
}

export const enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  GONE = 410,
  INTERNAL_SERVER_ERROR = 500,
  CONFLICT = 409,
}

export type Pagination = {
  nextCursor?: number;
  page: number;
  pageSize: number;
};

export type SearchUsersOptions = {
  size: number;
  audienceId?: string | null;
  siteId?: string | null;
  userIds?: string[];
  responseFields?: Array<
    "address" | "work_info" | "permissions" | "user_roles" | "manager"
  >;
  type?: "managers" | "members" | "followers" | null;
  nextPageToken?: string | number | null;
};
