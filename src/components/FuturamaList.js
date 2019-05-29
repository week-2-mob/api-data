import Component from './Component.js';
import FuturamaItem from './FuturamaItem.js';

class FuturamaList extends Component {

    render() {
        const list = this.renderDOM();

        this.props.quotes.forEach(quote => {
            const futuramaItem = new FuturamaItem({ quote });
            list.appendChild(futuramaItem.render());
        });

        return list;
    }
    renderTemplate() {
        return /*html*/ `
            <ul class="futurama-list">
            </ul>
        `;
    }
}

export default FuturamaList;