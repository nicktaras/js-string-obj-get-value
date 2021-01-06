

// function getKeyValuePairFromStr({ blob, searchKey }) {
//   var output = null;
//   // Regex to read keys from string
//   const regexKeys = /([a-zA-Z0-9 ]*:)/g;
//   // Regex to read (key) values from string
//   const regexValues = /(:[a-zA-Z0-9\- ]*)/g;
//   // Create an array of the keys
//   var keys = blob.match(regexKeys);
//   // Create an array of the values
//   var values = blob.match(regexValues);
//   // Get index of search key
//   var indexOfValue = keys.indexOf(searchKey + ':');
//   if (indexOfValue > -1) {
//     output = values[indexOfValue].replace(/([: ])/g, "");
//   }
//   return output;
// }
