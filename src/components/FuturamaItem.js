import Component from './Component.js';

class FuturamaItem extends Component {

    renderTemplate() {
        const quote = this.props.quote;
        return /*html*/ `
        <li class="futurama-item">
            <h2>${quote.character}</h2>
            <img src="${quote.image}">
            <blockquote>${quote.quote}</blockquote>
        </li>
        `;
    }
}

export default FuturamaItem;