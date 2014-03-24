class CreateRuns < ActiveRecord::Migration
  def change
    create_table :runs do |t|
      t.string :name
      t.string :start
      t.string :finish
      t.string :distance
      t.string :time

      t.timestamps
    end
  end
end
