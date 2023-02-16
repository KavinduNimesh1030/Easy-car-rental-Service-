package lk.ijse.spring.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan
public class WebAppConfig {
    public WebAppConfig() {
        System.out.println("webApp");
    }
}
