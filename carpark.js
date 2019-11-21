// Car Park
// Let’s continue with our car park project.
// Add a subclass for staff, so that staff can provide their
// staff number, and credits they have left to pay for the
// car park fees.
// Given a staff member parked for 5 hours as before,
// show how much it will be charged and remaining
// balance.
//----------------------------------------------------------------------------------------------
class vehical{
    constructor(regnum){
    this._regnum = regnum;
    this._hours = 0;
    this._charge = 0.00;
    } 
    get regnum(){
    return this._regnum;
    }
    get hours(){
    return this._hours;
    }
    get charge(){
    return this._charge;
    }
    increaseHours(){
    this._hours++;
    this._charge += 1.50;
    }
   }


const pay = (reg, hr) => {
    const car = new vehical(reg);
    for (i = 0; i < hr; i++){
    car.increaseHours();
    }
    console.log(`You need to pay £${car.charge} for ${car.hours} hours.`);
   }
   
pay("M7 CAR", 5); 


class staffCar extends vehical {
    constructor(regnum, staffnumber){
        super(regnum);
    this._staffnumber = staffnumber;
    this._staffhours = 0;
    this._staffcharge = 0.00;
    }
    get number(){
        return this._staffnumber;
    }
    get hours(){
        return this._staffhours;
    }
    get charge(){
        return this._staffcharge
    }
    increaseStaffHours(){
        this._staffhours++;
        this._staffcharge += 1.00
    }
}
const staffPay = (staffnumber,staffhour) =>{
    const staffInstance = new staffCar(staffnumber);
    for (i = 0; i < staffhour; i++){
        staffInstance.increaseStaffHours();
    }
    console.log(`You need to pay £${staffInstance.charge} for ${staffInstance.hours} hours.`);
}

   staffPay("234121", 5);