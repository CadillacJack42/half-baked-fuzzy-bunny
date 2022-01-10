import { 
    checkAuth, 
    getFamilies, 
    logout,
} from '../fetch-utils.js';
import { renderFamilies } from '../render-utils/render.js';

checkAuth();

const familiesEl = document.querySelector('.families-container');
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

export async function displayFamilies() {
    // fetch families from supabase
    const families = await getFamilies();
    console.log(families);

    // clear out the familiesEl
    familiesEl.textContent = '';

    for (let family of families) {
        const familyEl = renderFamilies(family);
        familiesEl.append(familyEl);
    }
}

window.addEventListener('load', async() => {
    const families = await getFamilies();
    displayFamilies(families);
});