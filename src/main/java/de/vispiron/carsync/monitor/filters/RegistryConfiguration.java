package de.vispiron.carsync.monitor.filters;

import de.vispiron.carsync.monitor.library.config.MicroMonitorProperties;
import de.vispiron.carsync.monitor.filters.accesscontrol.AccessControlFilter;
import de.vispiron.carsync.monitor.filters.responserewriting.SwaggerBasePathRewritingFilter;
import org.springframework.cloud.netflix.zuul.filters.RouteLocator;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RegistryConfiguration {

    @Configuration
    public static class SwaggerBasePathRewritingConfiguration {

        @Bean
        public SwaggerBasePathRewritingFilter swaggerBasePathRewritingFilter(){
            return new SwaggerBasePathRewritingFilter();
        }
    }

    @Configuration
    public static class AccessControlFilterConfiguration {

        @Bean
        public AccessControlFilter accessControlFilter(RouteLocator routeLocator, MicroMonitorProperties microMonitorProperties){
            return new AccessControlFilter(routeLocator, microMonitorProperties);
        }
    }

}
