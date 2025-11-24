import {bestSellingTv} from '../constants/inventory.js'
import {inventory} from "../constants/inventory.js";

/**
 * fetches available size(s) from an array inside a tv object and returns a template literal string displaying the
 * size in inches and cm to the user
 *
 * @param {string} tvType - String representing a tv model/type
 * @param {Array<Object>} tvArray- The array with tv-Objects in which to search for tvType and corresponding sizes
 * @returns {string} A template literal which the user sees as "43 inch (109 cm)"
 *
 */
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