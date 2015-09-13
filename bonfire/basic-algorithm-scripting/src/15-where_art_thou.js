/*Make a function that looks through an original array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

    For example, if the first argument is [{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], and the second argument is { last: 'Capulet' }, then you must return the third object from the original array (the first argument), because it contains the property and it's value, that was passed on as the second argument.*/


function where(collection, source) {
    var secondKeys = Object.keys(source);
    var matchingObject = [];
    for (var i =0; i <= collection.length-1; i++) {
        if (source[secondKeys[0]] === collection[i][secondKeys[0]]) {
            matchingObject.push(collection[i]);
        }
    }

    return matchingObject;
}

console.log(where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' }));