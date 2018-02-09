class Origami < ApplicationRecord
 mount_uploader :imagen, ImageUploader
 default_scope {order 'lower(nombre)'}

 scope :favoritos, ->{ where(favorito: true) }
 scope :setFavorito, -> (id, favorito) {
  ori = Origami.find(id)
  ori.favorito = favorito
  ori.save
 }
end
