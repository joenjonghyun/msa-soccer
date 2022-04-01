import React, { useState } from 'react';
export default function Bmi() {

    const [inputs, setInputs] = useState({})
    const { name, height, weight } = inputs
    const [result, setResult] = useState(``)

    const onChange = (e) => {
        e.preventDefault()
        const { value, name } = e.target
        setInputs({ ...inputs, [name]: value })
    }

    const onClick = async (e) => {
        e.preventDefault()
        const res = {name, height, weight}
        alert(`BMI결과 : ${JSON.stringify(res)}`)
    }
    return (<div>
        <form action="">
            <h1>BMI</h1>
            <div>
                <label htmlFor="">이름</label>
                <input type="text" name="name" onChange={onChange} /><br />

                <label htmlFor="">키</label>
                <input type="text" name="height" onChange={onChange} /><br />

                <label htmlFor="">몸무게</label>
                <input type="text" name="weight" onChange={onChange} /><br />

                <div>이름 : {inputs[`name`]} 키 : {inputs[`height`]} 몸무게 : {inputs[`weight`]} </div>

                <input type="button" onClick={onClick} value="BMI 체크" /><br />

            </div>
        </form>
        <div> 결과 : {result}</div>
    </div>)
}