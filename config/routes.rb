Rails.application.routes.draw do
    # resources :listing_comments
    # resources :listing_addresses
    # resources :listings
    # resources :listing_infos
    
    scope :api do
        resources :users, only: [:create] do
            collection do
                get :profile, to: "users#show"
                post :login, to: "sessions#create"
                delete :logout, to: "sessions#destroy"
            end
        end
        
        resources :pets, only: [:create] do
            collection do
                get :profile, to: "pets#show"
                patch :profile, to: "pets#update"
                delete :profile, to: "pets#destroy"
            end
        end
    end

end
