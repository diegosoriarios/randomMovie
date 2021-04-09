import wd from "wd";
import mockAxios from 'axios';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

const PORT = 4723;

const config = {
    platformName: "Android",
    deviceName: "Pixel_4_API_28",
    app: "/home/diegorios/Documentos/randomMovie/mobile/android/app/build/outputs/apk/debug/app-debug.apk"
};

const driver = wd.promiseChainRemote("localhost", PORT);

describe("End to End Test", () => {
    beforeAll(async () => {
        await driver.init(config);
        await driver.sleep(3000);
    });

    jest.mock('axios');

    test("Movie search, bookmark and remove", async () => {
        mockAxios.get.mockImplementationOnce(() =>
            Promise.resolve({
                data: {
                    results: [{
                        popularity: 15.982,
                        vote_count: 5879,
                        video: false,
                        poster_path: "/rLneZNaulvXFfCJeJMy8gN2VvhQ.jpg",
                        image: "https://image.tmdb.org/t/p/w500/rLneZNaulvXFfCJeJMy8gN2VvhQ.jpg",
                        id: 68734,
                        adult: false,
                        backdrop_path: "/iVk4mVKwNE66JbBcoDwcYFvuUXM.jpg",
                        original_language: "en",
                        original_title: "Argo",
                        genre_ids: [
                            18,
                            53
                        ],
                        title: "Argo",
                        vote_average: 7.2,
                        overview: "As the Iranian revolution reaches a boiling point, a CIA 'exfiltration' specialist concocts a risky plan to free six Americans who have found shelter at the home of the Canadian ambassador.",
                        release_date: "2012-10-11"
                    }],
                },
            }),
        );

        expect(await driver.hasElementByAccessibilityId("textInput")).toBe(true);
        expect(await driver.hasElementByAccessibilityId("searchButton")).toBe(true);
        expect(await driver.hasElementByAccessibilityId("movieCard")).toBe(false);

        const input = await driver.elementByAccessibilityId("textInput");
        const button = await driver.elementByAccessibilityId("searchButton");

        await input.sendKeys('2001: A Space Odyssey');
        await button.click();
        await driver.sleep(3000);

        expect(await driver.hasElementByAccessibilityId("Rating")).toBe(true);
        expect(await driver.hasElementByAccessibilityId("movieCard")).toBe(true);
        await driver.sleep(3000);
        await driver.elementByAccessibilityId("movieCard").click();
        await driver.sleep(3000);
        
        expect(await driver.hasElementByAccessibilityId("bookmarkButton")).toBe(true);
        await driver.elementByAccessibilityId("bookmarkButton").click();
        await driver.sleep(3000);

        expect(await driver.hasElementByAccessibilityId("backButton")).toBe(true);
        await driver.elementByAccessibilityId("backButton").click();
        await driver.sleep(3000);

        expect(await driver.hasElementByAccessibilityId("profileButton")).toBe(true);
        await driver.elementByAccessibilityId("profileButton").click();
        await driver.sleep(3000);

        expect(await driver.hasElementByAccessibilityId("removeMovieButton")).toBe(true);
        await driver.elementByAccessibilityId("removeMovieButton").click();
        await driver.sleep(3000);
    });
})