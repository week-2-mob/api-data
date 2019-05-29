import futuramaApi from '../services/futurama-api.js';
import Component from './Component.js';
import Header from './Header.js';
import FuturamaList from './FuturamaList.js';
import Loading from './Loading.js';
import Search from './Search.js';

class App extends Component {
    
    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const search = new Search();
        main.appendChild(search.render());

        const futuramaList = new FuturamaList({ quotes: [] });
        main.appendChild(futuramaList.render());

        const loading = new Loading({ loading: false });
        main.appendChild(loading.render());
        function loadQuotes() {
            const params = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(params);
            const search = searchParams.get('search');
            
            loading.update({ loading: true });

            futuramaApi.getQuotes(search)
                .then(quotes => {
                    futuramaList.update({ quotes });
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {
                    loading.update({ loading: false });
                });
        }

        loadQuotes();

        window.addEventListener('hashchange', () => {
            loadQuotes();
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