export interface PollResultsResponse {
  pollId: string;
  questions: QuestionResult[];
  totalResponses: number;
}

export interface QuestionResult {
  questionId: string;
  title: string;
  options: OptionResult[];
}

export interface OptionResult {
  optionId: string;
  title: string;
  totalResponses: number;
  percentage: number;
}
