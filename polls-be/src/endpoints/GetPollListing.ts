import { body, endpoint, queryParams, request, response } from '@airtasker/spot';
import { PollListingResponse } from '../responses/PollListingResponse';

/**
 * Get poll listing with optional filtering and pagination
 */
@endpoint({
    method: 'GET',
    path: '/polls',
    tags: ['Polls']
})
export class GetPollListing {
  @request
    request(@queryParams queryParams: {
      page?: string;
      pageSize?: string;
      searchTerm?: string;
      state?: string[];
      creator?: string[];
      sortOrder?: string;
    }) {}

  @response({ status: 200 })
  success(@body body: PollListingResponse) {}

  @response({ status: 400 })
  badRequest(@body body: { message: string; errors?: string[] }) {}

  @response({ status: 404 })
  notFound(@body body: { message: string }) {}

  @response({ status: 500 })
  internalError(@body body: { message: string }) {}
}
