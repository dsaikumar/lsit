package com.dsk;

import junit.framework.TestCase;

public class FloatUtilTest extends TestCase {

	public void testValidateCustomFormat(){
		FloatUtil util = new FloatUtil();
		
		assertEquals(false, util.validateCustomFormat("0.00000"));
		assertEquals(true, util.validateCustomFormat("0.0000"));
		assertEquals(true, util.validateCustomFormat("0.000"));
		assertEquals(true, util.validateCustomFormat("0.00"));
		assertEquals(true, util.validateCustomFormat("0.0"));
		assertEquals(true, util.validateCustomFormat("0.06"));
		assertEquals(true, util.validateCustomFormat("0.060"));
		assertEquals(true, util.validateCustomFormat("0.0600"));
		assertEquals(true, util.validateCustomFormat("0.1"));
		assertEquals(true, util.validateCustomFormat("0.16"));
		assertEquals(true, util.validateCustomFormat("0.160"));
		assertEquals(true, util.validateCustomFormat("0.1600"));
		assertEquals(false, util.validateCustomFormat("0.061"));
		assertEquals(false, util.validateCustomFormat("0.0610"));
		assertEquals(false, util.validateCustomFormat("0.161"));
		assertEquals(false, util.validateCustomFormat("0.161"));
		assertEquals(false, util.validateCustomFormat("0.1610"));
		assertEquals(false, util.validateCustomFormat("0.1601"));
	}
}
