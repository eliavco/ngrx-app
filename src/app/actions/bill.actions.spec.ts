import * as fromBill from './bill.actions';

describe('loadBills', () => {
	it('should return an action', () => {
		expect(fromBill.loadBills().type).toBe('[Bill] Load Bills');
	});
});
