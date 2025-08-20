import { PollListingItem } from './PollListingResponse';

export interface GetPollByIdResponse {
  success: boolean;
  data: PollListingItem;
}
