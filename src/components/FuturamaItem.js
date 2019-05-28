import Component from './Component.js';

class FuturamaItem extends Component {

    renderTemplate() {
        return /*html*/ `
        <li>
            <h2> "Dr Zoidberg",</h2>
            <img src="https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904014/Dr_John_Zoidberg.png">
            <blockquote>"Bender, you look awful. I recommend makeup."</blockquote>
        </li>
        `;
    }
}

export default FuturamaItem;