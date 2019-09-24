package com.csse.procurementws.repository;

import com.csse.procurementws.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author (IT17119122 ** Liyanage I.M)
 */
public interface OrderRepository extends JpaRepository<Order, Integer>{
    
}
