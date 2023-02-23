package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Time;
import java.time.LocalDateTime;
import java.time.LocalTime;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Data
@IdClass(RentVehicle_PK.class)
@Entity
public class RentDetail {
    @Id
    String rentId;
    @Id
    String vId;
    String driverOption;
    Date pickDate;
    String pickTime;
    Date returnDate;

    @ManyToOne
    @JoinColumn(name = "rentId",referencedColumnName = "rentId",insertable = false,updatable = false)
    private Rental rental;

    @ManyToOne
    @JoinColumn(name = "vId",referencedColumnName = "vId",insertable = false,updatable = false)
    private Vehicle vehicle;

}
