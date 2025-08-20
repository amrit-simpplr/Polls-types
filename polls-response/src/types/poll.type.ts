import { PollDeliveryType } from "@simpplr/polls-db-shared-npm/prisma/generated/client";

export type PollParticipationReqBodyType = {
  questionId: string;
  optionId: string[];
};

export type UserParticipationRedisType = {
  questionId?: string;
  selectedOption: string[];
  respondedAt: Date | null;
  recipientId: string;
  pollId: string;
  fullName: string;
  img: string | null;
};

export type CreatePollResponseType = {
  orgId: string;
  userId: string | null;
  pollId: string;
  recipientId: string | null;
  questionId: string;
  optionId: string[];
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

export type CommonUser = {
  id: string;
  firstName: string;
  lastName: string;
  name: string;
  img: string;
  language?: string;
};

export type RecipientUserDetailsType = {
  id: string;
  firstName: string;
  lastName: string;
  name: string;
  img: string;
};

export type MyPollDetailsType = Omit<PollDetailsType, 'questions'> & {
  questions: (Omit<PollQuestionType, 'pollOptions'> & {
    isResponded: boolean;
    pollOptions: (PollOptionType & {
      isSelected: boolean;
    })[];
  })[];
};
