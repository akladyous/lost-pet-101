Rails.application.routes.draw do    

    scope :users do
            get :profile, to: "users#show"
            post :login, to: "sessions#create"
            delete :logout, to: "sessions#destroy"
            post :signup, to: "users#create"
            post :profile, to: "users#create_user_profile"
            patch :profile, to: "users#update_user_profile"
    end

    scope :api do

        resources :pets, except: :index do
            collection do
                patch 'image', to: 'pets#upload'
                get 'image', to: 'pets#download'
            end
        end

        resources :listing_infos do
            collection do
                get 'public(/:total)', to: "listing_infos#public"
                post 'public', to: "listing_infos#new_listing"
                get 'sample(/:total)', to: "listing_infos#sample"
                get 'listing_founds(/:total)', to: "listing_infos#listing_founds"
                get 'testimonials(/:total)', to: "listing_infos#listing_founds"
            end
        end

        resources :listings, except: [:index, :destroy]
        resources :listing_addresses, except: [:index, :destroy]

        resources :listing_requests


        
        resources :feedbacks, only: [:create]
    end
    # resources :contact_us

    # namespace :testimonials, path: "api/listing_infos" do
    # namespace :testimonials do
    #     get 'listing_founds(/:total)', to: redirect("api/listing_infos/listing_founds")
    # end
end
