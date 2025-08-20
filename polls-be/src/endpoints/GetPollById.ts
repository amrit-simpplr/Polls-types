import { body, endpoint, pathParams, request, response } from '@airtasker/spot';
import { GetPollByIdResponse } from '../responses/GetPollByIdResponse';

/**
 * Get poll by ID with full details including questions, options, and user participation
 */
@endpoint({
    method: 'GET',
    path: '/polls/:pollId',
    tags: ['Polls']
})
export class GetPollById {
  @request
    request(@pathParams pathParams: { pollId: string }) {}

  @response({ status: 200 })
  success(@body body: GetPollByIdResponse) {}

  @response({ status: 400 })
  badRequest(@body body: { message: string; errors?: string[] }) {}

  @response({ status: 404 })
  notFound(@body body: { message: string }) {}
}
