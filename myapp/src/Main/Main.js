import './Main.css';
import articles from '../data/content.json'
console.log(articles);
function Main() {
    return (
        <div className="Main">
            {articles.map(item =>                    //jsx суміш js і html в фігорних скобках находиться js який вивидиться на тои місці в html
                <section>
                    <h2>{item.title}</h2>
                    <div>{item.body}</div>
                    <div>{item.body}</div>

                </section>
            )}
        </div>
    );
}

export default Main;