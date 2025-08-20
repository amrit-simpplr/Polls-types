import {
  PollDeliveryType,
  PollState,
} from "@simpplr/polls-db-shared-npm/prisma/generated/client";
import { CommonUser, UserType } from "../../../common-types/poll-common.type";

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

export type PollListingType = {
  pollId: string;
  canManage?: boolean;
  canParticipate?: boolean;
  state: string;
  description: string;
  questions: PollListingQuestionType[];
  createdByUser: CommonUser;
  audienceIds: string[];
  createdAt: Date;
  endsAt: Date;
  totalResponses: number | null;
  isExpired: boolean;
};

export type UserPollParticipationType = {
  respondedAt: Date | null;
  selectedOption: string[];
  recipientId: string;
  pollId: string;
};
