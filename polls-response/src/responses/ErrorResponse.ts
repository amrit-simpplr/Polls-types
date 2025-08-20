export type ErrorResponse = {
  /**
   * The error message.
   */
  message: string;
  /**
   * The error code.
   */
  code?: string;
  /**
   * Additional error details.
   */
  details?: any;
};
