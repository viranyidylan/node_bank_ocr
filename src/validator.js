module.exports = {
    /**
     * This is just a placeholder, implement however you like!
     */
    validate: (input)=>{
        checksumTotal = 0;
        for(i = 0; i < 9; i++) {
          checksumTotal += Number(input[8-i]) * (i+1);
        }
        checksumCalculation = checksumTotal % 11;
        if (checksumCalculation === 0) {
          return true;
        } else {
          return false;
        }
    }
}