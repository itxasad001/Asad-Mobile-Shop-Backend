
import {Router} from 'express'
import { DatabyOneDate, Elements, FormController, GroupByDates, LastSevenDays, SubElements } from '../controllers/form.controllers.js'

const FormRouter = Router()


FormRouter.post('/form-post',FormController)
FormRouter.get('/form-subget',SubElements)
FormRouter.get('/form-get',Elements)
FormRouter.get('/form-dateget',DatabyOneDate)
FormRouter.get('/form-datesget',GroupByDates)
FormRouter.get('/form-sevenget',LastSevenDays)
export default FormRouter