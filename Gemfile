source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.7.4"
gem "rails", "~> 7.0.1"
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]
gem "puma", "~> 5.0"
gem "bootsnap", require: false
gem "pg", "~> 1.1"
gem "bcrypt", "~> 3.1.7"
gem 'aws-sdk-s3', require: false
gem "active_model_serializers", "~> 0.10.12"
gem 'faker', '~> 1.6', '>= 1.6.6', require: false
gem 'rack-cors', :require => 'rack/cors'

# group :development, :test do
#     gem "debug", platforms: %i[ mri mingw x64_mingw ]
# end

group :development do
    gem "debug", platforms: %i[ mri mingw x64_mingw ]
    # gem 'faker', '~> 1.6', '>= 1.6.6'
end

