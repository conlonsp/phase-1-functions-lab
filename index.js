const scuberHq = 42;
let block;
let start;
let destination;

function distanceFromHqInBlocks(block) {
    if (scuberHq > block) {
        return scuberHq - block
    } else if (scuberHq < block) {
        return block - scuberHq
    }
}

function distanceFromHqInFeet(block) {
    let blocks = distanceFromHqInBlocks(block)
    return blocks * 264
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * 264;
    } else if (start < destination) {
        return (destination - start) * 264
    }
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    if (distance < 400) {
        return 0
    } else if (distance > 400 && distance < 2000) {
        return (distance - 400) * 0.02
    } else if (distance > 2000 && distance < 2500) {
        return 25
    } else if (distance > 2500) {
        return "cannot travel that far"
    }
}





































// let blockNumber;
// let hqBlockNumber = 42;

// function distanceFromHqInBlocks(blockNumber) {
//     if (hqBlockNumber < blockNumber) {
//         return blockNumber - hqBlockNumber;
//     } else if (hqBlockNumber > blockNumber) {
//         return hqBlockNumber - blockNumber;
//     }
// }

// function distanceFromHqInFeet(blockNumber) {
//     if (hqBlockNumber < blockNumber) {
//         return (blockNumber - hqBlockNumber) * 264;
//     } else if (hqBlockNumber > blockNumber) {
//         return (hqBlockNumber - blockNumber) * 264;
//     }
// }

// let start;
// let destination;

// function distanceTravelledInFeet(start, destination) {
//     if (destination > start) {
//         return (destination - start) * 264
//     } else if (start > destination) {
//         return (start - destination) * 264
//     }
// }

// function calculatesFarePrice(start, destination) {
//     if ((destination > start) && ((destination - start) * 264) < 400) {
//         return 0
//     } else if (((start - destination) * 264) >= 400 && ((start - destination) * 264) <= 2000) {
//         return (((start - destination) * 264) - 400) * 0.02
//     } else if (((destination > start) && (destination - start) * 264) > 2000) {
//         return 25
//     } else if ((start > destination) && ((start - destination) * 264) > 2500) {
//         return "cannot travel that far"
//     }
// }