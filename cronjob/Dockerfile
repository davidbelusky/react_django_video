FROM ubuntu:latest
MAINTAINER docker@ekito.fr

ADD crontab /etc/cron.d/hello-cron
ADD update_videos.sh ./

RUN chmod 0644 /etc/cron.d/hello-cron

RUN touch /var/log/cron.log

RUN apt-get update
RUN apt-get -y install cron curl

CMD ./update_videos.sh && cron && tail -f /var/log/cron.log