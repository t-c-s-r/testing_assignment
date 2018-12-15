const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-datetime'))

const Booking = require('../models/booking.js')

describe('Booking', ()=> {
    it('should initialize properly', ()=> {
        var booking = new Booking(new Date("2018-09-01"), new Date("2018-09-05"))
        
        expect (booking.startDate).to.equalDate(new Date("2018-09-01")) //=> date object for 2018-09-01
        expect (booking.endDate).to.equalDate(new Date("2018-09-05")) //=> date object for 2018-09-05
        // expect (booking.numberOfDays()).to.equal(5)
        // expect (booking.isAuthorized()).to.equal(false)
        // expect (booking.isAuthorizedBy()).to.equal(null)
        // expect (booking.isAuthorizedOn()).to.equal(null)



    })

    it('should initialize properly', ()=> {
        var booking = new Booking(new Date("2018-09-01"), new Date("2018-09-05"))
        
        expect (booking.numberOfDays()).to.equal(5)
        // expect (booking.isAuthorized()).to.equal(false)
        // expect (booking.isAuthorizedBy()).to.equal(null)
        // expect (booking.isAuthorizedOn()).to.equal(null)



    })
})