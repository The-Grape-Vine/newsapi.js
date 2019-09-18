import got from "got";
import { SourceEntity } from "./entities/sources";
import { isArray, isNullOrUndefined } from "util";
import { ArticleEntity } from "./entities/articles";


export default class NewsAPIClient {
    private readonly token: string;

    constructor(token: string) {
        this.token = token;
    }

    /**
     * Returns all sources available.
     * 
     * @returns A Promise<SourceEntity> object containing the sources.
     */
    public async getSources(): Promise<SourceEntity> {
        const req = await got(`https://newsapi.org/v2/sources?apiKey=${this.token}`);
        const result = JSON.parse(req.body) as SourceEntity;
        return result;
    }

    /**
     * Gets the top headlines of the day.
     * @param sources A single string or array of source IDs.
     * @param pageSize The number of results to return per page (request). 20 is the default, 100 is the maximum. 
     * @param q Keywords or a phrase to search for. 
     * 
     * @returns A list of articles.
     */

    public async getTopHeadlines(sources: string | string[], pageSize?: number, q?: string): Promise<ArticleEntity> {
        if(isArray(sources)){
            sources = sources.join(",");
        }
        let url = `https://newsapi.org/v2/top-headlines?apiKey=${this.token}&sources=${sources}`;
        
        if(!isNullOrUndefined(pageSize)) {
            url = url + `&pageSize=${pageSize}`;
        } else if(!isNullOrUndefined(q)) {
            url = url + `&q=${q}`;
        }

        const req = await got(url);
        const result = JSON.parse(req.body) as ArticleEntity;
        return result;
    }

    /**
     * Gets the top headlines of the day.
     * @param sources A single string or array of source IDs.
     * @param pageSize The number of results to return per page (request). 20 is the default, 100 is the maximum. 
     * @param q Keywords or a phrase to search for. 
     * 
     * @returns A list of articles.
     */
    
    public async getEverything(sources: string | string[], pageSize?: number, q?: string): Promise<ArticleEntity> {
        if(isArray(sources)){
            sources = sources.join(",");
        }
        let url = `https://newsapi.org/v2/everything?apiKey=${this.token}&sources=${sources}`;
        
        if(!isNullOrUndefined(pageSize)) {
            url = url + `&pageSize=${pageSize}`;
        } else if(!isNullOrUndefined(q)) {
            url = url + `&q=${q}`;
        }

        const req = await got(url);
        const result = JSON.parse(req.body) as ArticleEntity;
        return result;
    }
}