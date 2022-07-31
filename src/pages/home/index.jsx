import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import fetchWines from '../../redux/actions';
import WinesList from '../../components/wines';
import Banner from '../../components/banner';
import Header from '../../components/header';
import Footer from '../../components/footer';

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
      <footer><Footer /></footer>
    </div>
  );
}

export default Home;
