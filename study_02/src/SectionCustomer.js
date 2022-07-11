const SectionCustomer = ({ name, age, color }) => {
    // console.log(typeof { props })
    // console.log(props, typeof (props));

    return (
        <div style={{ color: color }}>
            {name}&nbsp; {age}
        </div>
    )
}

// props는 위에 있는거를 가져와서 뿌려줄 수 있다. 위에있는거는 저기 있는 name~~~

SectionCustomer.defaultProps = {
    age: 'LT2'
}
// ^^^ 만약에 가져온 값이 하나 비었을때 이렇게 표현

export default SectionCustomer;