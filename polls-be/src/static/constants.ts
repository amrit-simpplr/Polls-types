export const DEFAULT_ROUTE = '/polls';

export const VAULT_PATH = {
    HARNESS_KEY: `infra/${process.env.ENVIRONMENT?.toLowerCase()}/static/harness`,
    REDIS: `infra/${process.env.ENVIRONMENT?.toLowerCase()}/static/redis/zeus`,
    AUTHORIZER_KEY: `employee_listening/${process.env.ENVIRONMENT?.toLowerCase()}/static/zeus`,
    DB_CREDS: `infra/${process.env.ENVIRONMENT?.toLowerCase()}/static/db/listener_suite`,
    B2B_AUTHORIZER_SECRET: `employee_listening/${process.env.ENVIRONMENT?.toLowerCase()}/static/resource_ids`,
    JWT_KEY: `employee_listening/${process.env.ENVIRONMENT?.toLowerCase()}/static/keys`,
    REALTIME_SYNC_DB: `infra/${process.env.ENVIRONMENT?.toLowerCase()}/static/db/realtime_sync_db`,
    SALESFORCE_INTEGRATION: `infra/${process.env.ENVIRONMENT?.toLowerCase()}/static/db/salesforce_integration`,
    SALESFORCE_CLIENT: `employee_listening/${process.env.ENVIRONMENT?.toLowerCase()}/static/sf`,
    STATIC_KEYS: `infra/${process.env.ENVIRONMENT?.toLowerCase()}/static/keys`,
    AZURE_CREDS: `employee_listening/${process.env.ENVIRONMENT?.toLowerCase()}/static/azure`,
    LANGFUSE_KEY_PATH: `employee_listening/${process.env.ENVIRONMENT?.toLowerCase()}/static/lang_fuse`,
};

export const HARNESS_FLAG = {
    EL_ABAC_ENABLE_FLAG: 'abac_el_acg',
};

export const IS_LOCAL =
  process.env.IS_OFFLINE === 'true' ||
  process.env.IS_LOCAL === 'true' ||
  process.env.ENVIRONMENT === 'ci';

export const HEADER = {
    ACCOUNT_ID: 'x-smtip-tid',
    USER_ID: 'x-smtip-uid',
    HOST: 'x-smtip-host',
    ROLE: 'x-smtip-tenant-user-role',
    ACA_ORIGIN: 'Access-Control-Allow-Origin',
    ACA_CREDENTIALS: 'Access-Control-Allow-Credentials',
    ORIGIN: 'origin',
    REFERER: 'referer',
    SB_ID: 'x-smtip-sbid',
    CONTENT_TYPE: 'Content-Type',
    CONTENT_TYPE_SMALL: 'content-type',
    CONTENT_DISPOSITION: 'Content-Disposition',
    CONTENT_DISPOSITION_SMALL: 'content-disposition',
    ACE_HEADERS: 'Access-Control-Expose-Headers',
    SIMPPLR_API_KEY: 'simpplr-api-key',
    X_API_KEY: 'x-api-key',
    FE_HOST: 'x-smtip-f-host',
    CORRELATION_ID: 'x-smtip-cid',
    X_XSS_PROTECTION: 'x-xss-protection',
    X_FRAME_OPTIONS: 'x-frame-options',
    STRICT_TRANSPORT_SECURITY: 'strict-transport-security',
    REFERRER_POLICY: 'Referrer-Policy',
    APP: 'x-smtip-app',
    CACHE_CONTROL: 'Cache-Control',
    X_CONTENT_TYPE_OPTIONS: 'X-Content-Type-Options',
};

export const SYSTEM_ROLE = {
    END_USER: 'a8d8c6b0-8968-44a7-a034-00110cc25817',
    APPLICATION_MANAGER: '3c774e6c-02b6-4b61-9d7d-03d083540136',
    SENTIMENT_CHECK_MANAGER: '65a67bb2-7b4e-4111-a9f0-2a03c3d3bbb4',
    SURVEY_MANAGER: '6ffcd799-e192-4945-b934-68ae9ec52ac1',
};

