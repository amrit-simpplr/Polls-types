import { body, endpoint, request, response } from '@airtasker/spot';

/**
 * Generate poll suggestion pills using AI based on user context
 */
@endpoint({
    method: 'POST',
    path: '/polls/ai/pills',
    tags: ['AI Polls']
})
export class GetPollPillsSuggestionUsingAI {
  @request
    request() {}

  @response({ status: 200 })
  success(@body body: {
    label: string;
    prompt: string;
  }[]) {}

  @response({ status: 400 })
  badRequest(@body body: { 
    message: string; 
    errors?: string[];
    error?: string;
  }) {}
}
