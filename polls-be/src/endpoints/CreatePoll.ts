import { body, endpoint, request, response } from '@airtasker/spot';
import { CreatePollRequestBody } from '../models/CreatePollRequestBody';
import { CreatePollResponse } from '../responses/CreatePollResponse';

/**
 * Create a new poll
 */
@endpoint({
    method: 'POST',
    path: '/polls',
    tags: ['Polls']
})
export class CreatePoll {
  @request
    request(@body body: CreatePollRequestBody) {}

  @response({ status: 201 })
  success(@body body: CreatePollResponse) {}

  @response({ status: 400 })
  badRequest(@body body: { message: string; errors?: string[] }) {}

  @response({ status: 500 })
  internalError(@body body: { message: string }) {}
}
