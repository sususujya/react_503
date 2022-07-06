import Slider from "react-slick";
import './slick.min.css';


const MainVisual = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <Slider {...settings}>
                <figure className="item01">
                    <div className="inner">
                        <h2>01. Hello World</h2>
                        <p>say hello to the world</p>
                    </div>
                </figure>
                <figure className="item02">
                    <div className="inner">
                        <h2>02. Hello World</h2>
                        <p>say hello to the world</p>
                    </div>
                </figure>
                <figure className="item03">
                    <div className="inner">
                        <h2>03. Hello World</h2>
                        <p>say hello to the world</p>
                    </div>
                </figure>
            </Slider>
        </>
    )
}

export default MainVisual;