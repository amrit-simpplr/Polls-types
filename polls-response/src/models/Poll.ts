import { DateTime } from '@airtasker/spot';
import { PollDeliveryType, PollState } from './constants';

export type CommonUser = {
  /**
   * The unique identifier of the user.
   */
  id: string;
  /**
   * The user's first name.
   */
  firstName: string;
  /**
   * The user's last name.
   */
  lastName: string;
  /**
   * The user's full name.
   */
  name: string;
  /**
   * The user's profile image URL.
   */
  img: string;
  /**
   * The user's preferred language.
   */
  language: string;
};

export type RecipientUserDetailsType = {
  /**
   * The unique identifier of the user.
   */
  id: string;
  /**
   * The user's first name.
   */
  firstName: string;
  /**
   * The user's last name.
   */
  lastName: string;
  /**
   * The user's full name.
   */
  name: string;
  /**
   * The user's profile image URL.
   */
  img: string;
};

export type PollOptionType = {
  /**
   * The unique identifier of the option.
   */
  optionId: string;
  /**
   * The option's text/label.
   */
  title: string;
  /**
   * The display order of the option.
   */
  displayOrder: number;
  /**
   * Total number of responses for this option.
   */
  totalResponses: number;
  /**
   * Users who selected this option.
   */
  users: {
    id: string;
    fullName: string;
    profileUrl: string;
  }[];
};

export type PollQuestionType = {
  /**
   * The unique identifier of the question.
   */
  questionId: string;
  /**
   * The question's text/label.
   */
  title: string;
  /**
   * Whether multiple responses are allowed for this question.
   */
  multipleResponses: boolean;
  /**
   * The poll options related to the question.
   */
  pollOptions: PollOptionType[];
};

export type PollSettingsType = {
  /**
   * Whether the poll responses are anonymous.
   */
  isAnonymous: boolean;
  /**
   * Whether results are allowed to be shown.
   */
  allowResult: boolean;
  /**
   * Whether results can be shown before the user responds.
   */
  allowResultBeforeResponse: boolean;
};

export type PollDetailsType = {
  /**
   * The unique identifier of the poll.
   */
  id: string;
  /**
   * The poll title.
   */
  title: string;
  /**
   * The poll description.
   */
  description: string;
  /**
   * The delivery type of the poll.
   */
  deliveryType: PollDeliveryType;
  /**
   * When the poll was created.
   */
  createdAt: DateTime;
  /**
   * When the poll ends.
   */
  endsAt: DateTime;
  /**
   * Total number of responses.
   */
  totalResponses: number;
  /**
   * The questions for the poll.
   */
  questions: PollQuestionType[];
  /**
   * The poll settings.
   */
  settings: PollSettingsType;
  /**
   * The user who created the poll.
   */
  createdByUser: CommonUser;
  /**
   * The audience IDs that can participate in the poll.
   */
  audienceIds: string[];
  /**
   * Redis TTL value.
   */
  redisTtl: number;
};

export type MyPollDetailsType = Omit<PollDetailsType, 'questions'> & {
  questions: (Omit<PollQuestionType, 'pollOptions'> & {
    isResponded: boolean;
    pollOptions: (PollOptionType & {
      isSelected: boolean;
    })[];
  })[];
};
