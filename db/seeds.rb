spinner = Enumerator.new do |e|
    loop do
        e.yield '|'
        e.yield '/'
        e.yield '-'
        e.yield '\\'
    end
end

puts "🌱 Seeding Users..."

1.upto(10) do |i|
    progress = "=" * (i/5) unless i < 5
    printf("\rGenerating user records: %s", spinner.next)
    # printf("\rGenerating user records: [%-20s] %d%%", progress, i)
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
            state: Faker::Address.state,
            zip_code: Faker::Address.zip
        )
        # country: Faker::Address.country_name_to_code(name: 'united_states')
    end
    end
end


species = -> {["Dog","Cat"].sample}
colors = -> {["Black and tan", "brown and tan", "Bicolor", "Irish spotted", "Flashy", "Patched", "Tuxedo", "Tricolor", "Spotted", "Flecked", "ticked", "speckled", "Brindle", "Sable"].sample}
gender = ->{["male","female"].sample}
microchip = -> {rand.to_s[2..9]}
coat = -> {["Hairless", "Curly-Coated", "Wire-Coated", "Long-Coated", "Short-Coated", "Medium-Coated", "Smooth",  "Double and Single Coated", "Silky Coated","Rough Coated", "Wire Coated", "Hairless", "Drying a silky coated", "Washing a silky coated", "Drying a double coated"].sample}

puts "🌱 Seeding Pets..."
1.upto(10) do |i|
    progress = "=" * (i/5) unless i < 5
    printf("\rGenerating user records: %s", spinner.next)

    Pet.create(
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
end

$stdout.flush
printf("\r\n")
puts "✅ Done seeding!"

# instance_variable_set("@tipo", "#{["Dog","Cat"].sample}")