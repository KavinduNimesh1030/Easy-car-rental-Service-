package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.service.DriverService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

@Service
@Transactional
public class DriverServiceImpl implements DriverService {

    @Override
    public ArrayList<DriverDTO> getAllDriver() {
        return null;
    }
}
