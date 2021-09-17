import { Router, request, response, Request, Response} from 'express'
import { getCadastros, saveCadastro, getCadastro } from './controller/CadastroController'
 
import { getTasks, saveTask, getTask, updateTask, deleteTask, finishedTask } from './controller/tasksController'

const routes = Router()
 
routes.get('/home', (request: Request, response: Response) => {
    return response.json({ message: 'Hello Turma 007tinho!' })
})

routes.get('/tasks', getTasks)
routes.post('/tasks', saveTask)
routes.get('/tasks/:id', getTask)
routes.put('/tasks/:id', updateTask)
routes.delete('/tasks/:id', deleteTask)
routes.patch('/tasks/:id', finishedTask)


routes.get('/cadastro', getCadastros)
routes.post('/cadastro', saveCadastro)


 
export default routes
