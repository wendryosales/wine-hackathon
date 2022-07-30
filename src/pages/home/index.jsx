import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Banner from '../../components/banner';
import fetchWines from '../../redux/actions';
import Header from '../../components/header';

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
        <h2>lista de vinhos aqui</h2>
      </div>
      <footer>footer aqui</footer>
    </div>
  );
}

export default Home;
