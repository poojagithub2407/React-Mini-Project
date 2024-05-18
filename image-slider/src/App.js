import { useState } from 'react';
import './App.css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

function App() {
  const images = [
    'https://plus.unsplash.com/premium_photo-1674744513777-fd836d735a54?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFrZXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1615827690357-1f4db574486b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFrZXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1485550409059-9afb054cada4?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1580819813411-ae5761ff1588?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://media.istockphoto.com/id/1206396318/photo/red-roses.webp?s=170667a&w=0&k=20&c=JPCcXpiiEdmVw9OQ6EspVbKQpC16gp8rL0zusyLiBq8='
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextSlide = () => {
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div>
      <h1>Image Slider</h1>
      <div className="parentContainer">
        <div className="imageContainer">
          <button className="arrow pre" onClick={handlePrevSlide}>
            <MdKeyboardArrowLeft />
          </button>
          <img src={images[currentIndex]} alt="Slide" />
          <button className="arrow next" onClick={handleNextSlide}>
            <MdKeyboardArrowRight />
          </button>
          <div className="indicatorContainer">
            {images.map((_, index) => (
              <span
                key={index}
                className={index === currentIndex ? 'indicator active' : 'indicator'}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
