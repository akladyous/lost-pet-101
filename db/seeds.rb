require 'debug'
require 'faker'
Faker::Config.locale = :en


spinner = Enumerator.new do |e|
    loop do
        e.yield '|'
        e.yield '/'
        e.yield '-'
        e.yield '\\'
    end
end

def create_user
    user = User.new(
        user_name: Faker::Internet.username,
        email: Faker::Internet.email, 
        password: Faker::Internet.password
        # (min_length: 5, max_length: 10, mix_case: true, special_characters: true)
    )
    if user.valid?
        if user.save
            user.create_user_profile(
                first_name: Faker::Name.first_name,
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
        end
    end
    return user
end

def create_pet
    species = -> {["Dog","Cat"].sample}
    colors = -> {["Black and tan", "brown and tan", "Bicolor", "Irish spotted", "Flashy", "Patched", "Tuxedo", "Tricolor", "Spotted", "Flecked", "ticked", "speckled", "Brindle", "Sable"].sample}
    gender = ->{["male","female"].sample}
    microchip = -> {rand.to_s[2..9]}
    coat = -> {["Hairless", "Curly-Coated", "Wire-Coated", "Long-Coated", "Short-Coated", "Medium-Coated", "Smooth",  "Double and Single Coated", "Silky Coated","Rough Coated", "Wire Coated", "Hairless", "Drying a silky coated", "Washing a silky coated", "Drying a double coated"].sample}
    
    pet = Pet.create(
        name: Faker::Creature::Animal.name,
        age: rand(1..15),
        size: %w[small medium large].sample,
        species: species.(),
        breed: -> { species.() =="Dog" ?  Faker::Creature::Dog.breed : Faker::Creature::Cat.breed}.(),
        gender: gender.(),
        color: colors.(),
        microchip: microchip.().to_i,
        collar: [true, false].sample,
        coat: coat.()
    )
    return pet
end

def create_listing_info(user, pet)
    listing_type = -> {%w[lost].sample}
    random_date = -> {rand(1.year.ago..2.month.ago)}
    listing_info = ListingInfo.create(listing_type: listing_type.call, published: true, published_at: random_date.(), user: user, pet: pet)
    return listing_info
end

def create_listing listing_info
    random_date = -> {rand(1.year.ago..2.month.ago)}
    # debugger
    listing = Listing.create(date_lost_found: random_date.(), msg_from: Faker::Quote.matz, description: Faker::Quote.matz, listing_info: listing_info)
    return listing
end

puts "🌱 Seeding Users..."

1.upto(10) do |i|
    progress = "=" * (i/5) unless i < 5
    printf("\rGenerating  records: %s", spinner.next)
    # printf("\rGenerating user records: [%-20s] %d%%", progress, i)

    user = create_user
    pet = create_pet
    if user && pet
        listing_info = create_listing_info(user, pet)
        # debugger
        if listing_info
            listing = create_listing(listing_info)
            if listing
                listing.create_listing_address(
                    address1: Faker::Address.street_address,
                    address2: Faker::Address.secondary_address,
                    city: Faker::Address.city,
                    zip_code: Faker::Address.zip,
                    state: Faker::Address.state
                )
                listing.create_listing_comment(
                    comment: Faker::Quote.yoda,
                    likes: rand(1..10)
                )
            end
        end
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