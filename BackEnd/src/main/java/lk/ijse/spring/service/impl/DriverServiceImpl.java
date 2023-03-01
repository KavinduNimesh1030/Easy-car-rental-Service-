package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.dto.RentalDTO;
import lk.ijse.spring.entity.Driver;
import lk.ijse.spring.repo.DriverRepo;
import lk.ijse.spring.service.DriverService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

@Service
@Transactional
public class DriverServiceImpl implements DriverService {

    @Autowired
    DriverRepo repo;

    @Autowired
    ModelMapper modelMapper;

    @Override
    public ArrayList<DriverDTO> getAllDriver() {
       return  modelMapper.map(repo.findAll(),new TypeToken<ArrayList<DriverDTO>>(){}.getType());
    }

    @Override
    public ArrayList<DriverDTO> findDriverByAvailability(String availability) {
        return  modelMapper.map(repo.findDriverByAvailability(availability),new TypeToken<ArrayList<DriverDTO>>(){}.getType());
    }

    @Override
    public void updateDriver(DriverDTO driverDTO) {
        repo.save(modelMapper.map(driverDTO,Driver.class));
    }

    @Override
    public DriverDTO getDriverById(String driverId) {
        return modelMapper.map(repo.findDriverByDriverId(driverId),DriverDTO.class);
    }

    @Override
    public void addDriver(DriverDTO driverDTO) {
        repo.save(modelMapper.map(driverDTO,Driver.class));
    }

    @Override
    public ArrayList<DriverDTO> getAllDrivers() {
        return  modelMapper.map(repo.findAll(),new TypeToken<ArrayList<DriverDTO>>(){}.getType());

    }
}
