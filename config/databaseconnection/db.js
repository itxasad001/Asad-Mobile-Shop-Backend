import mongoose from 'mongoose'

export async function Database(req,res){



    try{

        const mongooseconnect = await mongoose.connect(process.env.URL).then(res => {


                console.log("Database Connected Successfully")


        })
        .catch(err => err)








    }
    catch(error){




    }







}