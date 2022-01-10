import { deleteBunny } from "../fetch-utils";

export const listenerGenerator = (domEl, id) => {
    domEl.addEventListener('click', async() => {
        await deleteBunny(id);
    });
};