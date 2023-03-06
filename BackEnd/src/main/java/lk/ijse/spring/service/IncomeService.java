package lk.ijse.spring.service;

import org.springframework.stereotype.Component;

@Component
public interface IncomeService {
    double getMonthlyIncome();
    double getDailyIncome();
    double getAnnuallyIncome();
    double getWeeklyIncome();
    double getTotalIncome();
}
