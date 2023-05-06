export function getValue (array, key) {
let res = [];
for (i=0; i<array.length; i++){
  res.push(array[i][key]);
}
  return res;
}

export function mapArray (array, key) {
  let res = {};
  for (i=0; i<array.length; i++){
    res.push(array[i][key]);
  }
    return res;
  }

// export default getValue
// export default mapArray
import getValue from './import-export.js'
import {getValue, mapArray} from './import-export.js'
