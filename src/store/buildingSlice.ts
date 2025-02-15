import { PayloadAction } from "@reduxjs/toolkit";
interface BuildingState {
  selectedBuildingId: string | null;
}
const initialState: BuildingState = {
  selectedBuildingId: null,
};

export default function reducer(
  state: BuildingState = initialState,
  action: PayloadAction<string | null>
) {
  switch (action.type) {
    case "setSelectedBuilding":
      return { ...state, selectedBuildingId: action.payload };
    case "clearSelectedBuilding":
      return { ...state, selectedBuildingId: null };
    default:
      return state;
  }
}
