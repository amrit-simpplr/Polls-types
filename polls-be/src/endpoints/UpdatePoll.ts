import { body, endpoint, pathParams, request, response } from '@airtasker/spot';
import { CreatePollRequestBody } from '../models/CreatePollRequestBody';
import { CreatePollResponse } from '../responses/CreatePollResponse';

/**
 * Update an existing poll with partial or complete poll data.
 * Supports updating poll content, settings, audiences, and scheduling.
 */
@endpoint({
    method: 'PUT',
    path: '/polls/:pollId',
    tags: ['Polls']
})
export class UpdatePoll {
  @request
    request(
    @pathParams pathParams: { pollId: string },
    @body body: CreatePollRequestBody
    ) {}

  @response({ status: 200 })
  success(@body body: CreatePollResponse) {}

  @response({ status: 400 })
  badRequest(@body body: { message: string; errors?: string[] }) {}

  @response({ status: 404 })
  notFound(@body body: { message: string }) {}

  @response({ status: 500 })
  internalError(@body body: { message: string }) {}
}
