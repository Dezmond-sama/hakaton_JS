import dotenv from 'dotenv'

dotenv.config({
	path: `${__dirname}/env/.${process.env.NODE_ENV}.env`
})


import express from 'express'
import cookieParser from 'cookie-parser'
import {sequelize} from './sequelize'
import router from './router'


const app = express();

const PORT = process.env.PORT || 8080

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api", router)

async function start(){
	try{
		await sequelize.sync({alter: true, force: true})
		console.log("[OK] Sequelize synced!")
		app.listen(PORT)
		console.log(`[OK] Server is started on port ${PORT}`)
	}catch(e){
		console.log("[ERR] Server failed!")
	}
}

start();