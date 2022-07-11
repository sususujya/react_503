const Wrap = ({ children }) => {
    return (
        // <div style={{ border: "1px solid #f00", padding: 100, borderLeft: '5px solid #f0f' }}>
        <div>
            {children}
        </div>
    )
}

// 그냥 wrap으로 감싸주면 빈 파일이 나온다. children을 넣어주면 뜸

export default Wrap;