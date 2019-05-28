import futuramaApi from '../services/futurama-api.js';
import Component from './Component.js';
import Header from './Header.js';
import FuturamaList from './FuturamaList.js';
import Loading from './Loading.js';

class App extends Component {
    
    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const futuramaList = new FuturamaList({ quotes: [] });
        main.appendChild(futuramaList.render());

        const loading = new Loading({ loading: true });
        main.appendChild(loading.render());

        futuramaApi.getQuotes()
            .then(quotes => {
                futuramaList.update({ quotes });
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                loading.update({ loading: false });
            });
        return dom;
    }

    renderTemplate() {
        return /*html*/` 
            <div>
                <main>
                </main>
            </div> 
        `;
    }
}

export default App;