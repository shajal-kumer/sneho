import Image from "next/image";
import Slider from "react-slick";
import slideImage from "../image/slider-img.png";

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div className={className} style={{ ...style }} onClick={onClick}>
			<i className="ri-arrow-right-s-line"></i>
		</div>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div className={className} style={{ ...style }} onClick={onClick}>
			<i className="ri-arrow-left-s-line"></i>
		</div>
	);
}

export default function HeroSlider() {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		pauseOnHover: true,
		slidesToShow: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		customPaging: (i) => <div>{i + 1}</div>,
	};

	const slides = [1, 2, 3];
	return (
		<div className="container mx-auto h-600">
			<Slider {...settings}>
				{slides.map((index) => (
					<div key={index} className="bg-pink-200 h-full">
						<Image src={slideImage} alt="Slider Image" className="w-full" />
					</div>
				))}
			</Slider>
		</div>
	);
}
