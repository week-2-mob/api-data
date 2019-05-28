import Component from './Component.js';

class Header extends Component {


    renderTemplate() {
        return /*html*/ `
            <Header>
                <h1>Futurama Quotes</h1>
            </Header>
        `;
    }
}

export default Header;