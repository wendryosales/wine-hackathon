import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Banner from '../../components/banner';
import Footer from '../../components/footer';
import Header from '../../components/header';
import WinesList from '../../components/wines';
import fetchWines from '../../redux/actions';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    function getWines() {
      dispatch(fetchWines());
    }
    getWines();
  }, []);

  return (
    <div className="home">
      <Header />
      <div className="main">
        <Banner />
        <WinesList />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
