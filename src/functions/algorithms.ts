import { RainbowfierError } from "../common/RainbowfierError";
import { ColorsLevelsType, RGB, RangeValuesType, fromStringToRGB } from "../types/colors";

//  These 2 functions below are used in order to manage the color cycles.
export const returnNextColorValue = (value: RGB): RGB => {
    switch (value) {
        case RGB.R:
            return RGB.G;
        case RGB.G:
            return RGB.B;
        case RGB.B:
            return RGB.R;
        default:
            throw new RainbowfierError("The key value is not of RGB.", returnNextColorValue.name);
    }
}

export const returnPreviousColorValue = (value: RGB): RGB => {
    switch (value) {
        case RGB.R:
            return RGB.B;
        case RGB.G:
            return RGB.R;
        case RGB.B:
            return RGB.G;
        default:
            throw new RainbowfierError("The key value is not of RGB.", returnNextColorValue.name);
    }
}

// This is to use when the color has fully reached the value of Red, Green or Blue in order to identify which color was maxxed and which is next to be maxxed.
export const findColorPhase = (colorValues: ColorsLevelsType, colorRange: RangeValuesType) => {
    let valueToDecrease: RGB | null = null;
    for (const [key, value] of Object.entries(colorValues)) {
        const RGBKey = fromStringToRGB(key), prevRGBKey = returnPreviousColorValue(RGBKey);
        if (value !== colorRange.min && colorValues[prevRGBKey] === colorRange.min) {
            valueToDecrease = RGBKey;
            break;
        }
    }

    if (!valueToDecrease || valueToDecrease === null) {
        throw new RainbowfierError("Something went wrong in retrieving decreasing value.", findColorPhase.name);
    }

    const valueToIncrease = returnNextColorValue(valueToDecrease);

    return {toIncrease: valueToIncrease, toDecrease: valueToDecrease};
};

//  If there are already 2 out of 3 values who reached the maximum value, it means that the color is between the colors that have those maxxed values.
//  So we check if the color phase transformation has made half of the progress.

export const isAtFirstHalf = (colorValues: ColorsLevelsType, colorRange: RangeValuesType): boolean => {
    for (const [key, value] of Object.entries(colorValues)) {
        const RGBKey = fromStringToRGB(key), nextRGB = returnNextColorValue(RGBKey);
        if (value === colorRange.max && colorValues[nextRGB] < colorRange.max) {
            return true;
        }
    }
    return false;
};