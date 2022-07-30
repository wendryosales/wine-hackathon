import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
    <div className="Home">
      <Header />
      <main>
        <h1>banner/carousel aqui</h1>
        <h2>lista de vinhos aqui</h2>
      </main>
      <footer>footer aqui</footer>
    </div>
  );
}

export default Home;
