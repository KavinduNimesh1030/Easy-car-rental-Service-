package lk.ijse.spring.controller;

import lk.ijse.spring.service.IncomeService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Income")
@CrossOrigin
public class IncomeManageController {

    @Autowired
    IncomeService incomeService;

    @GetMapping(params = "monthly")
    public ResponseUtil getMonthlyIncome(String monthly){
       double monthlyIncome = incomeService.getMonthlyIncome();
        return new ResponseUtil("200","done",monthlyIncome);
    }
}
