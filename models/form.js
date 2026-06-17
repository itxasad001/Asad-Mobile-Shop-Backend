import mongoose, { mongo } from 'mongoose'

const FormSchema = new mongoose.Schema({


     product:{type:String},price:{type:String},
     
     sold:{type:Number},customer:{type:String},
     desc:{type:String},

        profit:{type:String}


},{timestamps:true})

const FormModel = mongoose.model('internationalclients',FormSchema)


export default FormModel


