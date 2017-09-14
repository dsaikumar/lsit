package com.dsk.core.info;

public class UserBeanInfo {
	
	private String userName;
	
	private String id;

	public UserBeanInfo(String userName) {
		super();
		this.userName = userName;
	}

	public UserBeanInfo() {
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "UserBeanInfo ["
				+ (getUserName() != null ? "getUserName()=" + getUserName()
						+ ", " : "")
				+ (getId() != null ? "getId()=" + getId() : "") + "]";
	}
	
}
