import * as types from "./types";

export const setActiveCity = (city: string) => ({
  type: types.SET_ACTIVE_CITY,
  payload: city,
});

export const loadMoreProperties = () => ({
  type: types.LOAD_MORE_PROPERTIES,
});

export const setSelectedProperty = (propertyId: number) => ({
  type: types.SET_SELECTED_PROPERTY,
  payload: propertyId,
});

export const resetItemsToShow = () => ({
  type: types.RESET_ITEMS_TO_SHOW,
});
