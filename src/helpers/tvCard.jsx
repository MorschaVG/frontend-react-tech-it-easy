import styles from "../App.module.css";
import getTvDisplayName from "./nameString.js";
import priceFormatter from "./priceFormatter.js";
import availableSizes from "./availableSizes.js";
import Features from "./renderFeatures.jsx";
import soldOutPng from '../assets/out-of-stock.png'

export default function TvCard({ tv }) {
    return (
        <section className={styles.articlecontainer}>
            <span className={styles.imageWrapper}>
                <img src={tv.sourceImg} alt={`Afbeelding van ${tv.brand} televisie`}/>
            </span>

            <div className={styles.textWrapper}>
                <article>{getTvDisplayName(tv.type, tv)}</article>
                <article className={styles.priceFont}>
                    {priceFormatter(tv.price)}
                </article>
                <article>{availableSizes(tv.type, tv)}</article>
                <Features tv={tv} />
            </div>
            <span className={styles.soldOut}>
                {tv.originalStock - tv.sold === 0 && (
                <img src={soldOutPng} alt="Plaatje dat de tekst 'sold out' weergeeft"/>
                    )}
            </span>
        </section>
    )
}