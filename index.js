function distanceFromHqInBlocks(blocks) {
  if (blocks > 42) return blocks - 42;
  else if (blocks < 42) return 42 - blocks;
  else {
    ("We did not go anywhere.");
  }
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(start, destination) {
  if (start > destination) {
    return (start - destination) * 264;
  } else if (destination > start) {
    return (destination - start) * 264;
  } else {
    ("We did not go anywhere.");
  }
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance >= 2001 && distance <= 2500) {
    return 25;
  } else if (distance >= 401 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2500) {
    return "cannot travel that far";
  }
}
