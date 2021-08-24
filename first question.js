'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'deviceNamesSystem' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY devicenames as parameter.
 */

function deviceNamesSystem(devicenames) {
    // Write your code here
    
    const uniqueDevicenames = [];
    
  
    for (let i = 0; i < devicenames.length; i++)
    {
        
        if (devicenames[i].filter(unique)==true) {
            
            uniqueDevicesnames.push(devicenames[i]);
            
        }
        
        else { 
            
            uniqueDevicesnames[i] + 1;
        
        
        }
        
    }
    
return uniqueDevicenames

}

function main() {
}





https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });