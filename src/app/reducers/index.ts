import {
	ActionReducer,
	ActionReducerMap,
	createFeatureSelector,
	createSelector,
	MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { BillAction, BillActionTypes } from './../actions/bill.actions';

export interface BillState {
	price: number;
	percentage: number;
}

const initialBillState: BillState = {
	price: localStorage.price ? +localStorage.price : 0,
	percentage: localStorage.percentage ? +localStorage.percentage : 0
};

export interface State {
	bill: BillState;
}

export function billReducer(state: BillState = initialBillState, action: BillAction): BillState {
	switch (action.type) {
		case BillActionTypes.CreateBill:
			localStorage.price = action.payload.price;
			localStorage.percentage = action.payload.percentage;
			return {
				price: action.payload.price,
				percentage: action.payload.percentage
			};

		case BillActionTypes.UpdatePrice:
			localStorage.price = action.payload;
			return {
				price: action.payload.price,
				percentage: state.percentage
			};

		case BillActionTypes.UpdatePercentage:
			localStorage.percentage = action.payload;
			return {
				price: state.price,
				percentage: action.payload.percentage
			};

		default:
			return state;
	}
}

export const reducers: ActionReducerMap<State> = {
	bill: billReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
