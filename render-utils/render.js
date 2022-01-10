export const renderFamilies = (family) => {
    const familyEl = document.createElement('div');
    familyEl.classList.add('family');

    const familyNameEl = document.createElement('p');

    const familyBunnies = document.createElement('p');
    familyBunnies.classList.add('bunnies');

    familyNameEl.textContent = family.name;

    
};