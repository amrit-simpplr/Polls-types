import { body, endpoint, pathParams, request, response } from '@airtasker/spot';

/**
 * Update poll state
 */
@endpoint({
    method: 'PATCH',
    path: '/polls/:pollId',
    tags: ['Polls']
})
export class UpdatePollState {
  @request
    request(
    @pathParams pathParams: { pollId: string },
    @body body: { state: string }
    ) {}

  @response({ status: 200 })
  success(@body body: { message: string }) {}

  @response({ status: 400 })
  badRequest(@body body: { message: string }) {}

  @response({ status: 404 })
  notFound(@body body: { message: string }) {}

  @response({ status: 500 })
  internalError(@body body: { message: string }) {}
}
