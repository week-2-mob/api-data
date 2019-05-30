import QUERY from '../src/Query.js';
const test = QUnit.test;

QUnit.module('Hash Storage');

const hashStorage = {
    get() {
        const hash = window.location.hash.slice(1); 
        return QUERY.parse(hash); 
    },

    set(queryProps) {
        const currentProps = hashStorage.get();
        Object.assign(currentProps, queryProps);
        window.location.hash = QUERY.stringify(currentProps);
    },

    remove(key) {
        const hash = hashStorage.get();
        delete hash[key];
        window.location.hash = QUERY.stringify(hash);
    }

};

test('removes key from storage', assert => {
    // arrange
    window.location.hash = 'search=shiny&page=1';
    const key = 'page';
    const expected = 'search=shiny';

    // act
    hashStorage.remove(key);
    const result = window.location.hash.slice(1);

    // assert
    assert.equal(result, expected);
});

test('reads window location hash as object', assert => {
    // arrange
    window.location.hash = 'search=shiny&page=1';
    const expected = {
        search: 'shiny',
        page: '1'
    };

    // act
    const result = hashStorage.get();

    // assert
    assert.deepEqual(result, expected);
});

test('sets window location with new props', assert => {
    // arrange
    window.location.hash = '';
    const queryProps = {
        search: 'shiny',
        page: '1'
    };
    const expected = 'search=shiny&page=1';

    // act
    hashStorage.set(queryProps);
    const result = window.location.hash.slice(1);

    // assert
    assert.equal(result, expected);
});

test('only sets new props on location', assert => {
    // arrange
    window.location.hash = 'search=shiny&page=1';
    const queryProps = {
        page: '2'
    };
    const expected = 'search=shiny&page=2';

    // act
    hashStorage.set(queryProps);
    const result = window.location.hash.slice(1);

    // assert
    assert.equal(result, expected);
});