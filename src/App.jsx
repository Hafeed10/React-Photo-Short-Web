
import './App.css';
import Aboutpage from './compones/Aboutpage';
import Gallerypage from './compones/Gallerypage';
import Homepage from './compones/Homepage';
import Navabar from './compones/Navabar';
import CylinderGallery from './compones/CylinderGallery';
import Service from './compones/Service'
import Slide from './compones/Slide';
import Footerpage from './compones/Footerpage';
function App() {
  return (
   <>
   <Navabar/>
   <Homepage/>
   <Aboutpage/>
   <Gallerypage/>
   <Service/>
   <CylinderGallery/>
   <Slide/>
   <Footerpage/>
   </>
  );
}

export default App;
