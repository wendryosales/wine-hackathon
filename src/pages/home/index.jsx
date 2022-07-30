// react
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// redux
import fetchWines from '../../redux/actions';
// components
import WinesList from '../../components/button/carouselWines';

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
      <header>header aqui</header>
      <main>
        <h1>banner/carousel aqui</h1>
        <WinesList/>
      </main>
      <footer>footer aqui</footer>
    </div>
  );
}

export default Home;
