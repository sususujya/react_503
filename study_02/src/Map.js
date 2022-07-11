const Map = () => {
    const DATA = [
        { id: 1, name: "LT", title: "Best Songwriter Ever", content: "Everybody waiting for his next album", src: './img/lesedilarona01.jpg' },
        { id: 2, name: "Louis", title: "Best Singer", content: "Everybody admire his next album", src: './img/lesedilarona02.jpg' },
        { id: 3, name: "Tomlinson", title: "Best Artist", content: "Everybody joined his album", src: './img/lesedilarona03.jpg' },
        { id: 4, name: "LouisTomlinson", title: "Best Perfomer", content: "Everybody love his album", src: './img/lesedilarona04.jpg' },
    ]
    return (
        <section className="customer">
            <ul>
                {
                    // DATA.map(elm => <li>{elm.name} is {elm.title} and {elm.content}</li>)
                    DATA.map((elm, idx) =>
                        <li key={elm.id}>
                            <div className="box"><img src={elm.src} alt="WOW" /></div>
                            <strong>{elm.name} is {elm.title} and '{elm.content}'</strong>
                        </li>
                    )
                    // ^^^ 보통은 안 쓴다
                }
            </ul>
        </section>
    )
}

export default Map;