package lk.ijse.spring.service.impl;

import lk.ijse.spring.repo.RentCarRepo;
import lk.ijse.spring.service.IncomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class IncomeServiceImpl implements IncomeService {
    @Autowired
    RentCarRepo rentCarRepo;

    @Override
    public double getMonthlyIncome() {
        return rentCarRepo.getMonthTotal();
    }

    @Override
    public double getDailyIncome() {
        return rentCarRepo.getDailyTotal();
    }

    @Override
    public double getAnnuallyIncome() {
        return rentCarRepo.getAnnuallyTotal();
    }

    @Override
    public double getWeeklyIncome() {
        return rentCarRepo.getWeeklyTotal();
    }
}
