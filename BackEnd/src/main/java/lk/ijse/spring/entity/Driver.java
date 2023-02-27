package lk.ijse.spring.entity;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
@Entity
public class Driver {
    @Id
    String driverId;
    String driverName;
    String driverContactNo;
    String availability;

    @OneToMany(cascade = {CascadeType.REFRESH,CascadeType.DETACH})
    private List<Rental> rentalList;
}
