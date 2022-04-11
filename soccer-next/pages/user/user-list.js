import axios from 'axios';
import { useEffect, useState } from 'react';
import style from 'common/style/table.module.css'
import Link from 'next/link'
const Table = ({ columns, colspan, data}) => {
    return (
      <table className={style.table}>
        <thead>
            <tr className={style.tr}  >
            {columns.map((column, index) => (
                  <th className={style.td} key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
                { data.length == 0  ?<tr className={style.tr}>
                                      <td colSpan={colspan} className={style.td}>데이터가 없습니다</td>
                                      </tr>
                :data.map((user) => (
                <tr className={style.tr}  key={user.username} >
                  <td className={style.td}>
                    <Link href={{pathname:`/user/[username]`,
                                query:{selectedUser: 'test'}}} as={`/user/${user.username}`}>
                      <a>{user.username}</a>
                    </Link>
                    
                  </td>
                  <td className={style.td}>{user.password}</td>
                  <td className={style.td}>{user.name}</td>
                  <td className={style.td}>{user.telephone}</td>
                </tr>
            ))}
            
        </tbody>
      </table>
    );
  }
  
export default function UserList(){

    const columns = ["username", "password", "name", "telephone"];
    const [data, setData] = useState([])
    useEffect(()=>{
      axios.get('http://localhost:5000/api/user/list').then(res=>{
        setData(res.data.users)
      }).catch(err=>{})
    },[])
    return(<>
        <h1>사용자 목록</h1>  
        
        <div className={style.td}>
        <Table columns={columns} colspan={4} data={data}/>
        </div>
        </>)
}