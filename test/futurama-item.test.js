import FuturamaItem from '../src/components/FuturamaItem.js';

const test = QUnit.test;

test('renders template from data', assert => {
    //arrange
    const quote = {
        'character':'Dr Zoidberg',
        'image':'https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904014/Dr_John_Zoidberg.png',
        'quote':'Bender, you look awful. I recommend makeup.'
    };
    
    //act
    const futuramaItem = new FuturamaItem({ quote });
    const rendered = futuramaItem.renderTemplate();

    //assert
    assert.htmlEqual(rendered, /*html*/`
        <li class="futurama-item">
            <h2>Dr Zoidberg</h2>
            <img src="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904014/Dr_John_Zoidberg.png">
            <blockquote>Bender, you look awful. I recommend makeup.</blockquote>
        </li>`);
});