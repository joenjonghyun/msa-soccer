import axios from "axios"
import { useState } from "react"

export default function Join(){
    const [inputs, setInputs] = useState({})
    const handleChange = e => {
        e.preventDefault()
        const {name, value} = e.target 
        setInputs({...inputs, [name]:value})
    }
    const handleSubmit = e => {
        e.preventDefault()
        alert(`등록할 회원정보 : ${JSON.stringify(inputs)}`)
        axios.post('http://localhost:5000/api/user/signup',inputs).then(res=>{
            alert(`결과: ${res.data.result}`)
        }).catch(err=>{alert(err)})
    }
    return (<div>
    <form action = "" onSubmit={handleSubmit} >

    <h1>회원가입폼</h1> 
    <div>
        <label><b>사용자 ID</b></label>
        <input type="text" name='username' onChange={handleChange}/><br />

        <label htmlFor=""><b>비밀번호</b></label>
        <input type="text" name='password' onChange={handleChange}/><br />

        <label><b>이름</b></label>
        <input type="text" name='name' onChange={handleChange}/><br />

        <label><b>전화번호</b></label>
        <input type="text" name='telephone' onChange={handleChange}/><br />
    </div>
    <button >전 송</button><button>취 소</button><br />
    </form>
    <div><span id="result-span">결과</span></div>
    </div>)}


    