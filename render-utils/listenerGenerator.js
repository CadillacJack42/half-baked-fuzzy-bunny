import { displayFamilies } from '../families/families.js';
import { deleteBunny } from '../fetch-utils.js';
// import { reRender } from './render.js';

export const listenerGenerator = (domEl, id) => {
    domEl.addEventListener('click', async() => {
        await deleteBunny(id);
        await displayFamilies();
    });
};