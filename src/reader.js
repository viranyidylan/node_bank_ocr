const validator = require("./validator");

module.exports = {
    /**
     * This is just a placeholder, implement however you like!
     */
     parse: (input)=>{
        rawDigitStringsLookupTable = { //The raw string of each digit represented with pipes and underscores, and their corresponding number
            " _ | ||_|" : 0,
        
            "     |  |" : 1,
        
            " _  _||_ " : 2,
        
            " _  _| _|" : 3,
        
            "   |_|  |" : 4,
        
            " _ |_  _|" : 5,
        
            " _ |_ |_|" : 6,
        
            " _   |  |" : 7,
        
            " _ |_||_|" : 8,
        
            " _ |_| _|" : 9
          }
      
        rawDigitStringsArray = ["", "", "", "", "", "", "", "", ""];
        
        
        processedInput = input.split('\n');
        
        for (i = 1; i < 4; i++) {
            splitByThrees = processedInput[i].match(/.{1,3}/g);  //split the 27 characters into chunks of 3
            for (j = 0; j < 9; j++) {
                rawDigitStringsArray[j] += splitByThrees[j];
            }
        }
        output = "";
        for (rawDigit of rawDigitStringsArray) {
            if (rawDigitStringsLookupTable[rawDigit] === undefined) {
                output += "?";
            } else {
                output += rawDigitStringsLookupTable[rawDigit];
            }
        }

        return output;

    },

    writeResults: (input)=> {

        if (input.includes("?")) {
            return input + " ILL";
        }
        else if (validator.validate(input) === false) {
            return input + " ERR";
        }
        else {
            return input;
        }
    }
}