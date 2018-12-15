class Booking {
    constructor(startDate, endDate){
        this.startDate = startDate
        this.endDate = endDate
    }
    numberOfDays(){
        return Math.round(Math.abs((this.startDate.getTime() - this.endDate.getTime())/(1000*60*60*24))+1)

    }  
}


module.exports = Booking