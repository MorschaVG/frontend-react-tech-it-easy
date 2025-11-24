import styles from "./App.module.css";
import soldCounter from "./helpers/soldCounter.js";
import initialStock from "./helpers/initialStock.js";
import unitsLeft from "./helpers/unitsLeft.js";
import getTvDisplayName from "./helpers/nameString.js";
import {bestSellingTv} from "./constants/inventory.js";
import {inventory} from "./constants/inventory.js";
import priceFormatter from "./helpers/priceFormatter.js";
import availableSizes from "./helpers/availableSizes.js";



function App() {
    console.log(getTvDisplayName('UHD 55AU7040', bestSellingTv));
    console.log(priceFormatter(bestSellingTv.price))
    console.log(availableSizes('43PUS6504/12', bestSellingTv));
    return (
        <>
            <section className={styles.articlecontainer}>
                <span className={styles.imageWrapper}><img src="https://image.coolblue.nl/max/500x500/products/1786196" alt="Afbeelding van samsung televisie"/></span>
                <div className={styles.textWrapper}>
                    <article>{getTvDisplayName('UHD 55AU7040', bestSellingTv)}</article>
                    <article className={styles.priceFont}>{priceFormatter(bestSellingTv.price)}</article>
                    <article>{availableSizes(bestSellingTv.type)}</article>
                </div>
            </section>

            {/*<p id="counter-message">Ingekocht: <span id="initial-stock-counter">{initialStock()}</span></p>*/}
            {/*<p id="counter-message">Verkocht: <span id="sold-counter">{soldCounter()}</span></p>*/}
            {/*<p id="counter-message">Nog te verkopen: <span id="units-left-counter">{unitsLeft()}</span></p>*/}

        </>
    );
}

export default App;



