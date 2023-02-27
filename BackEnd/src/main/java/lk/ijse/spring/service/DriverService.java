package lk.ijse.spring.service;

import lk.ijse.spring.dto.DriverDTO;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
public interface DriverService {
    ArrayList<DriverDTO>getAllDriver();
}
