import { DateTime } from '@airtasker/spot';
import { PollDeliveryType, PollQuestionType, PollState, ParticipationWindowDateType } from '../models/constants';

export interface CreatePollResponse {
  id: string;
  title: string;
  description: string | null;
  userPrompt: string | null;
  questions: PollQuestion[];
  audienceIds: string[];
  type: PollQuestionType;
  settings: PollSettings;
  isAiGenerated: boolean;
  deliveryType: PollDeliveryType;
  state: PollState;
  createdAt: DateTime;
  updatedAt: DateTime;
  creator: PollCreator;
}

export interface PollQuestion {
  questionId: string;
  title: string;
  multipleResponses: boolean;
  pollOptions: PollOption[];
}

export interface PollOption {
  optionId: string;
  title: string;
  displayOrder: number;
  totalResponses: number | null;
  users: PollUser[];
}

export interface PollUser {
  id: string;
  fullName: string;
  profileUrl: string;
}

export interface PollSettings {
  isAnonymous: boolean;
  allowResult: boolean;
  allowResultBeforeResponse: boolean;
  participationWindowDateType: ParticipationWindowDateType | null;
}

export interface PollCreator {
  id: string;
  firstName: string;
  lastName: string;
  img: string;
}
