package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.ArrayList;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class VehicleDTO {
    String vid;
    String brand;
    String type;
    String color;
    String fuelType;
    String transmissionType;
    String noOfPassenger;
    String freeKmForDay;
    String freeKmForMonth;
    String isAvailable;
    double monthlyPrice;
    double dailyPrice;
    double priceForExtraKm;
    int qty;
    String frontImgPath;
    String BackImgPath;
    String SideImgPath;
    String interiorImgPath;



}
