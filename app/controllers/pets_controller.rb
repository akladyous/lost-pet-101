class PetsController < ApplicationController
    skip_before_action :authenticate_user, only: [:show, :create] 

    def show
        if current_user.pet
            render json: current_user.pet, status: :ok
        else
            render json: {error: "Pet not found"}, status: :not_found
        end
    end

    def create
        if current_user.pet
            render json: {error: "Pet already exist"}, status: :unprocessable_entity
        else
            @pet = current_user.create_pet(pet_params)
            if @pet.save
                render json: @pet, status: :ok
            else
                render json: {error: "Unable to create Pet profile"}, status: :unprocessable_entity
            end
        end
    end

    def delete
    end

    def update
        if current_user.pet
            @pet = current_user.pet
            @pet.update(pet_params)
            if @pet.save
                render json: @pet, status: :ok
            else
                render json: {error: "Unable to update Pet profile"}, status: :unprocessable_entity
            end
        else
            render json: {error: "Pet not found"}, status: :not_found
        end
    end


    private
    def pet_params
        params.permit(:species, :name, :age, :size, :description, :breed, :gender, :color, :microchip, :height, :weight, :coat, :collar)
    end
end
