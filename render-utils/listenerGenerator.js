// import { displayFamilies } from '../families/families.js';
import { deleteBunny, displayFamilies } from '../fetch-utils.js';


export const listenerGenerator = (domEl, id) => {
    domEl.addEventListener('click', async() => {
        await deleteBunny(id);
        await displayFamilies();
    });
};