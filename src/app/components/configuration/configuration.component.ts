import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from './../../reducers/index';
import { CreateBill, UpdatePercentage, UpdatePrice } from './../../actions/bill.actions';

@Component({
	selector: 'app-configuration',
	templateUrl: './configuration.component.html',
	styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {
	bill;

	constructor(private store: Store<State>) { }

	ngOnInit(): void {
		this.store.pipe(select(state => state.bill)).subscribe(data => {
			this.bill = data;
		});
	}

	updateBill(price, percentage): void {
		if (!price) {
			this.updatePercentage(percentage);
		} else if (!percentage) {
			this.updatePrice(price);
		} else {
			this.updateBillData(price, percentage);
		}
	}

	updatePercentage(percentage): void {
		percentage = +percentage;
		this.store.dispatch(new UpdatePercentage({ percentage }));
	}

	updatePrice(price): void {
		price = +price;
		this.store.dispatch(new UpdatePrice({ price }));
	}

	updateBillData(price, percentage): void {
		price = +price;
		percentage = +percentage;
		this.store.dispatch(new CreateBill({ price, percentage }));
	}

}
