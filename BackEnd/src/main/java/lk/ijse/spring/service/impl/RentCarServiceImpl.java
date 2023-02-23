package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.RentalDTO;
import lk.ijse.spring.entity.Rental;
import lk.ijse.spring.repo.RentCarRepo;
import lk.ijse.spring.service.RentCarService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class RentCarServiceImpl implements RentCarService {
    @Autowired
    RentCarRepo rentCarRepo;

    @Autowired
    ModelMapper modelMapper;


    @Override
    public void saveRentDetail(RentalDTO rentalDTO) {
        rentCarRepo.save(modelMapper.map(rentalDTO, Rental.class));
    }
}
