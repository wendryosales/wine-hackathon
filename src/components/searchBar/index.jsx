import {
  useCallback, useEffect, useRef,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Search } from 'semantic-ui-react';
import { finishSearch, startSearch, updateSelection } from '../../redux/actions';

function SearchBar() {
  // redux
  const winesList = useSelector(({ wines }) => wines);
  const { loading, results, query } = useSelector(({ search }) => search);
  const dispatch = useDispatch();

  const timeoutRef = useRef();

  const handleSearchChange = useCallback((_e, { value }) => {
    clearTimeout(timeoutRef.current);
    dispatch(startSearch(value));

    timeoutRef.current = setTimeout(() => {
      if (value.length === 0) {
        dispatch({ type: 'CLEAN_QUERY' });
        return;
      }

      const isMatch = (result) => result.name.toLowerCase().includes(value.toLowerCase());
      const filteredResults = winesList.filter(isMatch)
        .map((element) => ({
          ...element,
          title: element.name,
          description: `${element.sommelierComment.slice(0, 80)}...`,
        }))
        .reduce((acc, curr) => {
          if (acc.find(({ title }) => title === curr.title)) {
            return acc;
          }
          return [...acc, curr];
        }, []);
      dispatch(finishSearch(filteredResults));
    }, 300);
  });

  useEffect(() => () => {
    clearTimeout(timeoutRef.current);
  }, []);

  return (
    <Search
      size="huge"
      loading={loading}
      placeholder="Search..."
      onResultSelect={(_e, data) => dispatch(updateSelection(data.result.name))}
      onSearchChange={handleSearchChange}
      results={results}
      value={query}
    />
  );
}

export default SearchBar;
