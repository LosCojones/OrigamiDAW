class AddFavoritoToOrigamis < ActiveRecord::Migration[5.1]
  def change
    add_column :origamis, :favorito, :boolean
    change_column_default :origamis, :favorito, false
  end

  def self.down
    change_column_default :origamis, :favorito, nil
  end
end
