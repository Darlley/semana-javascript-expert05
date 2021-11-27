import https from 'https'
import fs from 'fs'
import { logger } from './logger.js'
import { Server } from 'socket.io'

const PORT = process.env.PORT || 3000
const localHostSSL = {
    key: fs.readFileSync('/.certificates/key.pem'),
    cert: fs.readFileSync('/.certificates/cert.pem')
}
const server = https.createServer(
    localHostSSL,
    (req, res) => {
        res.end('hello word')
    }
)

const startServer = () => {
    const {addres, port} = server.addres()
    logger.info(`Servidor disponível em https://${addres}:${port}`)
}

server.listen(PORT, startServer)