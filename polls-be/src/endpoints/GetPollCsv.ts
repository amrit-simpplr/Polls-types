import { body, endpoint, pathParams, request, response } from '@airtasker/spot';

/**
 * Get poll results as CSV
 */
@endpoint({
    method: 'GET',
    path: '/polls/:pollId/csv',
    tags: ['Polls']
})
export class GetPollCsv {
  @request
    request(@pathParams pathParams: { pollId: string }) {}

  @response({ status: 200 })
  success(@body body: string) {}

  @response({ status: 404 })
  notFound(@body body: { message: string }) {}

  @response({ status: 500 })
  internalError(@body body: { message: string }) {}
}
