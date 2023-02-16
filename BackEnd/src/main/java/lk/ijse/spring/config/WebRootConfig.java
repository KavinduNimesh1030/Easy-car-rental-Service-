package lk.ijse.spring.config;

import lk.ijse.spring.service.impl.CustomerServiceImpl;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.*;

@Configuration
@Import({JPAConfig.class})
@ComponentScan(basePackageClasses = {CustomerServiceImpl.class})
public class WebRootConfig {
    public WebRootConfig() {
        System.out.println("webRoot");
    }
    @Bean
    public ModelMapper modelMapper(){
        return new ModelMapper();
    }
}
