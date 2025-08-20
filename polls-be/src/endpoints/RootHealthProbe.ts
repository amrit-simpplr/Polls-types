import { body, endpoint, request, response } from '@airtasker/spot';

/**
 * Root service health check endpoint
 */
@endpoint({
    method: 'GET',
    path: '/',
    tags: ['Polls']
})
export class RootHealthProbe {
  @request
    request() {}

  @response({ status: 200 })
  success(@body body: {
    allWorking: boolean;
    externalDepedencies: {
      vault: boolean;
      db: boolean;
      harness: boolean;
      redis: boolean;
      kafka: boolean;
    };
  }) {}

  @response({ status: 500 })
  internalError(@body body: {
    message: string;
    code: string;
  }) {}
}
