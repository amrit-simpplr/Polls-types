import { PollDetailsType } from '../../../common-types/poll-common.type';

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



export type MyPollDetailsType = Omit<PollDetailsType, 'questions'> & {
  questions: (Omit<PollQuestionType, 'pollOptions'> & {
    isResponded: boolean;
    pollOptions: (PollOptionType & {
      isSelected: boolean;
    })[];
  })[];
};
