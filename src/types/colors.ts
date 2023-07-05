import { RainbowfierError } from "../common/RainbowfierError";

export enum RGB {
    R = "R",
    B = "B",
    G = "G"
}

export const fromStringToRGB = (val: string) => {
    switch (val) {
        case "R":
            return RGB.R;
        case "G":
            return RGB.G;
        case "B":
            return RGB.B;
        default:
            throw new RainbowfierError("The key value is not of RGB.", fromStringToRGB.name);
    }
}

export type ColorsLevelsType = {
    R: number;
    G: number;
    B: number;
}

export type RangeValuesType = {
    max: number;
    min: number;
}