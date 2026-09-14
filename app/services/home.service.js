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


export const getSpeechToText = payload => {
  return apiGet({
    auth: {},
    route: `https://dev.voicexp.ai/voice-controller/voice/process`,
    params: payload,
  });
};