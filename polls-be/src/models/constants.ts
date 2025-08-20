/**
 * Poll delivery types
 */
export type PollDeliveryType = 'IMMEDIATE' | 'SCHEDULED';

/**
 * Poll states
 */
export type PollState = 'DRAFT' | 'ACTIVE' | 'CLOSED' | 'DELETED' | 'EXPIRED';

/**
 * Poll question types
 */
export type PollQuestionType = 'MULTIPLE_CHOICE' | 'SINGLE_CHOICE';

/**
 * Poll participation window date types
 */
export type ParticipationWindowDateType = 'IMMEDIATE' | 'CUSTOM';

// Constant values for use in code
/**
 * Constant values for poll delivery types
 */
export const POLL_DELIVERY_TYPES = {
    /** Immediate delivery - poll is active immediately */
    IMMEDIATE: 'IMMEDIATE' as PollDeliveryType,
    /** Scheduled delivery - poll becomes active at a specific time */
    SCHEDULED: 'SCHEDULED' as PollDeliveryType,
} as const;

/**
 * Constant values for poll states
 */
export const POLL_STATES = {
    /** Draft state - poll is being created/edited */
    DRAFT: 'DRAFT' as PollState,
    /** Active state - poll is accepting responses */
    ACTIVE: 'ACTIVE' as PollState,
    /** Closed state - poll is no longer accepting responses */
    CLOSED: 'CLOSED' as PollState,
    /** Deleted state - poll has been removed */
    DELETED: 'DELETED' as PollState,
    /** Expired state - poll has passed its end date */
    EXPIRED: 'EXPIRED' as PollState,
} as const;

/**
 * Constant values for poll question types
 */
export const POLL_QUESTION_TYPES = {
    /** Multiple choice - multiple responses allowed */
    MULTIPLE_CHOICE: 'MULTIPLE_CHOICE' as PollQuestionType,
    /** Single choice - only one response allowed */
    SINGLE_CHOICE: 'SINGLE_CHOICE' as PollQuestionType,
} as const;

/**
 * Constant values for participation window date types
 */
export const PARTICIPATION_WINDOW_DATE_TYPES = {
    /** Immediate - poll starts immediately */
    IMMEDIATE: 'IMMEDIATE' as ParticipationWindowDateType,
    /** Custom - poll starts at specified date/time */
    CUSTOM: 'CUSTOM' as ParticipationWindowDateType,
} as const;
