export type SubmitPollResponseResponse = {
  /**
   * Success message confirming the response was submitted.
   */
  message: string;
  
  /**
   * The unique identifier of the poll.
   */
  pollId: string;
  
  /**
   * The unique identifier of the question that was responded to.
   */
  questionId: string;
  
  /**
   * Array of selected option IDs.
   */
  selectedOptions: string[];
  
  /**
   * When the response was submitted.
   */
  submittedAt: string;
  
  /**
   * Additional metadata about the submission.
   */
  metadata?: {
    /**
     * Whether this was the user's first response to this poll.
     */
    isFirstResponse: boolean;
    
    /**
     * The total number of responses for this question.
     */
    totalResponses: number;
    
    /**
     * Whether the poll allows multiple responses per question.
     */
    allowsMultipleResponses: boolean;
  };
};
