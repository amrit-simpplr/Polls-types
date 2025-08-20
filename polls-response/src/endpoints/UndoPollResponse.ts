import {
  body,
  defaultResponse,
  endpoint,
  pathParams,
  request,
  response,
} from '@airtasker/spot';

/**
 * DELETE Endpoint to undo a poll response.
 */
@endpoint({
  method: 'DELETE',
  path: '/my-polls/undo/:pollId',
  tags: ['Poll Participation'],
})
export class UndoPollResponse {
  @request
  request(@pathParams pathParams: {
    pollId: string;
  }) {}

  @response({ status: 200 })
  successfulResponse(@body body: {
    message: string;
    success: boolean;
  }) {}

  @response({ status: 404 })
  notFoundResponse(@body body: {
    message: string;
    code: string;
  }) {}

  @defaultResponse
  default(@body body: {
    message: string;
    code: string;
  }) {}
}
