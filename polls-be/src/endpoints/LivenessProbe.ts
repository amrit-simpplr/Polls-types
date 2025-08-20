import { body, endpoint, request, response } from '@airtasker/spot';

/**
 * Kubernetes liveness probe - checks if the service is alive and responsive
 */
@endpoint({
    method: 'GET',
    path: '/livenessProbe',
    tags: ['Polls']
})
export class LivenessProbe {
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
