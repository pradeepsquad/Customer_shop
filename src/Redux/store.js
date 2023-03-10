import {configureStore} from '@reduxjs/toolkit';
import  newCustomerSlice  from './reducerSlice/NewCustomerSlice';
import newSupplierSlice from './reducerSlice/NewSupplierSlice';
import addProductSlice from './reducerSlice/AddProductSlice';
import addServiceSlice from './reducerSlice/AddServiceSlice';
import newMoneyInSlice from './reducerSlice/NewMoneyInSlice';
import NewMoneyOutSlice from './reducerSlice/NewMoneyOutSlice';

 export const store = configureStore({
        reducer: {
                newCustomerSlice,
                newSupplierSlice,
                addProductSlice,
                addServiceSlice,
                newMoneyInSlice,
                NewMoneyOutSlice,
        },
 });