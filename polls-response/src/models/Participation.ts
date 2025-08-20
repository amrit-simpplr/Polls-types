import { DateTime } from '@airtasker/spot';

export type PollParticipationReqBodyType = {
  /**
   * The unique identifier of the question being responded to.
   */
  questionId: string;
  /**
   * Array of selected option IDs.
   */
  optionId: string[];
};

export type UserParticipationRedisType = {
  /**
   * The unique identifier of the question.
   */
  questionId?: string;
  /**
   * Array of selected option IDs.
   */
  selectedOption: string[];
  /**
   * When the user responded to the poll.
   */
  respondedAt: DateTime | null;
  /**
   * The unique identifier of the recipient.
   */
  recipientId: string;
  /**
   * The unique identifier of the poll.
   */
  pollId: string;
  /**
   * The user's full name.
   */
  fullName: string;
  /**
   * The user's profile image URL.
   */
  img: string | null;
};

export type CreatePollResponseType = {
  /**
   * The organization ID.
   */
  orgId: string;
  /**
   * The user ID.
   */
  userId: string | null;
  /**
   * The unique identifier of the poll.
   */
  pollId: string;
  /**
   * The unique identifier of the recipient.
   */
  recipientId: string | null;
  /**
   * The unique identifier of the question.
   */
  questionId: string;
  /**
   * Array of selected option IDs.
   */
  optionId: string[];
};

export type UserPollParticipationType = {
  /**
   * When the user responded to the poll.
   */
  respondedAt: DateTime | null;
  /**
   * Array of selected option IDs.
   */
  selectedOption: string[];
  /**
   * The unique identifier of the recipient.
   */
  recipientId: string;
  /**
   * The unique identifier of the poll.
   */
  pollId: string;
};
