package lk.ijse.spring.entity;

import lombok.*;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
@Entity
public class Rental {
    @Id
    String rentId;
    String pickUpDate;
    String returnDate;
    String pickUpVenue;
    String returnVenue;
    String pickUpTime;
    String statusOfReq;
    double total;
    double LossDamageWaiver;
    String duration;
    String slipImgPath;

    @ManyToOne(cascade = {CascadeType.REFRESH,CascadeType.DETACH})
    @JoinColumn(name = "id",referencedColumnName = "id",nullable = false)
    private Customer cusId;

    @OneToMany(mappedBy = "rental",cascade = CascadeType.ALL)
    private List<RentDetail> rentDetail;

}
