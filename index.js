function distanceFromHqInBlocks (pickUpLocation) {
    return Math.abs(pickUpLocation - 42);
}

function distanceFromHqInFeet (pickUpLocation) {
    return distanceFromHqInBlocks (pickUpLocation) * 264;
}

function distanceTravelledInFeet (start, destination) {
    return Math.abs((destination - start) * 264);
}

function calculatesFarePrice (start, destination) {
    if (distanceTravelledInFeet (start, destination) < 400) {
        return 0;
    } else if (distanceTravelledInFeet (start, destination) >= 400 && distanceTravelledInFeet (start, destination) < 2000) {
        return (Math.round (100 * (0.02 * distanceTravelledInFeet (start, destination) - (400 * .02)))) / 100;
    } else if (distanceTravelledInFeet (start, destination) >= 2000 && distanceTravelledInFeet (start, destination) < 2500) {
        return 25;
    } else return 'cannot travel that far';
}