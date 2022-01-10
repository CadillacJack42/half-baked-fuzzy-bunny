import { renderFamilies } from "./render-utils/render.js";

const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

export const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getUser() {
    return client.auth.session();
}

export async function getFamilies() {
    // fetch all families and their bunnies
    const response = await client
        .from('loving_families')
        .select('*, fuzzy_bunnies ( * )');

    return checkError(response);    
}

export async function deleteBunny(id) {
    // delete a single bunny using the id argument
    const response = await client
        .from('fuzzy_bunnies')
        .delete()
        .match({ id });

    return checkError(response);    
}


export async function createBunny(bunny) {
    // create a bunny using the bunny argument
    const response = await client
        .from('fuzzy_bunnies')
        .insert([{ 
            name: bunny.name,
            family_id: bunny.family_id
        }]);
        
    return checkError(response);    
}

export async function displayFamilies() {
    const familiesEl = document.querySelector('.families-container');
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


export async function checkAuth() {
    const user = await getUser();

    if (!user) location.replace('../'); 
}

export async function redirectIfLoggedIn() {
    if (await getUser()) {
        location.replace('./families');
    }
}

export async function signupUser(email, password){
    const response = await client.auth.signUp({ email, password });
    
    return response.user;
}

export async function signInUser(email, password){
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return window.location.href = '../';
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
