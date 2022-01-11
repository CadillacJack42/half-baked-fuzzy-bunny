// IMPORT MODULES under test here:
// import { example } from '../example.js';


import { renderBunny } from '../render-utils/render.js';
import { createBunny, signInUser } from '../fetch-utils.js';


const test = QUnit.test;

test('time to test a function', async(expect) => {

    await signInUser('testUser@test.com', 'test1234');
    
    const expected = [
        {
            'created_at': 'Date() object',
            'family_id': 1,
            'id': 'dynamically generated number',
            'name': 'Mojo',
            'user_id': '88551885-f251-491a-8ef9-1e2ef0d7254b'
        }
    ];
    
    const actual = await createBunny({ name: 'Mojo', family_id: 1 });
    console.log(actual);

    expect.equal(actual.name, expected.name);
});

test('should take in an object and return a DOM element with the object values', (expect) => {
    const bunny = {
        name: 'JOJO',
        family_id: 1
    };

    const expected = `<p class="bunnies">JOJO</p>`;

    const actual = renderBunny(bunny);

    expect.equal(actual.outerHTML, expected);
});