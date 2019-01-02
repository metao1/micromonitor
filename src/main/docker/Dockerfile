FROM openjdk:8-jre-alpine

ENV SPRING_OUTPUT_ANSI_ENABLED=ALWAYS \
    NgMcmonitor_SLEEP=0 \
    JAVA_OPTS=""

# Add a NgMcmonitor user to run our application so that it doesn't need to run as root
RUN adduser -D -s /bin/sh NgMcmonitor
WORKDIR /home/NgMcmonitor

ADD entrypoint.sh entrypoint.sh
RUN chmod 755 entrypoint.sh && chown NgMcmonitor:NgMcmonitor entrypoint.sh
USER NgMcmonitor

ENTRYPOINT ["./entrypoint.sh"]

EXPOSE 8080

ADD *.war app.war

