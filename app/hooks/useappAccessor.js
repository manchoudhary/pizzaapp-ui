import {useSelector} from 'react-redux';

const useAppAccessor = () => {
  const getApplication = useSelector(state => {
    return state.application;
  });

  const getHome = useSelector(state => {
    return state.homeReducer;
  });

  const getProductDetails = useSelector(state => {
    return state.productDetailsReducer;
  });

  const getSearch = useSelector(state => {
    return state.searchReducer;
  });

  return {
    getApplication: () => getApplication,
    getHome: () => getHome,
    getProductDetails: () => getProductDetails,
    getSearch: () => getSearch,
  };
};

export default useAppAccessor;
