package lk.ijse.spring.controller;

import lk.ijse.spring.util.ResponseUtil;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Income")
@CrossOrigin
public class IncomeManageController {
    @GetMapping(params = "monthly")
    public ResponseUtil getMonthlyIncome(String monthly){

    }
}
