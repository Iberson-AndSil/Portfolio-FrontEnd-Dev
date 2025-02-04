import { useState, useEffect } from 'preact/hooks';
import "../style/carousel.css";
import "../style/fonts.css";

type Technology = {
  icon: string;
  name: string;
};

type Project = {
  description: string;
  image: string;
  link: string;
  technologies: Technology[];
};

const Carousel = ({ projectData }: { projectData: Project[] }) => {
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

  const slidesToShow = windowWidth < 768 ? 1 : 2;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectData.length - slidesToShow : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectData.length - slidesToShow ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container w-4/5 mx-auto">
      <div className="carousel-slides flex space-x-4">
        {projectData.slice(currentIndex, currentIndex + slidesToShow).map((project, idx) => (
          <div key={`${project.description}-${idx}`} className="flex flex-col w-80 h-auto">
            <div className="relative rounded-lg overflow-hidden shadow-lg border-solid border-slate-300 border-2">
              <img src={project.image} alt={project.description} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-black opacity-10"></div>
              <a href={project.link} target="_blank" rel="noopener noreferrer"
                className="absolute rounded-full bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-[#245bb1] poppins-light
                  text-slate-200 hover:bg-slate-200 hover:text-slate-600 transition text-sm">
                Deployment</a>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-white">{project.description}</span>
              <div className="flex"> {project.technologies.map((tech) => (
                <img key={tech.name} className="w-6 mx-1" src={tech.icon} alt={tech.name} />
              ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="flex items-center justify-center carousel-control carousel-control-prev rounded-full" onClick={prevSlide}>
        <img className="h-5" src="right.png" alt="Previous" />
      </button>
      <button className="flex items-center justify-center carousel-control carousel-control-next rounded-full" onClick={nextSlide}>
        <img className="h-5" src="left.png" alt="Next" />
      </button>
    </div>
  );
};

export default Carousel;
