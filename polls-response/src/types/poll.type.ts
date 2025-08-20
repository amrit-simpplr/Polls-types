import { PollDetailsType, PollQuestionType, PollOptionType } from "../../../common-types/poll-common.type";

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
