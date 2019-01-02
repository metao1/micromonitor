package de.vispiron.carsync.monitor.client;

import feign.RequestInterceptor;
import feign.RequestTemplate;
import de.vispiron.carsync.monitor.security.oauth2.AuthorizationHeaderUtil;

public class TokenRelayRequestInterceptor implements RequestInterceptor {

    public static final String AUTHORIZATION = "Authorization";

    @Override
    public void apply(RequestTemplate template) {
        template.header(AUTHORIZATION, AuthorizationHeaderUtil.getAuthorizationHeader());
    }
}
