
const { doctorSignUp } = require("../../database/model");
const  model = require("../../database/model");



function doctorLogin(req,res,next){
    model.doctorLogin(req.email).then(doctor => {


        if(doctor){




        }
       
       

        res.status(200).send(1);
        next();
       }

);



}

module.exports = doctorLogin ;