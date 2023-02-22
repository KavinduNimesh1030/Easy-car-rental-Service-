package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.VehicleDTO;
import lk.ijse.spring.repo.VehicleRepo;
import lk.ijse.spring.service.VehicleService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
}
