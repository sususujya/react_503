const TodoList = ({ todolist, setTodolist }) => {

    const onDelete = (num) => {
        console.log(num)
        //filter((element)=>조건이 참인것을 새배열로 반환)
        setTodolist(todolist.filter(el => el.id !== num))
    }


    return (
        <div className="TodoListWrap">
            <h2>{todolist.length ? <strong>오늘의 할 일은 {todolist.length}개</strong> : <span>일 다 해버림</span>}</h2>
            <hr />
            <ul className="TodoList">
                {
                    todolist.map(el => <li key={el.id}>{el.content} <span><i className="xi-close closeBtn" onClick={() => onDelete(el.id)}></i></span></li>)
                    //todolist.map(el => <li key={el.id}>{el.content}</li>).reverse().slice(0, 4)
                    //리버스는 뒤집는거
                    //슬라이스는 0 부터 4까지 이런식으로 잘림
                }
            </ul>
        </div>

    )


}

export default TodoList;