import { body, endpoint, pathParams, request, response } from '@airtasker/spot';

/**
 * Delete a poll
 */
@endpoint({
    method: 'DELETE',
    path: '/polls/:pollId',
    tags: ['Polls']
})
export class DeletePoll {
  @request
    request(@pathParams pathParams: { pollId: string }) {
        return pathParams;
    }

  @response({ status: 200 })
  success(@body body: { message: string }) {
      return body;
  }

  @response({ status: 404 })
  notFound(@body body: { message: string }) {
      return body;
  }

  @response({ status: 500 })
  internalError(@body body: { message: string }) {
      return body;
  }
}
