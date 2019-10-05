package com.csse.procurementws.serviceImpl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.csse.procurementws.model.Item;
import com.csse.procurementws.model.ReturnedGoods;

@Service
public interface ReturnedGoodsService {

//	List<Item> getAllItems(int returnId);
//	
    ReturnedGoods UpdateReturnItem(ReturnedGoods returnedGoods);
    
    ReturnedGoods addItem(ReturnedGoods returnedGoods);
//
    List<ReturnedGoods> getAllReturnItem();
    
    void deleteReturnEntry(String retItemId);

	
}
