export type PollAIResponse = {
	title: string;
	description: string;
	options: string[];
};

export type PollTitleSuggestionAIResponse = {
	title: string;
	prompt: string;
};

export type PollErrorAIResponse = {
	error: string;
};
