package com.cvc.api.financial_transfers.enums;

public enum RespostaCodigo {

	CODE_SUCCESS(200),
	CODE_ERROR(500),
	CODE_WITHOUT_TAX(600);

    private int value;

    RespostaCodigo(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }
	
}
