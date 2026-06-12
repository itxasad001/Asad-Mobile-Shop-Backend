import mongoose, { mongo } from 'mongoose'

const FormSchema = new mongoose.Schema({


     product:{type:String},price:{type:String},
     
     sold:{type:String},customer:{type:Number},
     desc:{type:String},
        profit:{type:String}


},{timestamps:true})

const FormModel = mongoose.model('jobs',FormSchema)


export default FormModel


