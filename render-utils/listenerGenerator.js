import { deleteBunny } from '../fetch-utils.js';

export const listenerGenerator = (domEl, id) => {
    domEl.addEventListener('click', async() => {
        await deleteBunny(id);
    });
};