import React, { useEffect } from "react";
import { Options } from "../interfaces/options";
import { defaultColorLevels } from "../constants/colorLevels";
import { ColorsLevelsType, RangeValuesType } from "../types/colors";
import { returnColorRange } from "../functions/returnColorRange";
import { findColorPhase, isAtFirstHalf } from "../functions/algorithms";
import { RainbowfierError } from "../common/RainbowfierError";
import { isOfTextType } from "../constants/HTMLElements";

const useRainbowfier = ({refObject, timeInMilliseconds, colorSettings}: Options) => {
    const startingColorValues: ColorsLevelsType = {
        R: defaultColorLevels.R,
        G: defaultColorLevels.G,
        B: defaultColorLevels.B
    }
    const colorRange: RangeValuesType = colorSettings ? returnColorRange(startingColorValues, colorSettings) : {max: 255, min: 0};

    const rainbowfy = (refObj: React.MutableRefObject<HTMLElement>, colorValues: ColorsLevelsType, colorRange: RangeValuesType) =>{
        // If no HTML element is set, throws error.
        const element = refObj.current;
        if (!element || element === null) {
            throw new RainbowfierError("Something went wrong with retrieving the current property of the refObject.", rainbowfy.name);
        }
        setTimeout(() => {
            const colorPhase = findColorPhase(colorValues, colorRange);

            //  Checking if the necessary colors for the stange have been selected
            if (colorPhase.toDecrease === null || colorPhase.toIncrease === null) {
                throw new RainbowfierError("Something went wrong with color phasing.", rainbowfy.name);
            }

            // Increases the next color in the cycle if in the first half, decreases the current color if in the second half.
            const isAtHalf = isAtFirstHalf(colorValues, colorRange);

            if (isAtHalf) {
                startingColorValues[colorPhase.toIncrease]++;
            }
            else {
                startingColorValues[colorPhase.toDecrease]--;
            }

            // Selects the element and applies the color property and repeats the process.
            if (isOfTextType(element.nodeName)) {
                element.style.color = `rgb(${colorValues.R}, ${colorValues.G}, ${colorValues.B})`;
            }
            else {
                element.style.backgroundColor = `rgb(${colorValues.R}, ${colorValues.G}, ${colorValues.B})`;
            }

            rainbowfy(refObject, startingColorValues, colorRange);
        }, timeInMilliseconds);
        
        
    }
    
    useEffect(() => {
        rainbowfy(refObject, startingColorValues, colorRange);
    }, []);

    return rainbowfy;
}

export default useRainbowfier;