import featureChecker from "./featureChecker.js";
import checkIcon from "../assets/check.png"
import minusIcon from "../assets/minus.png"

export default function Features({tv}) {
   return (
       <article>
           {tv.options.map(feature => (
               <span key={feature.name}>
                   {feature.name}:{" "}
                   <img>
                       src={feature.applicable ? checkIcon : minusIcon}
                       alt={feature.name}
                       classname={styles.featureIcon}
                   </img>
               </span>
           ))}
       </article>
   ) ;
}
