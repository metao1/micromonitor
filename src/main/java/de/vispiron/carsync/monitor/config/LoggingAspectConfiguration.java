package de.vispiron.carsync.monitor.config;

import de.vispiron.carsync.monitor.aop.logging.LoggingAspect;

import de.vispiron.carsync.monitor.library.config.MicroMonitorConstants;
import org.springframework.context.annotation.*;
import org.springframework.core.env.Environment;

@Configuration
@EnableAspectJAutoProxy
public class LoggingAspectConfiguration {

    @Bean
    @Profile(MicroMonitorConstants.SPRING_PROFILE_DEVELOPMENT)
    public LoggingAspect loggingAspect(Environment env) {
        return new LoggingAspect(env);
    }
}
