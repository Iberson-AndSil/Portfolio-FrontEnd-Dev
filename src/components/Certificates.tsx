import { useState, useEffect } from 'preact/hooks';
import "../style/carousel.css";
import "../style/fonts.css";

type Cert={
    root:string;
    description:string;
    link:string;
}

const Certificates = ({certificates}: {certificates:Cert[]}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const slidesToShow = windowWidth < 768 ? 1 : 1;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? certificates.length - slidesToShow : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === certificates.length - slidesToShow ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container mt-5 w-4/5 md:w-auto mx-auto">
       <p class="text-white text-center text-xl md:text-2xl mb-3 mt-4 md:mt-0 font-normal">
        Certificates
        </p>
      <div className="carousel-slides flex space-x-4">
        {certificates.slice(currentIndex, currentIndex + slidesToShow).map((cert, idx) => (
            <div key={`${cert.description}-${idx}`} className="flex flex-col w-80 h-auto md:w-auto">
              <div className="relative rounded-lg overflow-hidden shadow-lg md:h-full">
                <img src={cert.root} alt={cert.description} className="w-full md:w-auto h-48 md:h-[28rem] object-cover"/>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <a href={cert.link} target="_blank" rel="noopener noreferrer"
                  className="absolute rounded-full bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-[#245bb1] poppins-light
                  text-slate-200 hover:bg-slate-200 hover:text-slate-600 transition text-sm">
                  Verify</a>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-white w-auto">{cert.description}</span>
              </div>
            </div>
          ))}
      </div>
      <button className="flex items-center justify-center carousel-control carousel-control-prev rounded-full" onClick={prevSlide}>
        <img className="h-5" src="right.png" alt="Previous"/>
      </button>
      <button className="flex items-center justify-center carousel-control carousel-control-next rounded-full" onClick={nextSlide}>
        <img className="h-5" src="left.png" alt="Next" />
      </button>
    </div>
  );
};

export default Certificates;
