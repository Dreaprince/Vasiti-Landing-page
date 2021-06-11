import Hero from './component/Hero';
import InfoSect from './component/InfoSect';
import Navbar from './component/Navbar';
import Home from './HomePage/Home';
import Footer from './component/Footer';
import GlobalStyle from './globalStyles';
import {homeObjThree} from './HomePage/Data';
import TopFooter from './component/TopFooter';
import { SLiderData, SLiderDataTwo } from './data/SliderData';
import Share from './component/Share';
import Thankyou from './component/Thankyou';
import { Switch, Route } from 'react-router';




function App({openModal,showModal,setShowModal}) {
  return (
    <>
     <GlobalStyle />
     <Navbar openModal={openModal} />
     <Home />
     <Hero slides={SLiderData}/>
     <InfoSect {...homeObjThree} />
     <Hero slides={SLiderDataTwo} />
     <TopFooter />
     <Footer /> 
     <Switch>
        <Route path="/share" component={Share} />
        <Route path="/thankyou" component={Thankyou} />
     </Switch>
     {/* <Share showModal={showModal} setShowModal={setShowModal} /> */}
    </>
  );
}

export default App;
