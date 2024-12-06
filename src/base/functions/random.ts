export function generatePrefix(model: string): string {
    switch (model) {
        case "dunks":
            return "D-";
        case "aj1":
            return "AJ1-";
        case "aj3":
            return "AJ3-";
        case "aj4":
            return "AJ4-";
        case "af1":
            return "AF1-";
        case "ye":
            return "YE-";
        case "ts":
                return "TS-";
        case "other":
            return "OTHER-";
        default:
            return "";
    }
}

export function incrementNumberInString(str: string) {
    // Find the index of the hyphen
    const hyphenIndex = str.indexOf('-');
    // Delete everything before and including the hyphen
    const numericStr = hyphenIndex !== -1 ? str.substring(hyphenIndex + 1) : str;

    // Convert the numeric part to a number and increment by 1
    const incrementedNumber = parseInt(numericStr) + 1;

    return incrementedNumber.toString(); // Convert back to string for consistency
}

export function ValidURL(str: string): boolean {
    // Regular expression for validating URLs
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(str);
}

export function shoesModels() {
    // Regular expression for validating URLs
    const shoesModels = [
        {name: 'Dunks', value: 'dunks'},
        {name: 'Air Jordan 1', value: 'aj1'},
        {name: 'Air Jordan 3', value: 'aj3'},
        {name: 'Air Jordan 4', value: 'aj4'},
        {name: 'Air Force 1', value: 'af1'},
        {name: 'Yeezys', value: 'ye'},
        {name: 'Travis Scott', value: 'ts'},
        {name: 'Other', value: 'other'}
    ]
    return shoesModels;
}