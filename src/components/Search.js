import Component from './Component.js';

class Search extends Component {

    render() {
        const form = this.renderDOM();
        const input = form.querySelector('input');

        form.addEventListener('submit', event => {
            event.preventDefault();
        });
        return form;
    }
    renderTemplate() {
        return /*html*/ `
            <form class="search">
                <input name="search" placeholder="search by quote">
                <button>Search</button>
            </form>
        `;
    }
}

export default Search;