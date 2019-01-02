package de.vispiron.carsync.monitor.library.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MicroServicePropertiesManagement {

    @Bean
    MicroMonitorProperties getMicroMonitorProperties() {
        return new MicroMonitorProperties();
    }
}
