import { useRef } from "react";
//document.query... 이런거 리액트에서 안 쓴다. useRef 쓴다.


function Header() {

    const toggleBanner = useRef(null);
    // const toggleClass = () => {
    //     toggleBanner.current.classList.toggle('on');
    // };
    const toggleClass = e => {
        toggleBanner.current.classList.toggle('on');
        e.target.classList.toggle('on');
    };
    // ^^ 이렇게 하면 this에도 on이 붙는다

    return (
        <>
            <header className="header">
                <div className="top_banner">
                    <div className="container" ref={toggleBanner}>
                        <h2>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h2>
                        <p>"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</p>
                    </div>
                    <i className="xi-arrow-top" onClick={toggleClass}></i>
                </div>
            </header>
        </>
    )
}

export default Header;