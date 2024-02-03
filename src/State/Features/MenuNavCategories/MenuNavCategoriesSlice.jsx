import { createSlice } from '@reduxjs/toolkit';
import {
  PiBowlFoodDuotone,
  PiHamburger,
  PiPizzaThin,
  GiSteak,
  GiBread,
  FaPastafarianism,
  RiCake3Line,
  BiDrink,
} from '../../../Dashboard/Assets/Icons/Index';

const initialState = {
  value: [
    {
      name: 'entrees',
      length: 3,
      icon: <PiBowlFoodDuotone />,
    },
    {
      name: 'burgers',
      length: 4,
      icon: <PiHamburger />,
    },
    {
      name: 'pizza',
      length: 4,
      icon: <PiPizzaThin />,
    },
    {
      name: 'steak',
      length: 4,
      icon: <GiSteak />,
    },
    {
      name: 'pasta',
      length: 5,
      icon: <FaPastafarianism />,
    },
    {
      name: 'sides',
      length: 4,
      icon: <GiBread />,
    },
    {
      name: 'desserts',
      length: 4,
      icon: <RiCake3Line />,
    },
    {
      name: 'drinks',
      length: 4,
      icon: <BiDrink />,
    },
  ],
};

export const menuNavCategoriesSlice = createSlice({
  name: 'menuNavCategories',
  initialState,
});

export default menuNavCategoriesSlice.reducer;
