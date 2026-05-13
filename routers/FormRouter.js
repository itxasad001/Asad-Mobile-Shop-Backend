
import {Router} from 'express'
import { DatabyOneDate, DeleteSub, Elements, FormController, GroupByDates, LastSevenDays, MonthlyData, OneDate, SearchData, SubElements, YearlyData } from '../controllers/form.controllers.js'

const FormRouter = Router()


FormRouter.post('/form-post',FormController)
FormRouter.get('/form-subget',SubElements)
FormRouter.get('/form-get',Elements)
FormRouter.get('/form-dateget',DatabyOneDate)
FormRouter.get('/form-datesget',GroupByDates)
FormRouter.get('/form-sevenget',LastSevenDays)
FormRouter.get('/form-date',OneDate)
FormRouter.delete('/form-subdelete',DeleteSub)
FormRouter.get('/form-year',YearlyData)
FormRouter.get('/form-month',MonthlyData)
FormRouter.get('/form-search',SearchData)
export default FormRouter