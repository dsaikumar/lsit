package com.dsk.core.beans;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class UserBean {
	
	@Id
	private String 	id;
	
	private String userName;

	public UserBean(String userName) {
		super();
		this.userName = userName;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("UserBean [");
		if (getId() != null)
			builder.append("getId()=").append(getId()).append(", ");
		if (getUserName() != null)
			builder.append("getUserName()=").append(getUserName());
		builder.append("]");
		return builder.toString();
	}
}
