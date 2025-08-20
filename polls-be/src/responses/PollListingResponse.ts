import { DateTime } from '@airtasker/spot';

export interface PollListingResponse {
  page: number;
  data: PollListingItem[];
  nextCursor?: number;
}

export interface PollListingItem {
  pollId: string;
  canManage?: boolean;
  canParticipate?: boolean;
  confidentialThresholdMet: boolean;
  state: string;
  description: string;
  userPrompt: string | null;
  questions: PollListingQuestion[];
  settings: PollListingSettings;
  totalResponses: number | null;
  createdByUser: PollListingUser;
  createdAt: DateTime;
  endsAt: DateTime;
  audienceIds: string[];
  isExpired: boolean;
}

export interface PollListingQuestion {
  questionId: string;
  title: string;
  isResponded: boolean;
  multipleResponses: boolean;
  pollOptions: PollListingOption[];
}

export interface PollListingOption {
  optionId: string;
  title: string;
  isSelected: boolean;
  displayOrder: number;
  totalResponses: number | null;
  users: PollListingUser[];
}

export interface PollListingSettings {
  isAnonymous: boolean;
  allowResult: boolean;
  allowResultBeforeResponse: boolean;
  participationWindowDateType: string | null;
}

export interface PollListingUser {
  id: string;
  fullName: string;
  profileUrl: string;
}


