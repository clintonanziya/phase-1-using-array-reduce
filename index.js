// Given array
const batteryBatches = [4, 5, 3, 7, 2, 8];

// Using reduce to aggregate the total number of batteries
const totalBatteries = batteryBatches.reduce(function(total, batch) {
  return total + batch;
}, 0);

// Output the total number of batteries
console.log(totalBatteries); // Output will be the sum of all elements in batteryBatches
