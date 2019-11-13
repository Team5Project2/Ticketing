import conf from './config.json';
import { Selector } from 'testcafe';
const base_url = conf["base_url"];

fixture("home-page")
    .page(base_url); // Navigates to given url

test("Navigate to index", async t => {
    await t
        .expect(Selector("title").textContent).eql('Hello world!');
});
