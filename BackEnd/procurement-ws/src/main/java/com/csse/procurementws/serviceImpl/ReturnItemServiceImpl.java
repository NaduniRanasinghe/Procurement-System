package com.csse.procurementws.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.csse.procurementws.model.Item;
import com.csse.procurementws.model.ReturnedGoods;
import com.csse.procurementws.repository.ReturnedGoodsRepository;

@Service
public class ReturnItemServiceImpl implements ReturnedGoodsService {
	
	
    @Autowired
    private ReturnedGoodsRepository returnedGoodsRepository;

    @Override
    public ReturnedGoods addItem(ReturnedGoods returnedGoods) {
        return returnedGoodsRepository.save(returnedGoods);
    }
    
    
    @Override
    public List<ReturnedGoods> getAllReturnItem() {
        System.out.println("weda");
        return returnedGoodsRepository.findAll();
    }

    @Override
    public ReturnedGoods UpdateReturnItem(ReturnedGoods returnedGoods) {
        System.out.println("updateweda");
        return returnedGoodsRepository.save(returnedGoods);
    }
    @Override
    public void deleteReturnEntry(int retItemId) {

        returnedGoodsRepository.deleteById(retItemId);
    }


}