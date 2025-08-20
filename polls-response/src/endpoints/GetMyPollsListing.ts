import {
  body,
  defaultResponse,
  endpoint,
  queryParams,
  request,
  response,
} from '@airtasker/spot';
import { GetMyPollsListingResponse } from '../responses/GetMyPollsListingResponse';

/**
 * GET Endpoint to retrieve user's poll listing with filtering, pagination, and poll management support.
 */
@endpoint({
  method: 'GET',
  path: '/my-polls',
  tags: ['Poll Participation'],
})
export class GetMyPollsListing {
  @request
  request(@queryParams queryParams: {
    page?: string;
    pageSize?: string;
    searchTerm?: string;
    state?: string[];
    creator?: string[];
    sortOrder?: string;
    isPollManager?: boolean;
  }) {}

  @response({ status: 200 })
  successfulResponse(@body body: GetMyPollsListingResponse) {}

  @response({ status: 400 })
  badRequest(@body body: {
    message: string;
    code: string;
  }) {}

  @response({ status: 500 })
  internalServerError(@body body: {
    message: string;
    code: string;
  }) {}

  @defaultResponse
  default(@body body: {
    message: string;
    code: string;
  }) {}
}
