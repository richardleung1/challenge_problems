/* **************************************************************
Make a function createNewElement(tagName, text) that takes in 2 
parameters and returns a new element with the correct text
************************************************************** */
function createNewElement(tagName, text) {
    let newElement = document.createElement(tagName);
    newElement.textContent = text;
    return newElement;
}

console.log(createNewElement('p', 'I am a software engineer'));
console.log(createNewElement('h1', 'General Assembly'));
console.log(createNewElement('p', 'SEI 1019'));

/* ************************************************************ */


/* **************************************************************
Make a function giveMeKeys(array) that takes in an array of objects
and returns a new array with all of the keys from each object
************************************************************** */
const instuctors = [
    { rome: 'Rome', pete: 'Pete'},
    { mike: 'Mike', dex: 'Dexter'},
    { ga: 'General Assembly', cohort: 'SEI1019' }
]

const giveMeKeys = (array) => {
    let keys = [];
    // for (let i = 0; i < array.length; i++) {
    //     const object = array[i];
    //     for (const key in object) {
    //         keys.push(key);
    //     }
    // }
    array.forEach(object => {
        keys = keys.concat(Object.keys(object));
    });
    return keys;
}

console.log(giveMeKeys(instuctors));

/* ************************************************************ */