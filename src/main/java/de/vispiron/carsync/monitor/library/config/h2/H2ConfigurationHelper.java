package de.vispiron.carsync.monitor.library.config.h2;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.sql.SQLException;
import javax.servlet.*;

/**
 * Utility class to configure H2 in development.
 *
 * We don't want to include H2 when we are packaging for the "prod" profile and won't
 * actually need it, so we have to load / invoke things at runtime through reflection.
 */
public class H2ConfigurationHelper {

    public static Object createServer() throws SQLException {
        return createServer("9092");
    }

    public static Object createServer(String port) throws SQLException {
        try {
            ClassLoader loader = Thread.currentThread().getContextClassLoader();
            Class<?> serverClass = Class.forName("org.h2.tools.Server", true, loader);
            Method createServer = serverClass.getMethod("createTcpServer", String[].class);
            return createServer.invoke(null, new Object[] { new String[] { "-tcp","-tcpAllowOthers", "-tcpPort", port } });

        } catch (ClassNotFoundException | LinkageError e) {
            throw new RuntimeException("Failed to load and initialize org.h2.tools.Server", e);

        } catch (SecurityException | NoSuchMethodException e) {
            throw new RuntimeException("Failed to get method org.h2.tools.Server.createTcpServer()", e);

        } catch (IllegalAccessException | IllegalArgumentException e) {
            throw new RuntimeException("Failed to invoke org.h2.tools.Server.createTcpServer()", e);

        } catch (InvocationTargetException e) {
            Throwable t = e.getTargetException();
            if (t instanceof SQLException) {
                throw (SQLException) t;
            }
            throw new RuntimeException("Unchecked exception in org.h2.tools.Server.createTcpServer()", t);
        }
    }

    public static void initH2Console(ServletContext servletContext) {
        try {
            // We don't want to include H2 when we are packaging for the "prod" profile and won't
            // actually need it, so we have to load / invoke things at runtime through reflection.
            ClassLoader loader = Thread.currentThread().getContextClassLoader();
            Class<?> servletClass = Class.forName("org.h2.server.web.WebServlet", true, loader);
            Servlet servlet = (Servlet) servletClass.newInstance();

            ServletRegistration.Dynamic h2ConsoleServlet = servletContext.addServlet("H2Console", servlet);
            h2ConsoleServlet.addMapping("/h2-console/*");
            h2ConsoleServlet.setInitParameter("-properties", "src/main/resources/");
            h2ConsoleServlet.setLoadOnStartup(1);

        } catch (ClassNotFoundException | LinkageError e) {
            throw new RuntimeException("Failed to load and initialize org.h2.server.web.WebServlet", e);

        } catch (IllegalAccessException | InstantiationException e) {
            throw new RuntimeException("Failed to instantiate org.h2.server.web.WebServlet", e);
        }
    }
}
