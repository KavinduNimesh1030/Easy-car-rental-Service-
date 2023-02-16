package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.sql.Time;
import java.time.LocalTime;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
public class Rental {
    @Id
    String rentId;
    Date pickUpDate;
    Date returnDate;
    String pickUpVenue;
    Time pickUpTime;
    String statusOfReq;
    double total;
    String duration;

    @ManyToOne(cascade = {CascadeType.REFRESH,CascadeType.DETACH})
    @JoinColumn(name = "id",referencedColumnName = "id",nullable = false)
    private Customer cusId;

}