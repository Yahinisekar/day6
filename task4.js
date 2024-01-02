
//4. write a class to calculate the Uber price.
class UberPrice{
    constructor(baseFare,distance,duration,costPerMile,costPerMinute) {
        this.baseFare = baseFare;
        this.distance = distance;
        this.duration = duration;
        this.costPerMile = costPerMile;
        this.costPerMinute = costPerMinute;

    }
    totalFare() {
    return (
                this.baseFare +
                this.distance * this.costPerMile +
                this.duration * this.costPerMinute
            );

    }
}
const price1 = new UberPrice(5, 3, 20, 75, 1.5)
console.log("The total fare is: " + price1.totalFare()) 