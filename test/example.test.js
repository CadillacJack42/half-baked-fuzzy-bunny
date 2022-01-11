// IMPORT MODULES under test here:
// import { example } from '../example.js';


import { renderBunny } from '../render-utils/render.js';


const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test.skip('should take in an object and return a DOM element with the object values', (expect) => {
    const bunny = {
        name: 'JOJO',
        family_id: 1
    };

    const expected = `<p class="bunnies">JOJO</p>`;

    const actual = renderBunny(bunny);
    console.log(actual);

    expect.equal(actual.outerHTML, expected);
});