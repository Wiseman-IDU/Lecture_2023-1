const fs = require('fs');

fs.readFile('/Users/comsoft/Documents/2023-1 IT기술실무/GitHub/Lecture_2023-1/ch3/3.6/readme.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
  console.log(data.toString());
});
