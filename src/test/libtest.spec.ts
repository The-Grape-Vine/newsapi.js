import chai, {expect} from "chai";
import NewsAPIClient from "..";
import conf from "./config/test.config.json"

describe("NewsAPI tests", () => {
    const client = new NewsAPIClient(conf.token);
    describe("Source requests", () => {
        it("should return the name of the first source", async () => {
            const source = await client.getSources();
            const src = source.sources[0];
            expect(src.id).to.equal("abc-news");
        });
    });
    describe("Top headlines requests", () => {
        it("title of the first article from abc news australia should not be null", async () => {
            const topheadlines = await client.getTopHeadlines("abc-news-au");
            const title = topheadlines.articles[0].title;
            expect(title).to.not.be.null;
        });
    });
    describe("Everything requests", () => {
        it("title of the first article from abc news australia should not be null", async () => {
            const everything = await client.getEverything("abc-news-au");
            const title = everything.articles[0].title;
            expect(title).to.not.be.null;
        });
    });
});