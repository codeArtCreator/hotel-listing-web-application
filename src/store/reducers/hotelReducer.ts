import * as types from "../actions/types";
import data from "../../data";

interface HotelState {
  activeCity: string;
  properties: any[];
  selectedPropertyId: number | null;
  itemsToShow: number;
}

const initialState: HotelState = {
  activeCity: "New York",
  properties: data,
  selectedPropertyId: null,
  itemsToShow: 6,
};

const hotelReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.SET_ACTIVE_CITY:
      return {
        ...state,
        activeCity: action.payload,
        itemsToShow: 6,
      };
    case types.LOAD_MORE_PROPERTIES:
      return {
        ...state,
        itemsToShow: state.itemsToShow + 3,
      };
    case types.RESET_ITEMS_TO_SHOW:
      return {
        ...state,
        itemsToShow: 6,
      };
    case types.SET_SELECTED_PROPERTY:
      return {
        ...state,
        selectedPropertyId: action.payload,
      };
    default:
      return state;
  }
};

export default hotelReducer;
