import { env } from '../env'
import { dataSource } from '../typeorm'
import { app } from './app'

dataSource
  .initialize()
  .then(() => {
    app.listen(env.PORT, () => {
      console.log(`Server is running on http://localhost:${env.PORT}`)
      console.log(`API docs available at http://localhost:${env.PORT}/docs`)
    })
  })
  .catch(error => {
    console.error('Error during Data Source initialization:', error)
  })
