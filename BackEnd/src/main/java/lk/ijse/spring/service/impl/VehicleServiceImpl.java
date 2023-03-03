package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.DriverDTO;
import lk.ijse.spring.dto.VehicleDTO;
import lk.ijse.spring.entity.Vehicle;
import lk.ijse.spring.repo.VehicleRepo;
import lk.ijse.spring.service.VehicleService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

@Service
@Transactional
public class VehicleServiceImpl implements VehicleService {

    @Autowired
    ModelMapper modelMapper;

    @Autowired
    VehicleRepo vehicleRepo;

    @Override
    public VehicleDTO getVehicleDetail(String vid) {
        return modelMapper.map(vehicleRepo.findVehicleByVid(vid),VehicleDTO.class);
    }

    @Override
    public void SaveVehicle(VehicleDTO vehicleDTO) {
        vehicleRepo.save(modelMapper.map(vehicleDTO, Vehicle.class));
    }

    @Override
    public ArrayList<VehicleDTO> getAllVehicle() {
        return  modelMapper.map(vehicleRepo.findAll(),new TypeToken<ArrayList<VehicleDTO>>(){}.getType());
    }

    @Override
    public void updateVehicle(VehicleDTO vehicleDTO) {
        vehicleRepo.save(modelMapper.map(vehicleDTO,Vehicle.class));
    }

    @Override
    public void deleteVehicle(String vid) {
        vehicleRepo.deleteById(vid);
    }
}
