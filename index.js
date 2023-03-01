const {fetchMyIp} = require('./iss');
// const {fetchCoordsByIp} = require('./iss');

fetchMyIp((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log("it worked! Returned IP: ", ip);
});

// fetchCoordsByIp('142.122.144.204', (error, data) => {
//   console.log(error);
//   console.log(data);
// });