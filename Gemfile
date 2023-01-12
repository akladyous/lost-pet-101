source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.1.2"
gem 'rails', '~> 7.0', '>= 7.0.4'
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]
gem "puma", "~> 5.0"
gem "bootsnap", require: false
gem 'bcrypt', '~> 3.1', '>= 3.1.18'
gem "pg", "~> 1.1"
# gem 'aws-sdk-s3', require: false
gem 'active_model_serializers', '~> 0.10.13'

# group :development, :test do
#     gem "debug", platforms: %i[ mri mingw x64_mingw ]
# end

group :development, :test do
    gem "debug", platforms: %i[ mri mingw x64_mingw ]
    gem 'faker', git: 'https://github.com/faker-ruby/faker.git', branch: 'main', require: false
    gem 'dotenv-rails', '~> 2.8', '>= 2.8.1'
end
