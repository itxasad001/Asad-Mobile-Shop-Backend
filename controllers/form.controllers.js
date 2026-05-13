import { model } from "mongoose"
import FormModel from "../models/form.js"

export async function FormController(req,res){




    try{

     const {product,price,sold,customer,desc} = req.body 

     const Price = Number(price)
     const Sold = Number(sold)

     const profit = Sold-Price
    

     console.log(Price)







        const FormElement = new FormModel({


             product,
             price:Price
             ,sold:Sold,customer,desc,profit





        })

        console.log(typeof(FormElement.price))
        await FormElement.save();


        return res.status(200).json({
            success:true,
            error:false,
            data:FormElement
        })
        

    }
    catch(error){


        return res.status(500).json({


            error:true,
            success:false,
            message:error.message || error



        })



    }







}






export async function SubElements(req,res){

    try{


          const start = new Date("2026-5-11");
start.setHours(0,0,0,0);

const end = new Date("2026-5-11");
end.setHours(23,59,59,999);



        const Subelements = await FormModel.find(

            {createdAt:{

                $gt:start,
                $lt:end


            }}
        )

        console.log(Subelements)


        return res.status(200).json({
            error:false,
            success:true,
            data:Subelements
        })


    }
    catch(error){


        return res.status(500).json({
            error:true,
            success:false,
            message:error.message || error
        })


    }




}

export async function Elements(req,res){

    try{

      

        
   const result = await FormModel.aggregate([{

    $group:{
        _id:null,
       price:{$sum:"$price"},
       sold:{$sum:"$sold"}

    }

   }])



   const sales = await FormModel.find().countDocuments()




   const price = result[0].price
   const sold = result[0].sold

   console.log(price)

   const profit = sold - price

   

        return res.status(200).json({
            error:false,
            success:true,
        
            price,sold,profit,sales
        })


    }
    catch(error){


        return res.status(500).json({
            error:true,
            success:false,
            message:error.message || error
        })


    }




}



export async function DatabyOneDate(req,res){



    try{
        const start = new Date("2026-5-11");
start.setHours(0,0,0,0);

const end = new Date();
end.setHours(23,59,59,999);


       const datedata=  await FormModel.find({
  createdAt: {
    $gte: start,
    $lt: end
  }
})


console.log(datedata)


return res.status(200).json({
    error:false,
    success:true,
    data:datedata
})


    }
    catch(error){

        return res.status(500).json({
    error:true,
    success:false,
   message:error.message || error
})







    }
}



export async function GroupByDates(req,res){



    try{
       

const uniqueDates = await FormModel.aggregate([
    {
      $group: {
        _id: {
          $dateToString: {
            format: "%d-%b-%Y",
            date: "$createdAt"
          }
        },
      
   

        price: { $sum: "$price" },
            sold: { $sum: "$sold" },
            profit: { $sum: "$profit" },
        sales: { $sum: 1 } ,
        records: { $push: "$$ROOT" }
   },
    },
    {
      $sort: { _id: -1 } ,
      
    }
  ]);





console.log(uniqueDates)


return res.status(200).json({
    error:false,
    success:true,
    data:uniqueDates
})


    }
    catch(error){

        return res.status(500).json({
    error:true,
    success:false,
   message:error.message || error
})







    }
}



export async function LastSevenDays(req,res){



    try{


        const days = req.query.days


        const sevenDaysAgo = new Date();
sevenDaysAgo.setDate(sevenDaysAgo.getDate() - days);
       
const sevendaysdata = await FormModel.aggregate([
  {
    $match: {
      createdAt: { $gte: sevenDaysAgo }
    }
  },
  {
    $group: {
      _id: {
        $dateToString: {
          format: "%d-%b-%Y",
          date: "$createdAt"
        }
      },
      price: { $sum: "$price" },
      sold: { $sum: "$sold" },
      profit: { $sum: "$profit" },
      sales: { $sum: 1 },
      records: { $push: "$$ROOT" }
    }
  },
  {
    $sort: { _id: 1 }
  }
]);




console.log(sevendaysdata)


return res.status(200).json({
    error:false,
    success:true,
    data:sevendaysdata
})


    }
    catch(error){

        return res.status(500).json({
    error:true,
    success:false,
   message:error.message || error
})







    }
}



export async function OneDate(req,res){



    try{

        

        const date = req.query.date

    console.log(date)

      const  datefirst = new Date(date)
      console.log(datefirst)
    const datelast  = new Date(date)

        const start= datefirst
        start.setHours(0,0,0,0)
        const end = datelast
        end.setHours(23,59,59,99)

        
       

      const dateelement = await FormModel.aggregate([
  {
    $match: {
      createdAt: { $gt: start,
        $lt:end
       }
    }
  },
  {
    $group: {
      _id: {
        $dateToString: {
          format: "%d-%b-%Y",
          date: "$createdAt"
        }
      },
      price: { $sum: "$price" },
      sold: { $sum: "$sold" },
      profit: { $sum: "$profit" },
      sales: { $sum: 1 },
      records: { $push: "$$ROOT" }
    }
  },
  {
    $sort: { _id: 1 }
  }
]);





console.log(dateelement)


return res.status(200).json({
    error:false,
    success:true,
    data:dateelement
})


    }
    catch(error){

        return res.status(500).json({
    error:true,
    success:false,
   message:error.message || error
})







    }
}



export async function DeleteSub(req,res){



    try{

        const _id = req.query._id


        console.log(_id)


        const deletesubelement = await FormModel.findByIdAndDelete({_id:_id}
        
        )

        

        


console.log(deletesubelement)


return res.status(200).json({
    error:false,
    success:true,
    data:deletesubelement
})


    }
    catch(error){

        return res.status(500).json({
    error:true,
    success:false,
   message:error.message || error
})







    }
}





export async function YearlyData(req,res){



    try{

        
  const years = req.query.year

  const year = Number(years)

  
        const start = new Date(year,1,1)

        start.setHours(0,0,0,0)


         const end = new Date(year+1 , 0  , 1)

         end.setHours(23,59,59,99)

         console.log(start,end)

         




        const yeardata = await FormModel.aggregate([{
         
                $match:{

                    createdAt:{
                        $gte:start,
                        $lte:end
                    }

                }
            },{


          $group:{
            _id:null,

            sold:{$sum:"$sold"},
             price:{$sum:"$price"},
              profit:{$sum:"$profit"},
               sales:{$sum:1},
               records:{$push:"$$ROOT"}

           


          },
        },
          {
            $sort:{_id:-1}
        }


    ])


        


return res.status(200).json({
    error:false,
    success:true,
    data:yeardata
})


    }
    catch(error){

        return res.status(500).json({
    error:true,
    success:false,
   message:error.message || error
})







    }
}




