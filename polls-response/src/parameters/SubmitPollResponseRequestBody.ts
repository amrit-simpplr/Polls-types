export interface SubmitPollResponseRequestBody {
  questionId: string;
  optionId: string[];
}

export type SubmitPollResponseRequestBodyArray = SubmitPollResponseRequestBody[];