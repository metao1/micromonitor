package de.vispiron.carsync.monitor.library.security.ssl;

import de.vispiron.carsync.monitor.library.config.MicroMonitorProperties;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.web.embedded.undertow.UndertowServletWebServerFactory;
import org.springframework.context.annotation.Configuration;

import io.undertow.UndertowOptions;

/**
 * SSL configuration for Undertow.
 * <p>
 * SSL_USER_CIPHER_SUITES_ORDER : It will force the cipher suite defined by the user,
 * allowing to achieve perfect forward secrecy.
 * This can only be activated with HTTPS and a cipher suite defined by the user (server.ssl.ciphers).
 * <p>
 * Please note that when using NgMcmonitor, you can use the `server.ssl.ciphers` property that is commented out
 * in your `application-prod.yml` file, and which is ready to work with this configuration.
 *
 * @see
 * <a href="https://github.com/ssllabs/research/wiki/SSL-and-TLS-Deployment-Best-Practices#25-use-forward-secrecy" target="_blank">More explanation on perfect forward secrecy</a>
 */
@Configuration
@ConditionalOnClass({ UndertowServletWebServerFactory.class })
@ConditionalOnProperty({ "server.ssl.ciphers", "server.ssl.key-store" })
public class UndertowSSLConfiguration {

    private final UndertowServletWebServerFactory factory;

    private final MicroMonitorProperties microMonitorProperties;

    private final Logger log = LoggerFactory.getLogger(UndertowSSLConfiguration.class);

    public UndertowSSLConfiguration(UndertowServletWebServerFactory undertowServletWebServerFactory,
                                    MicroMonitorProperties microMonitorProperties) {
        this.factory = undertowServletWebServerFactory;
        this.microMonitorProperties = microMonitorProperties;

        configuringUserCipherSuiteOrder();
    }

    private void configuringUserCipherSuiteOrder() {
        log.info("Configuring Undertow");
        if (microMonitorProperties.getHttp().isUseUndertowUserCipherSuitesOrder()) {
            log.info("Setting user cipher suite order to true");
            factory.addBuilderCustomizers(builder -> builder.setSocketOption(UndertowOptions
                .SSL_USER_CIPHER_SUITES_ORDER, Boolean.TRUE));
        }
    }
}
