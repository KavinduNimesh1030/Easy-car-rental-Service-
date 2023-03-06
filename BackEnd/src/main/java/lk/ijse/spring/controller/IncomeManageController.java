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
    private String daily;

    @GetMapping(params = "monthly")
    public ResponseUtil getMonthlyIncome(String monthly){
       double monthlyIncome = incomeService.getMonthlyIncome();
        return new ResponseUtil("200","done",monthlyIncome);
    }

    @GetMapping(params = "daily")
    public ResponseUtil getDailyIncome(String daily){
        double dailyIncome = incomeService.getDailyIncome();
        return new ResponseUtil("200","done",dailyIncome);
    }
    @GetMapping(params = "weekly")
    public ResponseUtil getWeeklyIncome(String weekly){
        double weeklyIncome = incomeService.getWeeklyIncome();
        return new ResponseUtil("200","done",weeklyIncome);
    }
    @GetMapping(params = "annually")
    public ResponseUtil getAnnuallyIncome(String annually){
        double annuallyIncome = incomeService.getAnnuallyIncome();
        return new ResponseUtil("200","done",annuallyIncome);
    }
    @GetMapping(params = "tot")
    public ResponseUtil getTotalIncome(String tot){
        double totalIncome = incomeService.getTotalIncome();
        return new ResponseUtil("200","done",totalIncome);
    }


}
