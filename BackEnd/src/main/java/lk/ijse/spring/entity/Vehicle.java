package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Entity
public class Vehicle {
    @Id
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
    String frontImgPath;
    String BackImgPath;
    String SideImgPath;
    String interiorImgPath;

}
