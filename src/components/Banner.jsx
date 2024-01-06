import { useEffect, useState } from "react";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";


const Banner = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliderImages = [
    { img: "https://i.ibb.co/KG5ZHhn/download.jpg" },
    { img: "https://i.ibb.co/pW3R5D1/images.jpg" },
    { img: "https://i.ibb.co/txGTYQ9/tiger.jpg" },
    { img: "https://i.ibb.co/mbGZPmr/images-1.jpg" },
  ];

  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? sliderImages.length - 1 : currentSlider - 1
    );
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === sliderImages.length - 1 ? 0 : currentSlider + 1
    );

  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlider]);
  return (
    <div className="max-w-[9000px] mx-auto h-[340px] md:h-[670px] flex flex-col lg:flex-row items-center overflow-hidden gap-5 lg:gap-10">
      <div className="relative overflow-hidden">
        {/* arrow */}
        <div className="absolute w-full h-full flex items-center justify-between z-50 px-5">
          {/* arrow left */}
          <button
            onClick={prevSlider}
            className="flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
          >

            <MdArrowBackIos></MdArrowBackIos>
          </button>
          {/* arrow right */}
          <button
            onClick={nextSlider}
            className="flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
          >
           <MdArrowForwardIos></MdArrowForwardIos>
          </button>
        </div>
        {/* dots */}
        <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
          {sliderImages.map((_, inx) => (
            <button
              key={inx}
              onClick={() => {
                setCurrentSlider(inx);
              }}
              className={`rounded-full duration-300 bg-white ${currentSlider === inx ? "w-10" : "w-2"
                } h-2`}
            ></button>
          ))}
        </div>
        {/* slider container */}
        <div
          className="ease-linear duration-300 flex transform-gpu relative"
          style={{ transform: `translateX(-${currentSlider * 100}%)` }}
        >
          {/* sliders */}
          {sliderImages.map((slide, inx) => (
            <div key={inx} className="min-w-full duration-200">
              <img
                src={slide.img}
                className="w-full h-[340px] md:h-[670px] object-cover"
                alt={`Slider - ${inx + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;