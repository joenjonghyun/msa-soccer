import React, {useState} from 'react'
export default function Login (){
   /* const [id, setId] = useState("")
    const [pw, setPw] = useState(0)
    const [name, setName] = useState("")
    const res =()=>{
    let id = document.getElementById('id').value
    let pw = document.getElementById('pw').value
    let name = document.getElementById('name').value
    setId(id)
    setPw(pw)
    setName(name)*/
    const [inputs, setInputs] = useState([])
    const [pw, name] = inputs
    const onChange =(e)=>{
        e.preventDefault()
        const {value, id} = e.target
        setInputs({
            ...inputs, [id] : value
        })
    }
    const onClick = (e)=> {
        e.preventDefault()
        const res = {name, pw}
        alert(`사용자 이름 : ${JSON.stringify(res)}`)
    }
    return <><h1>로그인</h1>
  
    <div>

    <label><b>이름</b></label>
    <input type="text" onChange={onChange} id="name" /><br />

    <label htmlFor=""><b>비밀번호</b></label>
    <input type="text" onChange={onChange} id="pw" /><br />

    <button onClick={onClick}>로그인</button><br />
    <label><input type="checkbox" />Remember me</label><br />
    </div>
    </>
    
    
    
}
;