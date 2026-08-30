import mongoose, { mongo } from 'mongoose'

const FormSchema = new mongoose.Schema({


     product:{type:String},price:{type:Number},
     
     sold:{type:Number},customer:{type:String},
     desc:{type:String},
        profit:{type:Number}


},{timestamps:true})

const FormModel = mongoose.model('ShopData',FormSchema)


export default FormModel


