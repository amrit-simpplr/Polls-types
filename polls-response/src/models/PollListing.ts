import { DateTime } from '@airtasker/spot';
import { PollState } from './constants';

export type UserType = {
  /**
   * The unique identifier of the user.
   */
  id: string;
  /**
   * The user's full name.
   */
  fullName: string;
  /**
   * The user's profile URL.
   */
  profileUrl: string;
};

export type PollListingPollOptionType = {
  /**
   * The option's text/label.
   */
  title: string;
  /**
   * The unique identifier of the option.
   */
  optionId: string;
  /**
   * Whether this option is selected by the current user.
   */
  isSelected: boolean;
  /**
   * Total number of responses for this option.
   */
  totalResponses: number | null;
  /**
   * Users who selected this option.
   */
  users: UserType[];
};

export type PollListingQuestionType = {
  /**
   * The question's text/label.
   */
  title: string;
  /**
   * The unique identifier of the question.
   */
  questionId: string;
  /**
   * Whether the current user has responded to this question.
   */
  isResponded: boolean;
  /**
   * Whether multiple responses are allowed for this question.
   */
  multipleResponses: boolean;
  /**
   * The poll options related to the question.
   */
  pollOptions: PollListingPollOptionType[];
};

export type PollListingType = {
  /**
   * The unique identifier of the poll.
   */
  pollId: string;
  /**
   * Whether the current user can manage this poll.
   */
  canManage?: boolean;
  /**
   * Whether the current user can participate in this poll.
   */
  canParticipate?: boolean;
  /**
   * The current state of the poll.
   */
  state: PollState;
  /**
   * The poll description.
   */
  description: string;
  /**
   * The questions for the poll.
   */
  questions: PollListingQuestionType[];
  /**
   * The poll settings.
   */
  settings: {
    isAnonymous: boolean;
    allowResult: boolean;
    allowResultBeforeResponse: boolean;
  };
  /**
   * Total number of responses.
   */
  totalResponses: number;
  /**
   * The user who created the poll.
   */
  createdByUser: UserType;
  /**
   * When the poll was created.
   */
  createdAt: DateTime;
  /**
   * When the poll ends.
   */
  endsAt: DateTime;
  /**
   * The audience IDs that can participate in the poll.
   */
  audienceIds: string[];
  /**
   * Whether the poll has expired.
   */
  isExpired: boolean;
  /**
   * Whether the confidential threshold has been met.
   */
  confidentialThresholdMet: boolean;
};

export type PollListing = {
  /**
   * The unique identifier of the poll.
   */
  id: string;
  /**
   * The current state of the poll.
   */
  state: PollState;
};
