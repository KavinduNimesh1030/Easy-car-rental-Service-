package lk.ijse.spring.dto;

import lombok.*;

import java.sql.Date;
import java.sql.Time;
import java.time.LocalDateTime;
import java.time.LocalTime;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
public class RentDetailDTO {
    String rentId;
    String vId;
    String driverOption;
    String pickDate;
    String pickTime;
    Date returnDate;
}
