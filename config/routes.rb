Rails.application.routes.draw do
  resources :listing_addresses
  resources :listings
  resources :pets
  resources :user_addresses
  resources :user_profiles
  resources :users

end


# Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

# Defines the root path route ("/")
# root "articles#index"