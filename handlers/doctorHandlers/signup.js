

const  model = require("../../database/model");



function doctorSignUp(req,res,next){
    const doctor = req.body; 
    model.getDoctorsEmail().then(emails=> { 

        const emailsArr = emails.map(elem => elem.email);
        const Valied = emailsArr.every(elem=> {
            elem !== doctor.email;
        })

        if(Valied){
        
            model.doctorSignUp(doctor).catch(err=>console.log(err));
            res.status(200);
            next();
        }

        else {
        const error = new Error ("Invalied Email");
        error.status=404;
       
       next(error)
        }

    }).catch(err=> console.log(err));
  

}



module.exports = doctorSignUp;