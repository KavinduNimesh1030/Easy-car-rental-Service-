package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class CustomerDTO {
    String id;
    String name;
    String email;
    String password;
    String address;
    String contactNo;
    String dln;
    String imgPath;


}
