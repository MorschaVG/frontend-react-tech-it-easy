import {bestSellingTv} from '../constants/inventory.js'
import {inventory} from "../constants/inventory.js";

export default function getDisplayName(tvType, tvArray = inventory) {
    console.log("getDisplayname aangeroepen met:", tvType, tvArray);

    const list = Array.isArray(tvArray) ? tvArray : [tvArray];
    console.log("Zoeklijst:", list);

    const chosenTv = list.find(tv => tv.type === tvType);
    console.log("Gevonden tv:", chosenTv);

    if (!chosenTv) {
        return `Onbekende tv met type: ${tvType}`;
    }

    return `${chosenTv.brand} ${chosenTv.type} - ${chosenTv.name}`;
}