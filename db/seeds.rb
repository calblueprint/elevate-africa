# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: "Chicago" }, { name: "Copenhagen" }])
#   Mayor.create(name: "Emanuel", city: cities.first)

def create_admin_with_buzzes
  1.times do |n|
    admin = Admin.create email: "admin#{n}@gmail.com",
                         password: "password",
                         name: "Admin #{n}"
  end
  5 times do |n|
    admin.buzzes.create headline: "This is a cool headline",
                        subhead: "This is a cool subhead",
                        description: Faker::Lorem.paragraph(8),
                        box_size: Random.new.rand(1..3),
                        box_color: "#FFC48C"
  end
end

def create_admin
  1.times do |n|
    Admin.create email: "admin#{n}@gmail.com",
                 password: "password",
                 name: "Admin #{n}"
  end
end

def create_team_and_campaign_with_donations
  10.times do |n|
    team = Team.create email: "team#{n}@gmail.com",
                       password: "password",
                       name: "Team #{n}"
    team.campaign = Campaign.create name: Faker::Name.name,
                                    goal: 1000.00,
                                    description: Faker::Lorem.paragraph
    team.campaign.donations.create name: Faker::Name.name,
                                   amount: Random.rand(0..1000)

  end
end

create_admin_with_buzzes
create_admin
create_team_and_campaign_with_donations
create_buzzes