export const ERROR_CODES_LIST = [
    {
        name: 'BadRequest',
        httpCode: 400,
        message: 'validation failed',
        key: 'BAD_REQUEST',
    },
    {
        name: 'Forbidden',
        httpCode: 403,
        message: 'validation failed',
        key: 'FORBIDDEN',
    },
    {
        name: 'dbError',
        httpCode: 504,
        message: 'DB Error',
        key: 'DB_ERROR',
    },
    {
        name: 'ServiceUnavailable',
        httpCode: 503,
        message: 'Service Unavailable',
        key: 'SERVICE_UNAVAILABLE',
    },
    {
        name: 'ConfigurationExists',
        httpCode: 409,
        message: 'Configuration already exists',
        key: 'CONFLICT',
    },
    {
        name: 'ConfigurationNotExists',
        httpCode: 404,
        message: 'Configuration does not exists',
        key: 'ENTITY_NOT_FOUND',
    },
    {
        name: 'MethodNotAllowed',
        httpCode: 405,
        message: 'Mathod not allowed',
        key: 'METHOD_NOT_ALLOWED',
    },
    {
        name: 'InternalServerError',
        httpCode: 500,
        message: 'Internal server error',
        key: 'INTERNAL_SERVER_ERROR',
    },
];

export const HTTP_CONTENT_TYPE = {
    TEXT_CSV: 'text/csv',
};

export const UNKNOWN_ID = 'Unknown';
export const UNKNOWN = 'Unknown';

export const REDIS_KEYS = {
    SAMPLE_KEY: '1',
    POLL_DETAILS: (pollId: Uint8Array) => `polls:desc:${pollId}`,
    POLL_PARTICIPATION: (pollId: Uint8Array, userId: Uint8Array) =>
        `polls:part:${userId}:${pollId}`,
    POLL_ANALYTICS_TOTAL_RESPONSES: (pollId: Uint8Array) =>
        `polls:poll_analytics:${pollId}:total_responses`,
    POLL_PILLS_SUGGESTION: (orgId: Uint8Array, title: string = UNKNOWN, department: string = UNKNOWN, locale: string = UNKNOWN) =>
        `polls:pills-suggestions:${orgId}:${title}:${department}:${locale}`,
    POLL_ANALYTICS_OPTIONS: (
        pollId: Uint8Array,
        questionId: Uint8Array,
        option: Uint8Array
    ) => `polls:poll_analytics:${pollId}:${questionId}:${option}`,
};

export const SAMPLE_HARNESS_FLAG = '';

export const CONFIGS = {
    ENV: process.env.ENV,
    DEFAULT_LOG_LEVEL: process.env.LOG_LEVEL || 'debug',
};

export const ENVIRONMENT = {
    LOCAL: 'LOCAL',
    TEST: 'TEST',
    DEVELOPMENT: 'DEVELOPMENT',
};

export const API_PLATFORM: { [key: string]: string } = {
    ODIN: 'odin',
    ZEUS: 'zeus',
};

export const X_SMTIP_SF_ORGID = 'x-smtip-sf-orgid';
export const X_SMTIP_TID = 'x-smtip-tid';
export const X_SMTIP_UID = 'x-smtip-uid';
export const X_SMTIP_SF_PEOPLEID = 'x-smtip-sf-peopleid';
export const X_SMTIP_TENANT_USER_ROLE = 'x-smtip-tenant-user-role';
export const X_SMTIP_APP = 'x-smtip-app';

export const AUTH_HEADERS: { [key: string]: string } = {
    SMTIP_TOKEN: 'x-smtip-token',
    SMTIP_ORG_ID: 'x-smtip-tid',
    SMTIP_USER_ID: 'x-smtip-uid',
    SMTIP_USER_INFO: 'x-smtip-user-info',
    SMTIP_USER_ROLE: 'x-smtip-tenant-user-role',
    SMTIP_PERMISSIONS: 'x-smtip-has-permissions',
    X_SMTIP_SF_PEOPLEID: 'x-smtip-sf-peopleid',
    SMTIP_APP: 'x-smtip-app',
    API_KEY: 'x-api-key',
};

