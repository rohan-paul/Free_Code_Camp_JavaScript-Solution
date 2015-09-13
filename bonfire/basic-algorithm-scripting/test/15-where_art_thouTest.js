TestCase("15-where_art_thouTest", {
    "test where": function() {

        assert.deepEqual(where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' }), [{ first: 'Tybalt', last: 'Capulet' }], 'should return an array of objects');
    }

});