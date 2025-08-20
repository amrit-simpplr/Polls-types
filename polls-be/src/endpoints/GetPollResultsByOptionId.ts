import { body, endpoint, pathParams, request, response } from '@airtasker/spot';
import { PollResultsByOptionResponse } from '../responses/PollResultsByOptionResponse';

/**
 * Get poll results by option ID
 */
@endpoint({
    method: 'GET',
    path: '/polls/:pollId/results/:optionId',
    tags: ['Polls']
})
export class GetPollResultsByOptionId {
  @request
    request(@pathParams pathParams: { pollId: string; optionId: string }) {}

  @response({ status: 200 })
  success(@body body: PollResultsByOptionResponse) {}

  @response({ status: 404 })
  notFound(@body body: { message: string }) {}

  @response({ status: 500 })
  internalError(@body body: { message: string }) {}
}
