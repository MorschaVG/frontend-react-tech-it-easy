import initialStock from "./initialStock.js"
import soldCounter from "./soldCounter.js";


export default function needToSell() {
    return initialStock() - soldCounter()
}
