FROM ruby:2.7.4-alpine

RUN touch ~/.bashrc
RUN apk update && apk upgrade
RUN apk -U add --no-cache sudo bash git curl build-base postgresql-dev postgresql-client tzdata npm nodejs
RUN rm -rf /var/cache/apk/*

ENV BUNDLE_PATH /usr/local/bundle/gems
ENV TMP_PATH /tmp/
ENV RAILS_LOG_TO_STDOUT true
ENV APP_PATH /app
ENV RAILS_PORT 3000

WORKDIR /app

ADD Gemfile /app/Gemfile
ADD Gemfile.lock /app/Gemfile.lock
COPY ./client/package.json /app/package.json
COPY ./docker/bin/ /usr/local/bin/

# ADD entrypoint.sh /usr/local/bin/entrypoint.sh
# COPY /docker/dev-entrypoint.sh /usr/local/bin/dev-entrypoint.sh

RUN chmod +x /usr/local/bin/dev-entrypoint.sh
RUN chmod +x /usr/local/bin/prod-entrypoint.sh
RUN chmod +x /usr/local/bin/run-app.sh
RUN chmod +x /usr/local/bin/wait-postgres.sh
RUN chmod +x /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/react.sh

RUN gem install rubygems-update --no-document
RUN gem install bundler --version 2.3.8
RUN gem install rails
RUN bundle install
RUN npm install npm@latest -g
RUN rm -rf $GEM_HOME/cache/*

EXPOSE $RAILS_PORT

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
# ENTRYPOINT ["/usr/bin/run-app"]
CMD ["rails", "server", "-b", "0.0.0.0"]


# CMD ["./bin/rails", "server", "-b", "0.0.0.0", "-p", "3000"]
# ENTRYPOINT [ "bundle", "exec" ]
# CMD ["prod-entrypoint.sh"]

# ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
# CMD ["/usr/local/bin/run-app.sh"]