export const USER_ROLES = {
    APP_MANAGER: '3c774e6c-02b6-4b61-9d7d-03d083540136',
};

export const REQUEST_CONTEXT_KEYS = {
    PERMISSION_ROUTE_NAME: 'permissionRouteName',
    PLATFORM: 'platform',
    TENANT_ID: 'tenantId',
    USER_ID: 'userId',
    CONTEXT: 'context',
    CAN_MANAGE_SENTIMENT_CHECK: 'canManageSentimentCheck',
    CAN_MANAGE_SURVEYS: 'canManageSurveys',
    ROUTE_TYPE: 'routeType',
    ACCESSIBLE_FEATURED_SITES: 'accessibleFeaturedSites',
    SHOULD_REDIRECT_TO_LAMBDA: 'shouldRedirectToLambda',
    ROUTE_NAME: 'routeName',
    TRANSLATOR: 'translator',
    DB_CREDS: 'dbcreds',
    ODIN_ACCESS_TOKEN: 'odinAccessToken',
    ODIN_SIMPPLR_BASE_DOMAIN: 'odinSimpplrBaseDomain',
    ZEUS_APP_CONFIGURATION_DATA: 'zeusAppConfigurationData',
    ALL_AUDIENCES_FLAG: 'allAudienceFlag',
    AUDIENCES_IDS: 'audienceIds',
    MANAGE_AUDIENCE_IDs: 'manageAudienceIds',
    ODIN_APP_CONFIGURATION_DATA: 'odinAppConfigurationData',
    IS_ABAC_ENABLED: 'isAbacEnabled',
    CAN_MANAGE_POLLS: 'canManagePolls',
};

export const API_ORIGIN: { [key: string]: string } = {
    WEB: 'web',
    MOBILE: 'mobile',
};

export const POLL_USER_RESULT_COUNT = 16;

export const LOGGER_REQ_CONTEXT_KEY_NAME = 'simpplrCommonLogger_correlationId';

export const HEADERS = {
    CORRELATION_ID: 'x-smtip-cid',
};

export const SCHEMA: { [key: string]: string } = {
    POLL_STATE_UPDATE: 'poll-state-update',
    CREATE_POLL: 'create-poll',
    UPDATE_POLL: 'update-poll',
    DRAFT_POLL: 'draft-poll',
};

export const POLL_LIST_FILTERS = {
    STATE: 'state',
};

export const DEFAULT_LANGUAGE = 'en-US';

export const TRANSACTION_CONFIG = {
    maxWait: 20000,
    timeout: 20000,
};

