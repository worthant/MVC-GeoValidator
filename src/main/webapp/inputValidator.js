export default class inputValidator{
    constructor(responseCode, message) {
        this.responseCode = responseCode;
        this.message = message;
    }
    validate(xVal, yVal, rVal){
        if (![-4, -3, -2, -1, 0, 1, 2, 3, 4].includes(xVal)) {
            this.message = "The X value should be something from this array: [-4, -3, -2, -1, 0, 1, 2, 3, 4]";
            this.responseCode = 0;
        } else if (!(-3 < yVal && yVal < 5)){
            this.message = "The Y value should be in (-3, 5) interval";
            this.responseCode = 0;
        } else if (!(2 < rVal && rVal < 5)){
            this.message = "The R value should be in (2, 5) interval";
            this.responseCode = 0;
        } else {
           this.responseCode = 1;
        }
    }

    validateR(rVal) {
        if (!(2 < rVal && rVal < 5)){
            this.message = "The R value should be in (2, 5) interval";
            this.responseCode = 0;
        } else {
            this.responseCode = 1;
        }
    }

    getResponseCode(){
        return this.responseCode;
    }
    getMessage(){
        return this.message;
    }
}