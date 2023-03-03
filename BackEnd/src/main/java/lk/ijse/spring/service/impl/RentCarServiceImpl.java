package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.RentalDTO;
import lk.ijse.spring.dto.VehicleDTO;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.Rental;
import lk.ijse.spring.repo.RentCarRepo;
import lk.ijse.spring.repo.RentDetailRepo;
import lk.ijse.spring.service.RentCarService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class RentCarServiceImpl implements RentCarService {
    @Autowired
    RentCarRepo rentCarRepo;

    @Autowired
    ModelMapper modelMapper;

    @Autowired
    RentDetailRepo rentDetailRepo;


    @Override
    public void saveRentDetail(RentalDTO rentalDTO) {
        rentCarRepo.save(modelMapper.map(rentalDTO, Rental.class));
    }

    @Override
    public ArrayList<RentalDTO> getAllRentDetail() {
        List<Rental> all = rentCarRepo.findAll();
        System.out.println(all.toString());
        System.out.println("------------------");
        System.out.println(all);

        return  modelMapper.map(rentCarRepo.findAll(),new TypeToken<ArrayList<RentalDTO>>(){}.getType());
    }

    @Override
    public void updateRent(RentalDTO rentalDTO) {
        rentCarRepo.save(modelMapper.map(rentalDTO,Rental.class));
    }

    @Override
    public RentalDTO getRentById(String rentId) {
        return modelMapper.map(rentCarRepo.findRentalByRentId(rentId),RentalDTO.class);
    }

    @Override
    public ArrayList<RentalDTO> getRentalByCusId(String cusId) {
        return  modelMapper.map(rentCarRepo.findAll(),new TypeToken<ArrayList<RentalDTO>>(){}.getType());
    }

    @Override
    public String generateRentalId() {
        String lastId = rentCarRepo.generateRentalId();
        String id = "";
        if (lastId != null) {
            int tempId = Integer.parseInt(lastId.split("-")[1]);
            tempId = tempId + 1;
            if (tempId <= 9) {
                id = "R00-000" + tempId;
            } else if (tempId <= 99) {
                id = "R00-00" + tempId;
            } else if (tempId <= 999) {
                id = "R00-0" + tempId;
            } else if (tempId <= 9999) {
                id = "R00-" + tempId;
            }
        } else {
            id = "R00-0001";
        }
        return id;
    
    }
}
