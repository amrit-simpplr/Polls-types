import { PollUser } from './CreatePollResponse';

export interface PollResultsByOptionResponse {
  pollId: string;
  optionId: string;
  optionTitle: string;
  totalResponses: number;
  users: PollUser[];
}


