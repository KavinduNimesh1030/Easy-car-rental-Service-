package lk.ijse.spring.service.impl;

import lk.ijse.spring.repo.RentCarRepo;
import lk.ijse.spring.service.IncomeService;
import org.springframework.beans.factory.annotation.Autowired;

public class IncomeServiceImpl implements IncomeService {
    @Autowired
    RentCarRepo rentCarRepo;

    @Override
    public double getMonthlyIncome() {
        return rentCarRepo.getMonthTotal();
    }
}
