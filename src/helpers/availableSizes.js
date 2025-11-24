import {bestSellingTv} from '../constants/inventory.js'
import {inventory} from "../constants/inventory.js";

export default function availableSizes(tvType, tvArray = inventory) {


    const list = Array.isArray(tvArray) ? tvArray : [tvArray];


    const chosenTv = list.find(tv => tv.type === tvType);


    if (!chosenTv) {
        return `Onbekende tv met type: ${tvType}`;
    }

    return chosenTv.availableSizes.map((sizeInInches) => {
     const sizeInCm = Math.round(sizeInInches * 2.54);
     return `${sizeInInches} inch (${sizeInCm} cm)`;
    })
        .join(" | ");
}