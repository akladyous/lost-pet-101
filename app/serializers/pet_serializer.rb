class PetSerializer < ActiveModel::Serializer
    attributes :id, :species, :name, :age, :size, :description, :breed, :gender, :color, :microchip, :height, :weight, :coat, :collar, :image_url


    def image_url
        # debugger
        if object.is_attached?
            # Rails.application.routes.url_helpers.rails_blob_url(self.object.image_file.blob, only_path: true)
            Rails.application.routes.url_helpers.rails_blob_path(self.object.image_file, only_path: true)
            # object.image_file.blob.url
        else
            nil
        end
    end
end
