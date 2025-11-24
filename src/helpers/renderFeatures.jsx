import checkIcon from "../assets/check.png";
import minusIcon from "../assets/minus.png";
import styles from "../App.module.css"; // zelfde module als in App.jsx

// LET OP: default export met hoofdletter naam
export default function Features({ tv }) {
    // Kleine safety check zodat je geen crash krijgt
    if (!tv || !Array.isArray(tv.options)) {
        console.warn("Features: tv of tv.options ontbreekt:", tv);
        return null;
    }

    return (
        <article className={styles.features}>
            {tv.options.map((feature) => (
                <span key={feature.name} className={styles.feature}>
          {feature.name}:{" "}
                    <img
                        src={feature.applicable ? checkIcon : minusIcon}
                        alt={feature.name}
                        className={styles.featureIcon}
                    />
        </span>
            ))}
        </article>
    );
}

