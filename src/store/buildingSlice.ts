import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BuildingState {
  selectedBuildingId: string | null;
}

const initialState: BuildingState = {
  selectedBuildingId: null,
};

const buildingSlice = createSlice({
  name: "buildings",
  initialState,
  reducers: {
    setSelectedBuilding: (state, action: PayloadAction<string>) => {
      state.selectedBuildingId = action.payload;
    },
    clearSelectedBuilding: (state) => {
      state.selectedBuildingId = null;
    },
  },
});

export const { setSelectedBuilding, clearSelectedBuilding } =
  buildingSlice.actions;
export default buildingSlice.reducer;
