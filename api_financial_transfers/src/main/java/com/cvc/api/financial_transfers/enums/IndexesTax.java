package com.cvc.api.financial_transfers.enums;

public enum IndexesTax {
	
	A_TYPE_INDEX1(3), // 3$
	A_TYPE_INDEX2(3), // 3% of transfer value
	
	B_TYPE_INDEX1(12),// 12$
	
	C_TYPE_INDEX1(8), // 8% of transfer value
	C_TYPE_INDEX2(6), // 6% of transfer value
	C_TYPE_INDEX3(4), // 4% of transfer value
	C_TYPE_INDEX4(2), // 2% of transfer value
	C_TYPE_INDEX5(100000); // 100.000$
	
	private int value;
	
	IndexesTax(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }
}
