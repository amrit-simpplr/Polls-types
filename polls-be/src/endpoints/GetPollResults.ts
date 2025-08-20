import { body, endpoint, pathParams, request, response } from '@airtasker/spot';
import { PollResultsResponse } from '../responses/PollResultsResponse';

/**
 * Get poll results
 */
@endpoint({
    method: 'GET',
    path: '/polls/:pollId/results',
    tags: ['Polls']
})
export class GetPollResults {
  @request
    request(@pathParams pathParams: { pollId: string }) {}

  @response({ status: 200 })
  success(@body body: PollResultsResponse) {}

  @response({ status: 404 })
  notFound(@body body: { message: string }) {}

  @response({ status: 500 })
  internalError(@body body: { message: string }) {}
}
