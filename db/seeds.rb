# require 'debug'
require 'faker'
Faker::Config.locale = :en

system('clear')
puts "How many records ?"
total_record = gets.strip().to_i
puts "🌱 Seeding #{total_record.to_i} Users ..."

spinner = Enumerator.new do |e|
    loop do
        e.yield '|'
        e.yield '/'
        e.yield '-'
        e.yield '\\'
    end
end

def create_user idx
    folder =  -> {"#{Rails.root.to_s}/client/src/images/avatars".downcase}
    images = -> {Dir.entries(folder.call) - %w[. .. .DS_Store]}
    
    first_name = Faker::Name.first_name
    user = User.new(
        # user_name: Faker::Internet.username,
        user_name: "#{first_name}#{idx}",
        email: Faker::Internet.email, 
        password: "00000",
        password_confirmation: "00000" 
        # password: Faker::Internet.password(min_length: 5, max_length: 10, mix_case: true, special_characters: true)
    )

    if user.valid?
        if user.save
            user.create_user_profile(
                # first_name: Faker::Name.first_name,
                first_name: first_name,
                last_name: Faker::Name.last_name ,
                home_phone: Faker::PhoneNumber.phone_number,
                cell_phone: Faker::PhoneNumber.cell_phone,
                job_title: Faker::Job.title,
                company: Faker::Company.name,
                website: Faker::Internet.url,
                blog: Faker::Internet.url
            )
            user.create_user_address(
                address1: Faker::Address.street_address,
                address2: Faker::Address.secondary_address,
                city: Faker::Address.city,
                zip_code: Faker::Address.zip,
                state: Faker::Address.state
            )
            # country: Faker::Address.country_name_to_code(name: 'united_states')
            user.avatar.attach(io: File.open("#{folder.call}/#{images.call[idx]}"), filename: images.call[idx])
        end
    end
    return user
end

def create_pet idx
    species = -> {["dog","cat"].sample}
    species_temp = species.call
    folder =  -> {"#{Rails.root.to_s}/client/src/images/#{species_temp.pluralize}".downcase}
    images = -> {Dir.entries(folder.call) - %w[. .. .DS_Store]}
    colors = -> {["Black and tan", "brown and tan", "Bicolor", "Irish spotted", "Flashy", "Patched", "Tuxedo", "Tricolor", "Spotted", "Flecked", "ticked", "speckled", "Brindle", "Sable"].sample}
    gender = ->{["male","female"].sample}
    microchip = -> {rand.to_s[2..9]}
    coat = -> {["Hairless", "Curly-Coated", "Wire-Coated", "Long-Coated", "Short-Coated", "Medium-Coated", "Smooth",  "Double and Single Coated", "Silky Coated","Rough Coated", "Wire Coated", "Hairless", "Drying a silky coated", "Washing a silky coated", "Drying a double coated"].sample}

    pet = Pet.new(
        name: Faker::Creature::Animal.name,
        age: rand(1..15),
        size: %w[small medium large].sample,
        species: species_temp,
        breed: -> { species_temp =="dog" ?  Faker::Creature::Dog.breed : Faker::Creature::Cat.breed}.(),
        gender: gender.(),
        color: colors.(),
        microchip: microchip.().to_i,
        collar: [true, false].sample,
        coat: coat.()
    )

    if pet.valid? 
        if pet.save!
            pet.image_file.attach(io: File.open("#{folder.call}/#{images.call[idx]}"), filename: images.call[idx])
            return pet
        else
            return nil
        end
    else
        return nil
    end
end

def create_listing_info(user, pet)
    if user && pet
        listing_type = -> {%w[lost found].sample}
        random_date = -> {rand(1.year.ago..2.month.ago)}
        listing_info = ListingInfo.create(listing_type: listing_type.call, published: true, published_at: random_date.(), user: user, pet: pet)
        return listing_info
    else
        return nil
    end
end

def create_listing listing_info
    random_date = -> {rand(1.year.ago..2.month.ago)}
    # sentence = Faker::Lorem.sentence(word_count: 10)
    # sentence = Faker::Lorem.paragraph(sentence_count: 5)
    # sentence = "#{Faker::Quote.matz} #{Faker::Quote.yoda} #{Faker::Lorem.paragraph}"
    sentence = "#{Faker::Quote.matz} #{Faker::Lorem.paragraph}"
    listing = Listing.create(date_lost_found: random_date.(), msg_from: Faker::Quote.matz, description: sentence, listing_info: listing_info)
    return listing
end

def create_listing_address listing
    listing.create_listing_address(
        address1: Faker::Address.street_address,
        address2: Faker::Address.secondary_address,
        city: Faker::Address.city,
        zip_code: Faker::Address.zip,
        state: Faker::Address.state
    )
end

def create_listing_comment listing
    comment = "#{Faker::Quote.matz} #{Faker::Lorem.paragraph}"
    listing.create_listing_comment(comment: comment, likes: rand(1..10))
end


1.upto(total_record-1) do |index|

    progress = "=" * (index/5) unless index < 5
    printf("\rGenerating  records: %s", spinner.next)
    # printf("\rGenerating user records: [%-20s] %d%%", progress, index/5)

    user = create_user index
    pet = create_pet index

    if !user.nil?
        if !pet.nil?
            listing_info = create_listing_info(user, pet)
            if !listing_info.nil?
                listing = create_listing(listing_info)
                if !listing.nil?
                    create_listing_address listing
                    create_listing_comment listing
                else
                    user.destroy
                    pet.destroy
                    listing_info.destroy
                end
            else
                user.destroy
                pet.destroy
            end
        else
            user.destroy
        end
    else
        user.destroy
    end

end

# puts "🌱 Seeding Pets..."
# 1.upto(10) do |i|
#     progress = "=" * (i/5) unless i < 5
#     printf("\rGenerating user records: %s", spinner.next)


# end

$stdout.flush
printf("\rGenerating records completed!", )
printf("\r\n")
puts "✅ Done seeding!"

# instance_variable_set("@tipo", "#{["Dog","Cat"].sample}")