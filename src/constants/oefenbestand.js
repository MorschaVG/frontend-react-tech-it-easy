import {inventory} from "./inventory.js";

function showOutcomeInConsole() {
    const ambiTrue = inventory.filter((tv) =>
        tv.options.some(
            (option) => option.name === "ambiLight" && option.applicable
        )
    );

    ambiTrue.forEach((tv) => {
        console.log(tv)
    });
}


export default showOutcomeInConsole;
