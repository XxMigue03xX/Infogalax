export const getRandomNumber = (max) => {
    let random = Math.random();
    let roundedRandom = Math.round(random*max);
    return roundedRandom;
}