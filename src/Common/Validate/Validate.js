const requireFillIn = (value) => {
    if (value) return undefined;
    return "Fill in the field";
};
// TODO можно передевать false, а в видео undefined, узнать подробнее
const maxLengthCreater = (maxLength) => {
    return (value) => {
        if (value && value.length < maxLength) return undefined;
        return `Max length ${maxLength}`;
    };
};

export { requireFillIn, maxLengthCreater };
