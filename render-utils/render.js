import { getFamilies } from '../fetch-utils.js';
import { listenerGenerator } from './listenerGenerator.js';

export const renderFamilies = (family) => {
    const familyEl = document.createElement('div');
    familyEl.classList.add('family');

    const familyNameEl = document.createElement('p');

    
    familyNameEl.textContent = family.name;
    familyEl.append(familyNameEl);
    
    for (const bunny of family.fuzzy_bunnies) {
        const familyBunnies = renderBunny(bunny);
        familyEl.append(familyBunnies);
        listenerGenerator(familyBunnies, bunny.id);
    }

    return familyEl;
};

const renderBunny = (bunny) => {
    const familyBunnies = document.createElement('p');
    familyBunnies.classList.add('bunnies');
    familyBunnies.textContent = bunny.name;

    return familyBunnies;
};