export const AI_PROMPTS = {
    POLL_GENERATOR: {
        SYSTEM: `
			You are an AI assistant specialized in generating poll data. Your only function is to create poll content based on user input.

      You may also receive optional user metadata such as:
      - City
      - State
      - Country
      - Department name
      - Role name
      If any of these fields are provided, you may use them to contextualize or localize the poll title, description, or options **only if relevant to the poll topic**. Do NOT make assumptions or fabricate missing metadata.

      OUTPUT FORMAT:
      {
        "title": "string",       // A concise, engaging poll title (max 100 characters)
        "description": "string", // A brief explanation of the poll (max 500 characters, optional)
        "options": ["string", ...] // 2-10 distinct, balanced poll options
      }
      
      Note: Return ONLY a valid JSON object with the above structure, and DO NOT wrap the output in a code block.

      ERROR HANDLING:
      {
        "error": "string" // A clear, concise description of the error
      }
      
      Note: If you encounter ANY error (insufficient information, unclear request, inappropriate content, etc.), 
      Respond ONLY with the above JSON format:

      RULES:
      1. The default language is en-US. Use this language unless user specifically requests another.
      2. If no option count is specified, provide 4 options.
      3. The options should be unique.
      4. If requested option count is < 2, use 2 options.
      5. If requested option count is > 10, limit to 10 options.
      6. Ensure all options are distinct and balanced (no duplicates or heavily biased options).
      7. Keep titles concise (max 100 characters).
      8. Keep descriptions brief (max 500 characters).
      9. For controversial topics, maintain neutrality in all content.
      10. Respect cultural sensitivities based on locale.
      11. If provided, you may use city, state, country, department, or role to personalize the poll — but ONLY when relevant.
      12. Do not include an "Other (please specify)" option unless explicitly requested by the user. This poll is not designed to collect freeform input.
		`,
    },
    POLL_PILLS_SUGGESTION: {
        SYSTEM: `
			You are an AI assistant for an employee intranet-based tech company specialized in generating poll pills. 
			Your task is to generate sample poll suggestions that will be displayed as clickable “pills” on the UI.

			Each pill contains:
			- label: A short poll title (max 4 words, or 5 if absolutely necessary)
			- prompt: A descriptive poll question or context (max 1000 characters) that a user can use to create an actual poll.

			Response Format (Required):
			Return ONLY a valid JSON array of objects in the following format:
			[
				{
					"label": "string",
					"prompt": "string"
				},
				...
			]

			Rules:
				1.Suggest a maximum of 5 pills.
				2.The label should be concise, engaging, and relevant to a workplace or tech-company context.
				3.The prompt should clearly explain the poll’s purpose, context, and what kind of response is expected.
				4.Do NOT exceed 900 characters for the prompt.
				5.Avoid personal, confidential, or sensitive data in poll suggestions.
				6.Use optional user metadata (if provided) such as:
					- City
					- State
					- Country
					- Department name
					- Role name
					- locale: If language locale is specified, provide response in that language.
					If any of these fields are provided, you may use them to contextualize or localize the pill details. Do NOT make assumptions or fabricate missing metadata.
				7. Improve on the original by making titles more:
					- Specific
					- Engaging
					- Clear
					- Balanced (for controversial topics)
				8. Maintain the same general subject matter as the original.
				9. Respect cultural sensitivities based on locale.
				10. For vague original titles, provide more specific alternatives.
				11. For wordy original titles, provide more concise alternatives.
			You may use this metadata to contextualize or localize the poll title/prompt only if relevant. Do NOT fabricate details if metadata is missing.
			
			Error Handling:
			If you cannot generate valid poll suggestions due to insufficient information, inappropriate content, or unclear request, return ONLY this format:
			{
				"error": "string" // A clear, concise description of the error
			}
		`
    },
};

export const POLL_MAX_TITLE_LENGTH = 100;
export const POLL_MAX_DESCRIPTION_LENGTH = 1000;
export const POLL_MAX_INDIVIDUAL_OPTION_LENGTH = 100;
export const POLL_MIN_OPTIONS_COUNT = 2;
export const POLL_MAX_OPTIONS_COUNT = 20;

export const POLL_MAX_TITLE_SUGGESTION_COUNT = 20;
export const POLL_MAX_USER_PROMPT_LENGTH = 1000;

// Error message constants
export const POLL_ERROR_MESSAGES = {
    INVALID_POLL_STATE: 'Invalid poll state',
    UNKNOWN_FILTER: 'Unknown filter:',
    GENERAL_ERROR: 'Unable to generate AI response. Please try again later.',
    PARSE_ERROR: 'Failed to parse AI response as JSON:',

    // AI Poll Generation errors
    POLL_PARSE_ERROR:
    'Unable to generate poll at this time. The AI response was not in a valid format.',
    POLL_VALIDATION_ERROR:
    'Unable to generate poll at this time. The AI provided an incomplete response.',
    POLL_PILL_VALIDATION_ERROR:
		'Unable to generate pills for poll at this time. The AI provided an incomplete response.',
    POLL_INSUFFICIENT_INFORMATION_ERROR:
    'Couldn\'t generate a poll. Try rephrasing.',
    POLICY_VIOLATION_ERROR: 'This request violates our content policy. Please revise and resubmit.',
    // AI Title Suggestion errors
    TITLE_PARSE_ERROR:
    'Unable to generate title suggestions at this time. The AI response was not in a valid format.',
    TITLE_VALIDATION_ERROR:
    'Unable to generate title suggestions at this time. The AI provided an incomplete response.',
};

