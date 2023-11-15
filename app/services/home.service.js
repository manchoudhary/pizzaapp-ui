import {apiGet} from '../api';

export const getPizza = ({category, payload}) => {
  return apiGet({
    auth: {},
    route: `item/search/${category}`,
    params: payload,
  });
};

export const getToppings = ({payload}) => {
  return apiGet({
    auth: {},
    route: `item/toppings`,
    params: payload,
  });
};

export const getSearchItems = payload => {
  return apiGet({
    auth: {},
    route: `item/search/pizza`,
    params: payload,
  });
};
