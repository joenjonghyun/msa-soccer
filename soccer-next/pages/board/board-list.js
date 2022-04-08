import style from "common/style/table.module.css"
import axios from "axios"
import { useEffect, useState } from "react"
const Table = ({columns, colspan, data}) =>{
    return (
        <table className={style.table}>
        <thead>
            <tr className={style.table}>
            {columns.map((column) => (
                <th key = {column} className={style.td}>{column}</th>
            ))}
            </tr>
        </thead>
        <tbody>
                { data.length == 0 ?<tr className={style.tr}>
                                    <td colSpan={colspan} className={style.td}>데이터가없습니다</td>
                                    </tr>
                :data.map((user)=>(
                <tr className={style.tr} key={user.passengerId}>
                    <td className={style.td}>{user.passengerId}</td>
                    <td className={style.td}>{user.name}</td>
                    <td className={style.td}>{user.teamId}</td>
                    <td className={style.td}>{user.subject}</td>
                    </tr>
                ))}

        </tbody>
        </table>    
    )
}
export default function BoardList(){
    const columns = ["passengerId","name", "teamId", "subject"]
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/api/board/list').then(res=>{
            setData(res.data.Boards)
        }).catch(err=>{})
    },[])
    return(<>
        <h1>게시판리스트</h1>
        <div className={style.td}>
        <Table columns={columns} colspan={4} data = {data}/>
        </div>

        </>)
}