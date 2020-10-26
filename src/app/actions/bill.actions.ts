import { Action } from '@ngrx/store';

export enum BillActionTypes {
	CreateBill = '[App] Create Bill',
	UpdatePrice = '[App] Update Price',
	UpdatePercentage = '[App] Update Percentage'
}

export interface BillState {
	price: number;
	percentage: number;
}

export class BillAction implements Action {
	type: string;
	payload: {
		price: number;
		percentage: number;
	};
}

export class CreateBill implements Action {
	readonly type = BillActionTypes.CreateBill;

	constructor(readonly payload: BillState) {

	}
}

export class UpdatePrice implements Action {
	readonly type = BillActionTypes.UpdatePrice;

	constructor(readonly payload: { price: number; }) {

	}
}

export class UpdatePercentage implements Action {
	readonly type = BillActionTypes.UpdatePercentage;

	constructor(readonly payload: { percentage: number; }) {

	}
}


export type BillActions = CreateBill;
