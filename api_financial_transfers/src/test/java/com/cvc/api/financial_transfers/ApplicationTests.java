package com.cvc.api.financial_transfers;

import java.time.LocalDate;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

import com.cvc.api.financial_transfers.entities.Tax;

class ApplicationTests {
	
	@BeforeEach                                         
    public void setUp() throws Exception {
        
    }

	@Test
	void testCalculateA() {
		Tax tax = new Tax(100.0, LocalDate.now(), LocalDate.now());
		assertEquals(6.0, tax.calculateA()); // 3$ + 3% of transfer value
	}
	
	@Test
	void testCalculatebB() {
		assertEquals(120.0, new Tax(100.0, LocalDate.now().plusDays(10), LocalDate.now()).calculateB());  // 12$ * days
		assertEquals(60.0, new Tax(100.0, LocalDate.now().plusDays(5), LocalDate.now()).calculateB());  // 12$ * days
	}
	
	@Test
	void testCalculatebC_1() {
		assertEquals(8.0, new Tax(100D, LocalDate.now().plusDays(11), LocalDate.now()).calculateC()); // 8% of transfer value
		assertEquals(8.0, new Tax(100D, LocalDate.now().plusDays(20), LocalDate.now()).calculateC()); // 8% of transfer value
		
		assertEquals(6.0, new Tax(100.0, LocalDate.now().plusDays(21), LocalDate.now()).calculateC()); // 6% of transfer value
		assertEquals(6.0, new Tax(100.0, LocalDate.now().plusDays(30), LocalDate.now()).calculateC()); // 6% of transfer value
		
		assertEquals(4.0, new Tax(100.0, LocalDate.now().plusDays(31), LocalDate.now()).calculateC()); // 4% of transfer value
		assertEquals(4.0, new Tax(100.0, LocalDate.now().plusDays(40), LocalDate.now()).calculateC()); // 4% of transfer value
		
		assertEquals(4000.0, new Tax(200000.0, LocalDate.now().plusDays(41), LocalDate.now()).calculateC()); // 2% of transfer value
	}
	
	@Test
	void testTypeUnitTest() {
		assertEquals('A', new Tax(100.0, LocalDate.now(), LocalDate.now()).typeUnitTest()); 
		
		assertEquals('B', new Tax(100.0, LocalDate.now().plusDays(1), LocalDate.now()).typeUnitTest());
		assertEquals('B', new Tax(100.0, LocalDate.now().plusDays(10), LocalDate.now()).typeUnitTest());
		
		assertEquals('C', new Tax(100.0, LocalDate.now().plusDays(11), LocalDate.now()).typeUnitTest());
		assertEquals('C', new Tax(100.0, LocalDate.now().plusDays(41), LocalDate.now()).typeUnitTest());
	}

}
