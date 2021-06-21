import express, { response } from 'express'

// @types/express
const app = express()


/**  
* GET => Buscar uma informação
* PUT => Inserir (Criar) uma informação
* POST => Alterar uma informação
* DELETE => Remover um dado
* PATCH => Alterar uma informção especifica
*/

app.get("/test", (req, res) => {
    // Request => Entrando
    // Response => Saindo
    return res.send("Olá NLW")
})

app.post("/test-post", (req,res) => {
    return res.send("Olá NLW método POST")
})

// https://localhost:3000
app.listen(3000, () => console.log("Server is running NLW")
)