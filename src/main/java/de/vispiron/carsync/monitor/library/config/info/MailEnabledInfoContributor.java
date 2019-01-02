package de.vispiron.carsync.monitor.library.config.info;

import de.vispiron.carsync.monitor.library.config.MicroMonitorProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.actuate.info.Info;
import org.springframework.boot.actuate.info.InfoContributor;

/**
 * An {@link InfoContributor} that tells if mail service is enabled.
 *
 */
public class MailEnabledInfoContributor implements InfoContributor {

    private static final String MAIL_ENABLED = "mailEnabled";

    @Autowired
    private MicroMonitorProperties micromonitorProperties;

    @Override
    public void contribute(Info.Builder builder) {
        builder.withDetail(MAIL_ENABLED, micromonitorProperties.getMail().isEnabled());
    }
}
