package com.csse.procurementws.repository;

import com.csse.procurementws.model.SystemUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface SystemUserRepository extends JpaRepository<SystemUser, Integer>{

    @Query("select su from SystemUser su where su.username = ?1 and su.password = ?2")
    SystemUser findByUsernameandPassword(String username,String password);
	
    
}
