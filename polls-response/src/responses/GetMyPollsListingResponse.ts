import { DateTime } from '@airtasker/spot';

export interface GetMyPollsListingResponse {
  page: number;
  data: MyPollListingItem[];
  nextCursor?: number;
}

export interface MyPollListingItem {
  pollId: string;
  canManage?: boolean;
  canParticipate?: boolean;
  confidentialThresholdMet: boolean;
  state: string;
  description: string;
  userPrompt: string | null;
  questions: MyPollListingQuestion[];
  settings: MyPollListingSettings;
  totalResponses: number | null;
  createdByUser: MyPollListingUser;
  createdAt: DateTime;
  endsAt: DateTime;
  audienceIds: string[];
  isExpired: boolean;
}

export interface MyPollListingQuestion {
  questionId: string;
  title: string;
  isResponded: boolean;
  multipleResponses: boolean;
  pollOptions: MyPollListingOption[];
}

export interface MyPollListingOption {
  optionId: string;
  title: string;
  isSelected: boolean;
  displayOrder: number;
  totalResponses: number | null;
  users: MyPollListingUser[];
}

export interface MyPollListingSettings {
  isAnonymous: boolean;
  allowResult: boolean;
  allowResultBeforeResponse: boolean;
  participationWindowDateType: string | null;
}

export interface MyPollListingUser {
  id: string;
  fullName: string;
  profileUrl: string;
}