import {
  PollDeliveryType,
  PollState,
} from "@simpplr/polls-db-shared-npm/prisma/generated/client";

export type CommonUser = {
  id: string;
  firstName: string;
  lastName: string;
  name: string;
  img: string;
  language: string;
};

export type PollDetailsQuestionsType = [
  {
    questionId: string;
    title: string;
    multipleResponses: boolean;
    pollOptions: {
      optionId: string;
      title: string;
    }[];
  }
];

export type PollListing = {
  id: string;
  state: PollState;
};

export type PollOptionType = {
  optionId: string;
  title: string;
  displayOrder: number;
  totalResponses: number;
  users: {
    id: string;
    fullName: string;
    profileUrl: string;
  }[];
};

export type PollQuestionType = {
  questionId: string;
  title: string;
  multipleResponses: boolean;
  pollOptions: PollOptionType[];
};

export type PollSettingsType = {
  isAnonymous: boolean;
  allowResult: boolean;
  allowResultBeforeResponse: boolean;
};

export type PollDetailsType = {
  id: string;
  title: string;
  description: string;
  deliveryType: PollDeliveryType;
  createdAt: Date;
  endsAt: Date;
  totalResponses: number;
  questions: PollQuestionType[];
  settings: PollSettingsType;
  createdByUser: CommonUser;
  audienceIds: string[];
  redisTtl: number;
};

export type PollListingPollOptionType = {
  title: string;
  optionId: string;
  isSelected: boolean;
  totalResponses: number | null;
  users: UserType[];
};

export type PollListingQuestionType = {
  title: string;
  questionId: string;
  isResponded: boolean;
  multipleResponses: boolean;
  pollOptions: PollListingPollOptionType[];
};

export type UserType = {
  id: string;
  fullName: string;
  profileUrl: string;
};

export type PollListingType = {
  pollId: string;
  canManage?: boolean;
  canParticipate?: boolean;
  state: string;
  description: string;
  questions: PollListingQuestionType[];
  settings: PollSettingsType;
  totalResponses: number;
  createdByUser: UserType;
  createdAt: Date;
  endsAt: Date;
  audienceIds: string[];
  isExpired: boolean;
  confidentialThresholdMet: boolean;
};

export type UserPollParticipationType = {
  respondedAt: Date | null;
  selectedOption: string[];
  recipientId: string;
  pollId: string;
};
