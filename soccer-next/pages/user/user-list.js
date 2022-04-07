import style from "common/style/table.module.css";

const Table = ({ columns, colspan, data}) => {
    return(
    <table className={style.table}>
        <thead>
        {/**<th key={column} className={style.td}>{column}</th> */}
            <tr className={style.tr}>
                {columns.map((column) => (
                    <th key={column.username} className={style.td}>{column}</th>
                ))}
        </tr>
        </thead>
        <tbody>
            <tr className={style.tr}>
                { data.length == 0 ? <td colSpan={colspan} className={style.td}>데이터가없습니다</td>
                :<td colSpan={colspan} className={style.td}>데이터가있습니다</td>}
            </tr>
        </tbody>
        </table>
    );
}
export default function UserList(){
    const columns = ["username", "password", "name", "telephone"];
    const data = []
    const count = data.length
    return (<>
        <h1>회원목록</h1>
        {count !=0 && <h3>회원수 : {count} 명</h3>}
        <div className={style.td}> 
        <Table columns={columns} colspan={4} data = {data}/>
        </div>
        </>
    ) 
}