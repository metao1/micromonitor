package de.vispiron.carsync.monitor.config;

import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.web.client.RestTemplate;

import static de.vispiron.carsync.monitor.config.Constants.PROFILE_UAA;

@Configuration
@Profile(PROFILE_UAA)
public class UaaConfiguration {

    @Bean
    @LoadBalanced
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}
