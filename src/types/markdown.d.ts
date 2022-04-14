interface MarkdownData<T> {
	url: string;
	metadata: T;
}

export type News = MarkdownData<{
	title: string;
	publishedDate: string;
}>;