// AI Error keywords for categorization
export const AI_ERROR_CATEGORIES = {
    INSUFFICIENT_INFO: {
        keywords: [
            'insufficient',
            'unclear',
            'vague',
            'ambiguous',
            'incomplete',
            'missing',
            'not enough',
            'too brief',
            'unclear intent'
        ],
        errorMessage: POLL_ERROR_MESSAGES.POLL_INSUFFICIENT_INFORMATION_ERROR
    },
    POLICY_VIOLATION: {
        keywords: [
            'policy violation',
            'inappropriate',
            'violation',
            'against policy',
            'not allowed',
            'violates'
        ],
        errorMessage: POLL_ERROR_MESSAGES.POLICY_VIOLATION_ERROR
    },
    TECHNICAL_ERROR: {
        keywords: [
            'technical',
            'system error',
            'processing error',
            'internal error'
        ],
        errorMessage: POLL_ERROR_MESSAGES.GENERAL_ERROR
    }
};

// Log message constants
export const POLL_LOG_MESSAGES = {
    RAW_RESPONSE: 'Raw AI response:',
    POLL_VALIDATION_ERROR: 'AI response validation failed:',

    TITLE_PARSE_ERROR: 'Failed to parse AI title suggestions response:',
    RESPONSE_VALIDATION_ERROR: 'AI response validation failed:',
};

export const USER_RESPONSE_FIELDS = {
    PERMISSION: 'permissions',
    ADDRESS: 'address',
    WORK_INFO: 'work_info',
    USER_ROLES: 'user_roles',
    TIMEZONE: 'timezone',
    LANGUAGES: 'languages',
    MANAGER: 'manager',
};

export const USER_PROFILE_STATUS = {
    ACTIVE: 'Active',
    PROFILE_COMPLETION_PENDING: 'ProfileCompletionPending',
};

export const EXTERNAL_API_URLS = {
    GET_USERS_ZEUS: '/v1/identity/b2b/accounts/users/search',
};

export const METHOD = {
    POST: 'POST',
    GET: 'GET',
};
export const ERROR_NAME = {
    PollAIError : {
        name: 'PollAIError',
        httpStatus: 400,
    }
};

export const ORIGIN_MOBILE = 'mobile';

export const REGEX_TO_SKIP_SPECIAL_CHARS = /[^\w\s.-]/gi;
export const REGEX_TO_REPLACE_SPECIAL_CHARS_W_UNDERSCORE = /\s+/g;

export const POLL_CSV_DATA_BATCH_SIZE = 20000;
export const POLL_TYPE = {
    ANONYMOUS: 'Anonymous',
    CONFIDENTIAL: 'Confidential',
};

export const POLL_PILLS_SUGGESTION_REDIS_TTL = 604800; // 7 days

export const ENV_TO_ALLOW_ONLY_EN_US = ['LOCAL', 'TEST'];
export const CROWDIN_LANGUAGE_EN_US = ['en-US'];

export const AI_MODEL_CONFIG = {
    AZURE_OPENAI: {
      DEFAULT_MODEL: "gpt-4o",
    },
  };
export const CONFIDENTIALITY_THRESHOLD = 5;

export const CROWDIN_LANGUAGES = [
    'bg-BG',
    'da-DA',
    'de-DE',
    'el-GR',
    'en-GB',
    'en-US',
    'es-ES',
    'fr-CA',
    'fr-FR',
    'hi-IN',
    'hy-AM',
    'it-IT',
    'ja-JP',
    'ko-KR',
    'ms-MY',
    'nl-NL',
    'pt-BR',
    'ro-RO',
    'sq-AL',
    'th-TH',
    'tl-PH',
    'zh-CN',
];
