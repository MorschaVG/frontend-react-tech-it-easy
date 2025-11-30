import styles from "./App.module.css";
import soldCounter from "./helpers/soldCounter.js";
import initialStock from "./helpers/initialStock.js";
import unitsLeft from "./helpers/unitsLeft.js";
import getTvDisplayName from "./helpers/nameString.js";
import {bestSellingTv as b, bestSellingTv as a, bestSellingTv} from "./constants/inventory.js";
import {inventory} from "./constants/inventory.js";
import priceFormatter from "./helpers/priceFormatter.js";
import availableSizes from "./helpers/availableSizes.js";
import featureChecker from "./helpers/featureChecker.js";
import Features from "./helpers/renderFeatures.jsx";
import showOutcomeInConsole from "./constants/oefenbestand.js";
import brandLister from "./helpers/allBrandsList.js";
import TvCard from "./helpers/tvCard.jsx";

function App() {

    function topSellButton() {
        inventory.sort((a, b) => {

            if (a.sold > b.sold) {
                return -1;
            } else if (a.sold < b.sold) {
                return 1;
            } else {
                return 0;
            }
        })
        console.log(inventory)
    }

    function cheapestButton() {
        inventory.sort((a, b) => {

            if (a.price > b.price) {
                return 1;
            } else if (a.price < b.price) {
                return -1;
            } else {
                return 0;
            }
        })
        console.log(inventory)
    }

    function sportsButton() {
        inventory.sort((a, b) => {

            if (a.refreshRate > b.refreshRate) {
                return -1;
            } else if (a.refreshRate < b.refreshRate) {
                return 1;
            } else {
                return 0;
            }
        })
        console.log(inventory)
    }

    function sizeButton() {
        inventory.sort((a, b) => {
            const maxA = Math.max(...a.availableSizes);
            const maxB = Math.max(...b.availableSizes);
            return maxB - maxA;
        })
        console.log(inventory)
    }

    return (
        <>
            <div className={styles.counterWrapper}>
                <article className={styles.countermessage1}>Ingekocht:{initialStock()}</article>
                <article className={styles.countermessage2}>Verkocht: {soldCounter()}</article>
                <article className={styles.countermessage3}>Nog te verkopen: {unitsLeft()}</article>
            </div>
            <section className={styles.listWrapper}>
                <h2>Merken die wij verkopen:</h2>
                <ul className={styles.brandList}>
                    {brandLister().map((brand, index) => (
                        <li key={index}>{brand}</li>
                    ))}
                </ul>
            </section>
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
            <section className={styles.tvListWrapper}>
                {inventory.map(tv => (
                    <TvCard key={tv.type} tv={tv} />
                ))}
            </section>
            <div>
                <button type="button" onClick={topSellButton}>Meest verkocht eerst</button>
                <button type="button" onClick={cheapestButton}>Goedkoopste eerst</button>
                <button type="button" onClick={sportsButton}>Meest geschikt voor sport eerst</button>
                <button type="button" onClick={sizeButton}>Grootste schermen eerst</button>
            </div>


        </>
    );
}

export default App;



