import './App.css';
import Navbarr from './components/Navbarr';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
import Card4 from './components/Card4';
import Footer from './components/Footer';
import Sliderr from './components/Sliderr';
function App() {
  return (
    <>
   <Navbarr/>
    {/* creation h1 */}
    <h1>welcome to my shop</h1>
    <Sliderr/>
    {/* appel card 1 */}
    <div className='cards'>
      <Card1/>
    {/* appel card 2 */}
    <Card2/>
    {/* appel card 3 */}
    <Card3/>
    <Card4/>
    </div>
    {/* appel footer */}
    <Footer/>
    </>
    
  );
}

export default App;
