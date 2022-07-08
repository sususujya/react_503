import Slider from "react-slick";
import './slick.min.css';

// const ITEM = document.querySelectorAll('.mainSlider figure');/
// const ITEM[1].classList.add('on');
const MainVisual = () => {
    const settings = {
        allows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: index => {
            const ITEM = document.querySelectorAll('.mainSlider figure');
            ITEM.forEach(ele => ele.classList.remove('on'))
            ITEM[index + 1].classList.add('on');
            // console.log(index, ITEM)
        }
    };
    return (
        <>
            <Slider className="mainSlider" {...settings}>
                <figure className="item01 on">
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