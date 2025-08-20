import {
	PollDeliveryType,
	PollState,
	PollType,
	QuestionType,
	ParticipationWindowDateType,
} from '@simpplr/polls-db-shared-npm/prisma/generated/client';

export type CreatePollOptionType = {
  title: string;
  displayOrder: number;
};

export type CreatePollQuestionType = {
  type: QuestionType;
  title: string;
  isAiGenerated: boolean;
  multipleResponses: boolean;
  pollOptions: CreatePollOptionType[];
  isAiSuggested: boolean;
};

export type CreatePollSettingsType = {
  isAnonymous: boolean;
  allowResults: boolean;
  allowResultsBeforeResponse: boolean;
  startsAt: Date;
  endsAt: Date;
	participationWindowDateType: ParticipationWindowDateType;
};

export type CreatePollRequestBodyType = {
  description: string;
	userPrompt: string | null;
  questions: CreatePollQuestionType[];
  audienceIds: string[];
  type: PollType;
  settings: CreatePollSettingsType;
  isAiGenerated: boolean;
  deliveryType: PollDeliveryType;
};

export type UpdatePollRequestBodyType = CreatePollRequestBodyType;

export type PollOptionDBType = {
  id: string;
  org_id: string;
  poll_id: string;
  title: string;
  poll_question_id: string;
  display_order: number;
};

export type PollQuestionDBType = {
  id: string;
  org_id: string;
  poll_id: string;
  title: string;
  type: QuestionType;
  is_ai_suggested: boolean;
  options: PollOptionDBType[];
};

export type PollCreatorDBType = {
  id: string;
  first_name: string;
  last_name: string;
  img: string;
};

export type GeoLocationUserDetails = {
  city?: string;
  state?: string;
  country?: string;
  department?: string;
  role?: string;
	title?: string;
	language?: string;
};

export type PollDetailsRedisType = {
  id: string;
  description: string | null;
  delivery_type: PollDeliveryType;
  is_anonymous: boolean;
  allow_result: boolean;
  allow_result_before_response: boolean;
	user_prompt: string | null;
	participation_window_date_type: ParticipationWindowDateType;
  created_at: Date;
  ends_at: Date | null;
};

export type pollFilters = {
  searchTerm: string | undefined;
  creator: string[] | undefined;
  state: PollState[] | undefined;
  sortOrder: 'asc' | 'desc';
  audienceIds: string[];
  pollId?: string;
};

export type PollListingType = {
  pollId: string;
  canManage?: boolean;
  canParticipate?: boolean;
  confidentialThresholdMet: boolean;
  state: PollState;
  description: string | null;
  questions: PollListingQuestionType[];
  createdByUser: PollCreatorDBType;
  audienceIds: string[];
  createdAt: Date;
  endsAt: Date | null;
  totalResponses: number;
  redisTtl: number;
};

export type PollListingQuestionType = {
  questionId: string;
  title: string;
  multipleResponses: boolean;
  pollOptions: PollListingPollOptionType[];
};

export type PollListingPollOptionType = {
  optionId: string;
  title: string;
  displayOrder: number;
  totalResponses: number | null;
  users: {
    id: string;
    fullName: string;
    profileUrl: string;
  }[];
};

export type PollListingUserType = {
  id: string;
  fullName: string;
  profileUrl: string;
};

export type PollListingFilterType = {
  searchTerm?: string;
  creator?: string[];
  state?: PollState[];
  sortOrder?: 'asc' | 'desc';
  audienceIds?: string[];
  pollId?: string;
};

export type PollListingSortType = {
  field: 'createdAt' | 'endsAt' | 'totalResponses';
  order: 'asc' | 'desc';
};

export type PollListingPaginationType = {
  page: number;
  pageSize: number;
  totalRecords: number;
  totalPages: number;
};

export type PollListingResponseType = {
  polls: PollListingType[];
  pagination: PollListingPaginationType;
  filters: PollListingFilterType;
  sort: PollListingSortType;
};

export type PollListingSearchType = {
  searchTerm?: string;
  creator?: string[];
  state?: PollState[];
  sortOrder?: 'asc' | 'desc';
  audienceIds?: string[];
  pollId?: string;
  page?: number;
  pageSize?: number;
};

export type PollListingSearchResponseType = {
  polls: PollListingType[];
  pagination: PollListingPaginationType;
  filters: PollListingFilterType;
  sort: PollListingSortType;
  search: PollListingSearchType;
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

export type ManagePollListingDBType = {
  id: string;
  description: string | null;
  delivery_type: PollDeliveryType;
  state: PollState;
  created_at: Date;
  ends_at: Date | null;
  is_anonymous: boolean;
  allow_result: boolean;
  allow_result_before_response: boolean;
	user_prompt?: string | null;
	participation_window_date_type?: ParticipationWindowDateType | null;
  creator: {
    id: string;
    first_name: string | null;
    last_name: string | null;
    img: string | null;
  };
  audiences: {
    audience_id: string;
  }[];
  _count: {
    responses: number;
  };
  questions: {
    id: string;
    title: string;
    type: QuestionType;
    options: {
      id: string;
      title: string;
      display_order: number;
      _count: {
        responses: number;
      };
      responses: {
        user: {
          id: string;
          first_name: string | null;
          last_name: string | null;
          img: string | null;
        } | null;
      }[];
    }[];
    responses: {
      id: string;
      org_id: string;
      poll_id: string;
      question_id: string;
      recipient_id: string | null;
      option_id: string;
      user_id: string | null;
    }[];
  }[];
  recipients: {
    id: string;
    poll_id: string;
    user_id: string;
    responded_at: Date | null;
  }[];
};

export type PollCsvDbResponse = {
  voterId: string;
  respondedAt: Date | null;
  questionId: string;
  questionTitle: string;
  optionTitle: string | null;
  firstName: string | null;
  lastName: string | null;
  userId: string;
  department: string | null;
  role: string | null;
};

export type PollCsvData = {
  pollId: string;
  pollQuestion: string;
  voterId: string | null;
  fullName: string | null;
  departmentName: string | null;
  roleName: string | null;
  selectedOptions: string;
  submittedAt: string | null;
}
