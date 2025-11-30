import {inventory} from "../constants/inventory.js";

export default function brandLister() {
    return inventory.map(tv => tv.brand);

}
