import axios from 'axios';
import React,{useState} from 'react' 

export default function Calc(){
    const [inputs, setInputs] = useState({})
    const [result, setResult] = useState('')
    const {num1, opcode, num2} = inputs;

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({...inputs, [name]: value})
    }
    const handleClick = (e) => {
        e.preventDefault()
        const res = {num1, num2, opcode}
        alert(`결과 : ${JSON.stringify(res)}`)
        axios.post('http://localhost:5000/api/basic/calc', inputs)
        .then(res => {
            alert(JSON.stringify(res.data))
            setResult(JSON.stringify(res.data))
        })
        .catch(err => alert(err))
    }
    return <>
    <h1>Calc폼</h1>
    <form action=""> 
    <label><b>num1</b></label>
    <input name ="num1" type="text" onChange={handleChange} /><br />

    <label htmlFor=""><b>opcode</b></label>
    <select name="opcode" id=""onChange={handleChange}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
        <option value="%">%</option>
    </select>
    
    <br />

    <label htmlFor=""><b>num2</b></label>
    <input name="num2" type="text" onChange= {handleChange} /><br />

    <button onClick={handleClick}>전 송</button>
    </form>
    <div>계산결과 : {result}</div>


    </>
}