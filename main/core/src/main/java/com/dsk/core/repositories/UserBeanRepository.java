package com.dsk.core.repositories;

import org.bson.types.ObjectId;
import org.springframework.data.repository.CrudRepository;

import com.dsk.core.beans.UserBean;

public interface UserBeanRepository extends CrudRepository<UserBean, ObjectId> {

}
