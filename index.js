// Code your solution in this file!
const hq = 42;
const block_in_feet = 264;

function distanceFromHqInBlocks(pickup){
  return Math.abs(pickup - 42);
}

function distanceFromHqInFeet(pickup){
  return distanceFromHqInBlocks(pickup) * block_in_feet;
}

function distanceTravelledInFeet(pickup, dropoff){
  const blocks = Math.abs(pickup - dropoff);
  return blocks * block_in_feet;
}

function calculatesFarePrice(start, destination){
  let distanceInFeet = distanceTravelledInFeet(start, destination);
  let total = distanceInFeet - 400 < 0 ? 0 : distanceInFeet - 400;
  total = total * 0.02;
  if(distanceInFeet > 2500){
    return "cannot travel that far"
  } else if(distanceInFeet > 2000){
    total = 25;
  }
  return total;
}
