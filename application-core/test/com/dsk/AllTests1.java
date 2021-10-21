package com.dsk;

import junit.framework.Test;
import junit.framework.TestSuite;

public class AllTests1 {

	public static Test suite() {
		TestSuite suite = new TestSuite(AllTests1.class.getName());
		//$JUnit-BEGIN$
		suite.addTestSuite(FloatUtilTest.class);
		//$JUnit-END$
		return suite;
	}

}
