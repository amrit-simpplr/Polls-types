import { PollDeliveryType } from "@simpplr/polls-db-shared-npm/prisma/generated/client";
import { DateTime } from "luxon";

export type PollOptionType = {
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
    /**
     * The unique identifier of the poll.
     */
    id: string;
    /**
     * The poll title.
     */
    title: string;
    /**
     * The poll description.
     */
    description: string;
    /**
     * The delivery type of the poll.
     */
    deliveryType: PollDeliveryType; 
    /**
     * When the poll was created.
     */
    createdAt: DateTime; 
    /**
     * When the poll ends.
     */
    endsAt: DateTime;
    /**
     * Total number of responses.
     */
    totalResponses: number;
    /**
     * The questions for the poll.
     */
    questions: PollQuestionType[];
    /**
     * The poll settings.
     */
    settings: PollSettingsType;
    /**
     * The user who created the poll.
     */
    createdByUser: CommonUser;
    /**
     * The audience IDs that can participate in the poll.
     */
    audienceIds: string[];
    /**
     * Redis TTL value.
     */
    redisTtl: number;
  };

export type CommonUser = {
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
    /**
     * The user's preferred language.
     */
    language: string;
};

export type UserType = {
  id: string;
  fullName: string;
  profileUrl: string;
};
