import {
  body,
  defaultResponse,
  endpoint,
  pathParams,
  request,
  response,
} from '@airtasker/spot';
import { SubmitPollResponseRequestBodyArray } from '../parameters/SubmitPollResponseRequestBody';

/**
 * POST Endpoint to submit poll responses. Accepts an array of participation objects
 * to support multiple questions in a single request.
 */
@endpoint({
  method: 'POST',
  path: '/my-polls/:pollId/participation',
  tags: ['Poll Participation'],
})
export class SubmitPollResponse {
  @request
  request(
    @pathParams pathParams: {
      pollId: string;
    },
    @body body: SubmitPollResponseRequestBodyArray
  ) {}

  @response({ status: 200 })
  successfulResponse(@body body: {
    success: boolean;
    message: string;
  }) {}

  @response({ status: 400 })
  badRequestResponse(@body body: {
    message: string;
    code: string;
  }) {}

  @response({ status: 500 })
  internalServerError(@body body: {
    message: string;
    code: string;
  }) {}

  @defaultResponse
  default(@body body: {
    message: string;
    code: string;
  }) {}
}
