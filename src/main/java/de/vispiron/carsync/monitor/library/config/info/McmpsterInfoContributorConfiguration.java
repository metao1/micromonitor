package de.vispiron.carsync.monitor.library.config.info;

import org.springframework.boot.actuate.autoconfigure.info.ConditionalOnEnabledInfoContributor;
import org.springframework.boot.actuate.autoconfigure.info.InfoContributorAutoConfiguration;
import org.springframework.boot.actuate.info.InfoContributor;
import org.springframework.boot.autoconfigure.AutoConfigureAfter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.ConfigurableEnvironment;

/**
 * NgMcmonitor auto-configuration for custom {@link InfoContributor}s.
 */
@Configuration
@AutoConfigureAfter(InfoContributorAutoConfiguration.class)
public class NgMcmonitorInfoContributorConfiguration {

    @Bean
    @ConditionalOnEnabledInfoContributor("management.info.active-profiles.enabled")
    public ActiveProfilesInfoContributor activeProfilesInfoContributor(
        ConfigurableEnvironment environment) {
        return new ActiveProfilesInfoContributor(environment);
    }

    @Bean
    @ConditionalOnEnabledInfoContributor("management.info.mail-enabled.enabled")
    public MailEnabledInfoContributor mailEnabledInfoContributor() {
        return new MailEnabledInfoContributor();
    }
}
