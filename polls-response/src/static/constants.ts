import { PollState } from "@simpplr/polls-db-shared-npm/prisma/generated/client";

export const DEFAULT_ROUTE = "/my-polls";

export const DEFAULT_LANGUAGE = "en-US";

export const VAULT_PATH = {
  HARNESS_KEY: `infra/${process.env.ENVIRONMENT?.toLowerCase()}/static/harness`,
  REDIS: `infra/${process.env.ENVIRONMENT?.toLowerCase()}/static/redis/zeus`,
  AUTHORIZER_KEY: `employee_listening/${process.env.ENVIRONMENT?.toLowerCase()}/static/zeus`,
  DB_CREDS: `infra/${process.env.ENVIRONMENT?.toLowerCase()}/static/db/listener_suite`,
  B2B_AUTHORIZER_SECRET: `employee_listening/${process.env.ENVIRONMENT?.toLowerCase()}/static/resource_ids`,
  JWT_KEY: `employee_listening/${process.env.ENVIRONMENT?.toLowerCase()}/static/keys`,
  REALTIME_SYNC_DB: `infra/${process.env.ENVIRONMENT?.toLowerCase()}/static/db/realtime_sync_db`,
  SALESFORCE_INTEGRATION: `employee_listening/${process.env.ENVIRONMENT?.toLowerCase()}/static/db/salesforce_integration`,
  SALESFORCE_CLIENT: `employee_listening/${process.env.ENVIRONMENT?.toLowerCase()}/static/sf`,
  STATIC_KEYS: `infra/${process.env.ENVIRONMENT?.toLowerCase()}/static/keys`,
  AZURE_CREDS: `employee_listening/${process.env.ENVIRONMENT?.toLowerCase()}/static/azure`,
};

export const TRANSACTION_CONFIG = {
  maxWait: 20000,
  timeout: 20000,
};

export const AUTH_HEADERS: { [key: string]: string } = {
  SMTIP_TOKEN: "x-smtip-token",
  SMTIP_ORG_ID: "x-smtip-tid",
  SMTIP_USER_ID: "x-smtip-uid",
  SMTIP_USER_INFO: "x-smtip-user-info",
  SMTIP_USER_ROLE: "x-smtip-tenant-user-role",
  SMTIP_PERMISSIONS: "x-smtip-has-permissions",
  X_SMTIP_SF_PEOPLEID: "x-smtip-sf-peopleid",
  SMTIP_APP: "x-smtip-app",
  API_KEY: "x-api-key",
};

export const USER_ROLES = {
  APP_MANAGER: "3c774e6c-02b6-4b61-9d7d-03d083540136",
};

export const API_ORIGIN: { [key: string]: string } = {
  WEB: "web",
  MOBILE: "mobile",
};

export const REDIS_KEYS = {
  SAMPLE_KEY: "1",
  POLL_DETAILS: (pollId: Uint8Array) => `polls:desc:${pollId}`,
  POLL_PARTICIPATION: (pollId: Uint8Array, userId: Uint8Array) =>
    `polls:part:${userId}:${pollId}`,
  POLL_ANALYTICS_TOTAL_RESPONSES: (pollId: Uint8Array) =>
    `polls:poll_analytics:${pollId}:total_responses`,
  POLL_PARTICIPATION_USER_SET: (userId: Uint8Array) =>
    `polls:user_set:${userId}`,
  POLL_ANALYTICS_OPTIONS: (
    pollId: Uint8Array,
    questionId: Uint8Array,
    option: Uint8Array
  ) => `polls:poll_analytics:${pollId}:${questionId}:${option}`,
  USER_POLLS: (userId: Uint8Array) => `polls:user_polls:${userId}`,
};

export const LUA_REDIS_SCRIPTS = {
  SUBMIT_POLL: "submitPoll",
  UNDO_POLL: "undoPoll",
};

export const pollMessage = {
  UNDO_RESPONSE: "response deleted successfully",
  ALREADY_RESPONDED: "User has already responded to this poll.",
  NOT_A_RECIPIENT: "User is not a recipient of this poll.",
  POLL_NOT_ACTIVE: "Poll is not in active state.",
  SUBMIT_RESPONSE: "Response submitted successfully",
  POLL_NOT_FOUND_OR_NOT_ACTIVE: "Poll not found or not active",
  POLL_NOT_FOUND: "Poll not found",
  POLL_CLOSED_NOT_ACCEPTING_RESPONSE: "This poll has closed and is no longer accepting responses."
};

export const IS_LOCAL =
  process.env.IS_OFFLINE === "true" ||
  process.env.IS_LOCAL === "true" ||
  process.env.ENVIRONMENT === "ci";

export const HEADER = {
  ACCOUNT_ID: "x-smtip-tid",
  USER_ID: "x-smtip-uid",
  HOST: "x-smtip-host",
  ROLE: "x-smtip-tenant-user-role",
  ACA_ORIGIN: "Access-Control-Allow-Origin",
  ACA_CREDENTIALS: "Access-Control-Allow-Credentials",
  ORIGIN: "origin",
  REFERER: "referer",
  SB_ID: "x-smtip-sbid",
  CONTENT_TYPE: "Content-Type",
  CONTENT_TYPE_SMALL: "content-type",
  CONTENT_DISPOSITION: "Content-Disposition",
  CONTENT_DISPOSITION_SMALL: "content-disposition",
  ACE_HEADERS: "Access-Control-Expose-Headers",
  SIMPPLR_API_KEY: "simpplr-api-key",
};
