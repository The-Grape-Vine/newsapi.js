export type ArticleEntity = {
    status: string,
    articles: InternalArticleEntity[]
}

type InternalArticleEntity = {
    source: ArticleSourceEntity
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string
}

type ArticleSourceEntity = {
    id: string,
    name: string
}