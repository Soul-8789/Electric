const mongoose = require('mongoose') ;

// const dataSchema = mongoose.Schema({
//       DateGen:{
//             type: Date,
//       },
//       PreviousBalance:{
//             type: String,
//       },
//       CurrentCharges:{
//             type:String
//       },
//       TotalDue:{
//             type:String
//       },
//       LastPayment:{
//             type:String
//       },
// })

const printSchema = mongoose.Schema({
      Code:{
            type:String
      },
      Data:[{
            DateGen:{
                  type: Date,
            },
            PreviousBalance:{
                  type: String,
            },
            CurrentCharges:{
                  type:String
            },
            TotalDue:{
                  type:String
            },
            LastPayment:{
                  type:String
            },
      }],
      
}) ;

module.exports = mongoose.model("print", printSchema) ;