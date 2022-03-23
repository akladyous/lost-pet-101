#!/bin/sh

set -e

echo "Environment: $RAILS_ENV"

bundle check || bundle install --jobs 20 --retry 5
bundle exec rails db:create db:migrate

# Remove pre-existing puma/passenger server.pid
rm -f $APP_PATH/tmp/pids/server.pid

# run passed commands
bundle exec ${@}