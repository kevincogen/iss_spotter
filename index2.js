const {nextISSTimesForMyLocation, fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes} = require('./iss_promised');
const {printPassTimes} = require('./index');

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  });

  
nextISSTimesForMyLocation()
.then((passTimes) => {
  printPassTimes(passTimes);
})
.catch((error) => {
  console.log("It didn't work: ", error.message);
});