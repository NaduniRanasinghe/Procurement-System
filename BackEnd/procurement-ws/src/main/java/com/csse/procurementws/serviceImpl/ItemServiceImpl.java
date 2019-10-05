package com.csse.procurementws.serviceImpl;

import com.csse.procurementws.model.Item;
import com.csse.procurementws.model.Order;
import com.csse.procurementws.model.Supplier;
import com.csse.procurementws.repository.ItemRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author (IT17119122 ** Liyanage I.M)
 */
@Service
public class ItemServiceImpl {
    
    @Autowired
    ItemRepository itemRepository;
    
    @Autowired
    SupplierServiceImpl supplierServiceImpl;
    
    public void saveItem(Item item) {
        itemRepository.save(item);
    }
    
    public List<Item> getItemsByIdList(List<Integer> idList) {
        return itemRepository.getItemsByIdList(idList);
    }
    
    public List<Item> getItems() {
        List<Item> itemList = itemRepository.findAll();
        List<Item> newItemList= new ArrayList<>();
        
        for(Item item : itemList){
            Supplier supplier = supplierServiceImpl.getSupplierById(item.getSupplier());
            item.setSupplierName(supplier.getsName());
            newItemList.add(item);
        }
        return newItemList;
    }
    
}
