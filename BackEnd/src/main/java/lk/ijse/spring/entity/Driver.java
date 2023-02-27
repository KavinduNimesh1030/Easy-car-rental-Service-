package lk.ijse.spring.entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;

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
}
