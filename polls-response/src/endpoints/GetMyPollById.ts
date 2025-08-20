import {
  body,
  defaultResponse,
  endpoint,
  pathParams,
  request,
  response,
} from '@airtasker/spot';

/**
 * GET Endpoint to retrieve a specific poll by ID for the current user.
 */
@endpoint({
  method: 'GET',
  path: '/my-polls/:pollId',
  tags: ['Poll Participation'],
})
export class GetMyPollById {
  @request
  request(@pathParams pathParams: {
    pollId: string;
  }) {}

  @response({ status: 200 })
  successfulResponse(@body body: {
    id: string;
    description: string;
    state: string;
    createdAt: string;
  }) {}

  @response({ status: 404 })
  notFoundResponse(@body body: {
    message: string;
    code: string;
  }) {}
}
