enum TextElements {
    P = "P",
    H1 = "H1",
    H2 = "H2",
    H3 = "H3",
    H4 = "H4",
    H5 = "H5",
    H6 = "H6",
    A = "A",
    SPAN = "SPAN"
}

const fromStringToTextElements = (value: string): TextElements | null => {
    switch (value) {
        case "P":
            return TextElements.P;
        case "H1":
            return TextElements.H1;
        case "H2":
            return TextElements.H2;
        case "H3":
            return TextElements.H3;
        case "H4":
            return TextElements.H4;
        case "H5":
            return TextElements.H5;
        case "H6":
            return TextElements.H6;
        case "A":
            return TextElements.A;
        case "SPAN":
            return TextElements.SPAN;
        default:
            return null;
            
    }
}

export const isOfTextType = (value: string): boolean => {
    const convertedVal: TextElements | null = fromStringToTextElements(value);
    

    return convertedVal === null ? false : true;
}