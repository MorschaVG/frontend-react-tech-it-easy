import {inventory} from "../constants/inventory.js"

export default function featureChecker(tv, featureName) {
    return tv.options.some((feature) => feature.name === featureName && feature.applicable === true);
}
