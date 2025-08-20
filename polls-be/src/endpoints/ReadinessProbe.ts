import { body, endpoint, request, response } from '@airtasker/spot';

/**
 * Kubernetes readiness probe - checks if the service is ready to handle traffic
 */
@endpoint({
    method: 'GET',
    path: '/readinessProbe',
    tags: ['Polls']
})
export class ReadinessProbe {
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
