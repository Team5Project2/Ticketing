import conf from './config.json';
import {Selector} from 'testcafe';

const base_url = conf["base_url"];

fixture("home-page")
    .page(base_url); // Navigates to given url

test("Navigate to index", async t => {
    const title = Selector("title");

    await t.expect(title.textContent).eql('Hello world!');
});

test("Navigate to the users page and has title 'All users'", async t =>{
    const usersLink = Selector('.nav-link').withText('Users');
    await t.click(usersLink);

    const title = Selector("title");
    await t.expect(title.textContent).eql('All users')
});
