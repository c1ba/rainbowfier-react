export enum COLOR_TONES {
    DARK = "DARK",
    LIGHT ="LIGHT"
}

export type ColorTonesType = "DARK" | "LIGHT"


export interface ColorOptions {
    darkerOrLighter: ColorTonesType;
    colorOffset: number;
}

export interface Options {
    refObject: React.MutableRefObject<HTMLElement>;
    timeInMilliseconds: number;
    colorSettings?: ColorOptions;
}