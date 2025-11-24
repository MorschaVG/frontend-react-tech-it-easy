import {inventory} from "../constants/inventory.js";
import {bestSellingTv} from "../constants/inventory.js";

export default function initialStock() {
    let totalInitialStock = bestSellingTv.originalStock;

    for (let i = 0; i < inventory.length; i++) {
        totalInitialStock += inventory[i].originalStock;
    }
    return totalInitialStock
}
