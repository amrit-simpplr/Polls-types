import { body, endpoint, request, response } from '@airtasker/spot';

/**
 * Generate poll configuration using AI
 */
@endpoint({
    method: 'POST',
    path: '/polls/ai/configuration',
    tags: ['AI Polls']
})
export class GetPollConfigurationUsingAI {
  @request
    request(@body body: { prompt: string }) {}

  @response({ status: 200 })
  success(@body body: {
    title: string;
    description: string;
    options: string[];
  }) {}

  @response({ status: 400 })
  badRequest(@body body: { 
    message: string; 
    errors?: string[];
    error?: string;
  }) {}
}
