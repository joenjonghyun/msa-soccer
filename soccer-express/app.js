require('dotenv').config();
var cors = require('cors')
const express = require('express');
const { clearCookie } = require('express/lib/response');
const res = require('express/lib/response');
const mongoose = require('mongoose');
const app = express();
const { port, MONGO_URI } = process.env;
const APP = './app/routes'
require(`${APP}/board.route`)({url:'/api/board',app})
require(`${APP}/todo.route`)({url:'/api/todo',app})
require(`${APP}/user.route`)({url:'/api/user',app})
require(`${APP}/game.route`)({url:'/api/game',app})
require(`${APP}/admin.route`)({url:'/api/admin',app})
require(`${APP}/basic.route`)({url:'/api/basic',app})
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSucessStatus:200
}
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));
app.listen(port, () => {
  console.log({"현재 시간 : ":new Date().toLocaleString()})
})
app.get('/', (req, res) => {
  res.json({"현재 시간 : ":new Date().toLocaleString()})
})
app.get('/api/now', cors(corsOptions),(req, res) => {
  res.json({"now": new Date().toLocaleString()})
})
app.get('/',(req, res) => {
  res.json({"현재시간 : ":new Data().toLocaleString()})
})
app.get('/api/now', cors(corsOptions),(req, res) => {
  res.json({"now":new Data().toLocaleString()})
})


function computeCalc(payload){
  const {num1, num2, opcode} = payload;
  console.log('### 진입 ### ')
  let_num1 = Number(num1)
  let_num2 = Number(num2)
  var result = {num1, num2, opcode}
  console.log(`계산중인 값들 :${JSON.stringify(result)}`)
  switch (opcode){
    case "+" :
        result.calc = Number(num1) + Number(num2)
        break
    case "-" :
        result.calc = Number(num1) - Number(num2)
        break
    case "*" :
        result.calc = Number(num1) * Number(num2)
        break
    case "/" :
        result.calc = Number(num1) / Number(num2)
        break
    case "%" :
        result.calc = Number(num1) % Number(num2)
        break
  }
  console.log(`계산끝난 값들 : ${JSON.stringify(result)}`)
  return result
}
app.post("/api/basic/calc", (req, res)=>{
  const {num1, num2, opcode} = req.body
  console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
  console.log(`숫자 1 : ${num1}`)
  console.log(`숫자 2 : ${num2}`)
  console.log(`연산자 : ${opcode}`)
  const json = computeCALC({num1, num2, opcode})
  console.log(`계산된 JSON 값 : ${JSON.stringify(json)}`)
  res.json(json)
})
function computeSIGNUP(payload){
  const {username, password, name, telephone} = payload;
  console.log('#### 진입 #### ')
  var result = {username, password, name, telephone}
  console.log(`계산중인 값들 : ${JSON.stringify(result)}`)
}

