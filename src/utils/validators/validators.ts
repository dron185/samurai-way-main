export const required = (value: string | null) => {
    if (value) return undefined;
    return 'Field is required';
}

export const maxLengthCreator = (maxLength: number) => (value: string | null) => {
    if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}