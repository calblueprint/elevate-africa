# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141122043926) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "achievements", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "name"
    t.string   "description", default: ""
  end

  create_table "badges", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "team_id"
    t.integer  "achievement_id"
  end

  add_index "badges", ["achievement_id"], name: "index_badges_on_achievement_id", using: :btree
  add_index "badges", ["team_id"], name: "index_badges_on_team_id", using: :btree

  create_table "buzzes", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "content"
    t.integer  "admin_id"
    t.string   "video_link"
    t.string   "headline"
    t.string   "subhead"
    t.string   "picture"
    t.integer  "box_size"
    t.string   "box_color"
  end

  add_index "buzzes", ["admin_id"], name: "index_buzzes_on_admin_id", using: :btree

  create_table "campaigns", force: true do |t|
    t.string   "name"
    t.integer  "goal"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "description", default: ""
    t.integer  "team_id"
    t.string   "picture"
    t.integer  "duration"
    t.integer  "kind",        default: 0
  end

  add_index "campaigns", ["team_id"], name: "index_campaigns_on_team_id", using: :btree

  create_table "comments", force: true do |t|
    t.string   "commenter"
    t.text     "body"
    t.integer  "campaign_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "comments", ["campaign_id"], name: "index_comments_on_campaign_id", using: :btree

  create_table "donations", force: true do |t|
    t.string   "name"
    t.integer  "amount",      default: 0
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "campaign_id"
    t.string   "email",       default: ""
  end

  add_index "donations", ["campaign_id"], name: "index_donations_on_campaign_id", using: :btree

  create_table "users", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "password"
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.string   "type"
    t.string   "name",                   default: ""
    t.string   "picture"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end
