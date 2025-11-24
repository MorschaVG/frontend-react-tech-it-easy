import styles from "./App.module.css";
import soldCounter from "./helpers/soldCounter.js";
import initialStock from "./helpers/initialStock.js";
import unitsLeft from "./helpers/unitsLeft.js";
import getTvDisplayName from "./helpers/nameString.js";
import {bestSellingTv} from "./constants/inventory.js";
import {inventory} from "./constants/inventory.js";
import priceFormatter from "./helpers/priceFormatter.js";
import availableSizes from "./helpers/availableSizes.js";
import featureChecker from "./helpers/featureChecker.js";
import Features from "./helpers/renderFeatures.jsx";


function App() {

    function topSellButton() {
        console.log("Meest verkocht eerst")
    }
    function cheapestButton() {
        console.log("Goedkoopste eerst")
    }
    function sportsButton() {
        console.log("Meest geschikt voor sport eerst")
    }

    return (
        <>
            <section className={styles.articlecontainer}>
                <span className={styles.imageWrapper}><img src="https://image.coolblue.nl/max/500x500/products/1786196"
                                                           alt="Afbeelding van samsung televisie"/>
                </span>
                <div className={styles.textWrapper}>
                    <article>{getTvDisplayName('UHD 55AU7040', bestSellingTv)}</article>
                    <article className={styles.priceFont}>{priceFormatter(bestSellingTv.price)}</article>
                    <article>{availableSizes(bestSellingTv.type, bestSellingTv)}</article>
                    <Features tv={bestSellingTv}/>
                </div>
            </section>
            <div>
                <button type="button" onClick={topSellButton}>Meest verkocht eerst</button>
                <button type="button" onClick={cheapestButton}>Goedkoopste eerst</button>
                <button type="button" onClick={sportsButton}>Meest geschikt voor sport eerst</button>
            </div>


            {/*<p id="counter-message">Ingekocht: <span id="initial-stock-counter">{initialStock()}</span></p>*/}
            {/*<p id="counter-message">Verkocht: <span id="sold-counter">{soldCounter()}</span></p>*/}
            {/*<p id="counter-message">Nog te verkopen: <span id="units-left-counter">{unitsLeft()}</span></p>*/}

        </>
    );
}

export default App;



