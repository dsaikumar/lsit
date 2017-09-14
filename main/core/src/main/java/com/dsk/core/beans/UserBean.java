package com.dsk.core.beans;

public class UserBean {
	
	private String userName;

	public UserBean(String userName) {
		super();
		this.userName = userName;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	@Override
	public String toString() {
		return "UserBean ["
				+ (getUserName() != null ? "getUserName()=" + getUserName()
						: "") + "]";
	}
	
}
