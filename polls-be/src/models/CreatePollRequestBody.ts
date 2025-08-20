import { DateTime } from '@airtasker/spot';
import { PollDeliveryType, PollQuestionType, ParticipationWindowDateType } from './constants';

export interface CreatePollRequestBody {
  description?: string;
  userPrompt?: string | null;
  questions: CreatePollQuestion[];
  audienceIds: string[];
  type: PollQuestionType;
  settings: CreatePollSettings;
  isAiGenerated: boolean;
  deliveryType: PollDeliveryType;
}

export interface CreatePollQuestion {
  type: PollQuestionType;
  title: string;
  isAiGenerated: boolean;
  multipleResponses: boolean;
  pollOptions: CreatePollOption[];
  isAiSuggested: boolean;
}

export interface CreatePollOption {
  title: string;
  displayOrder: number;
}

export interface CreatePollSettings {
  isAnonymous: boolean;
  allowResults: boolean;
  allowResultsBeforeResponse: boolean;
  allowMultipleResponses?: boolean;
  startsAt: DateTime;
  endsAt: DateTime;
  participationWindowDateType?: ParticipationWindowDateType;
}
