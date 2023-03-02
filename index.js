// const {fetchMyIp} = require('./iss');
// const {fetchCoordsByIp} = require('./iss');
// const {fetchISSFlyOverTimes} = require('./iss');

const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});



// fetchMyIp((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("it worked! Returned IP: ", ip);
// });

// fetchCoordsByIp('142.122.144.204', (error, data) => {
//   // console.log(error);
//   // console.log(data);
// });

// const exampleCoords = { latitude: 43.5890452, longitude: -79.6441198 }
// fetchISSFlyOverTimes(exampleCoords, (error, data) => {
//   // console.log(error)
//   console.log(data)
// });