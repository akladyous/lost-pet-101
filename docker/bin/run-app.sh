
bundle check || bundle install --jobs 20 --retry 5
bundle exec rails db:create db:migrate

bundle exec rails s -b "0.0.0.0"


