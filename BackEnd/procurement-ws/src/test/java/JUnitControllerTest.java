
import com.csse.procurementws.model.EmployeeFactory;
import org.junit.Test;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author NADUNI
 */
public class JUnitControllerTest {
    
    @Test
    public void testEmployeeFactory(){
       EmployeeFactory empFactory = new EmployeeFactory();
       
       empFactory.getEmployee("MGR");
        empFactory.getEmployee("SM");
         empFactory.getEmployee("PO");
       
        
        
        
    }
    
}

