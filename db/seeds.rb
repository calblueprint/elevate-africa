# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: "Chicago" }, { name: "Copenhagen" }])
#   Mayor.create(name: "Emanuel", city: cities.first)

admin = Admin.create(email: "admin@gmail.com", password: "password", name: "Charles Xue")
team = Team.create(email: "admin@gmail.com", password: "password", name: "Charles Xue Cool Team")
team.campaign = Campaign.create(name: "This awesome adventure", goal: 1000.00)
