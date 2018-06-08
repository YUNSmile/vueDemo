const random = (min, max) => {
    const dix = max - min;
    return Math.random() * dix + min;
}

const rdMin = (min, max) => {
    return parseInt(random(min, max), 10);
}

const rdMax = (min, max) => {
    return Math.floor(random(min, max) + 1);
}

const rdBoth = (min, max) => {
    return Math.round(random(min, max));
    // return Math.ceil(random(min, max));
}

export {
    rdMin,
    rdMax,
    rdBoth
}