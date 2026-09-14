import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
} from './search.actionTypes';
import {getSearchItems as getSearchItemsService} from '../../services/home.service';

export const fetchSearchItems = query => {
  return dispatch => {
    dispatch({
      type: SEARCH_REQUEST,
    });

    getSearchItemsService({
      itemTitle: query,
    })
      .then(data => {
        dispatch({
          type: SEARCH_SUCCESS,
          payload: data.data,
        });
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: SEARCH_FAILURE,
        });
      });
  };
};
