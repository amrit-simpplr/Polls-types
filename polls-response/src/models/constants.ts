/**
 * Poll delivery types
 */
export type PollDeliveryType = 'IMMEDIATE' | 'SCHEDULED';

/**
 * Poll states
 */
export type PollState = 'DRAFT' | 'ACTIVE' | 'CLOSED' | 'DELETED' | 'EXPIRED';

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
