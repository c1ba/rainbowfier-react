import { RainbowfierError } from "../common/RainbowfierError";
import { COLOR_TONES, ColorOptions } from "../interfaces/options";
import { ColorsLevelsType } from "../types/colors";

//  Let's imagine a color square, with white at the top left corner, black at the bottom right one and red at the top right corner.
//  Let's also say that we have a color picker placed at the top right corner. The RGB values are: for R 255, for G 0, for B 0.

export const returnColorRange = (colorValues: ColorsLevelsType, colorOptions: ColorOptions) => {

    const colorTone = colorOptions.darkerOrLighter;
    const offset = colorOptions.colorOffset;

    if (offset > 255 || offset < 0) {
        throw new RainbowfierError("Offset value is out of range. Please set it between 0 and 255", returnColorRange.name);
    }

    if (colorTone === COLOR_TONES.DARK) {

        //  If we were to drag the color picker slowly to the bottom, while the color becomes darker, the value for R starts to drop down as well, since it's getting closer to black (0, 0, 0).
        //  Now, let's say the value for Red is now 69. If we were to change the color tone from red to blue, we'd see that the values for Green and Blue wouldn't go higher than 69.
        //  That's because 69 became the maximum value.

        colorValues.R -= offset;

        return {max: 255 - offset, min: 0};
    }
    else {

        // In the case of a lighter tone of the color, if we were to drag along the color picker to the top left corner, we'd see that the Red value remains the same, while the ones for
        // Green and Blue are growing.
        // That's because the color should be getting closer to the value of white (255, 255, 255).
        // Similarly to the darker tone case, the values wouldn't go lower than, let's say 42, thus becoming the minimum value.

        colorValues.G = offset;
        colorValues.B = offset;

        return {max: 255, min: offset};
    }
}