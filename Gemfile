source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.1.2"
gem "rails", "~> 7.0.1"
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]
gem "puma", "~> 5.0"
gem "bootsnap", require: false
gem 'debug', '~> 1.6', '>= 1.6.3'
gem 'bcrypt', '~> 3.1', '>= 3.1.18'
# gem 'aws-sdk-s3', require: false
gem 'active_model_serializers', '~> 0.10.13'
gem 'faker', git: 'https://github.com/faker-ruby/faker.git', branch: 'main', require: false
# group :development, :test do
#     gem "debug", platforms: %i[ mri mingw x64_mingw ]
# end

group :development do
    gem "debug", platforms: %i[ mri mingw x64_mingw ]
    # gem 'faker', '~> 1.6', '>= 1.6.6'
end

