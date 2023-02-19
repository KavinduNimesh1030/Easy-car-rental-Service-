package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.sql.Date;
import java.sql.Time;
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Data
@Entity
public class RentDetail {
    @Id
    String rentId;
    @Id
    String vId;
    String driverOption;
    Date pickDate;
    Time pickTime;
    Date returnDate;

    @ManyToOne
    @JoinColumn(name = "rentId",referencedColumnName = "rentId",insertable = false,updatable = false)
    private Rental rental;

    @ManyToOne
    @JoinColumn(name = "vId",referencedColumnName = "vId",insertable = false,updatable = false)
    private Vehicle vehicle;

}
