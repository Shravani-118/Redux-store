import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ItemState {
  id: number;
  name: string;
  count: number;
}

const initialState: ItemState[] = [
  { id: 1, name: 'Item 1', count: 100 },
  { id: 2, name: 'Item 2', count: 200 },
  { id: 3, name: 'Item 3', count: 300},
];

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    buyItem: (state, action: PayloadAction<number>) => {
      const item = state.find(item => item.id === action.payload);
      if (item && item.count > 0) {
        item.count -= 1;
      }
    },
    refillItem: (state, action: PayloadAction<number>) => {
      const item = state.find(item => item.id === action.payload);
      if (item) {
        item.count += 1;
      }
    },
  },
});

export const { buyItem, refillItem } = itemsSlice.actions;
export default itemsSlice.reducer;
