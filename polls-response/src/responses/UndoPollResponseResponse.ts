export type UndoPollResponseResponse = {
  /**
   * Success message confirming the response was undone.
   */
  message: string;
  
  /**
   * The unique identifier of the poll.
   */
  pollId: string;
  
  /**
   * The unique identifier of the question that had its response undone.
   */
  questionId: string;
  
  /**
   * Array of option IDs that were previously selected.
   */
  previouslySelectedOptions: string[];
  
  /**
   * When the response was undone.
   */
  undoneAt: string;
  
  /**
   * Additional metadata about the undo operation.
   */
  metadata?: {
    /**
     * Whether this was the user's only response to this poll.
     */
    wasOnlyResponse: boolean;
    
    /**
     * The total number of responses remaining for this question.
     */
    remainingResponses: number;
    
    /**
     * Whether the user can still respond to this question.
     */
    canStillRespond: boolean;
  };
};
