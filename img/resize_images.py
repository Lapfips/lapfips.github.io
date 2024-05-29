import os
from PIL import Image

def resize_images(input_folder, output_folder, target_size):
    # Vérifie si le dossier de sortie existe, sinon le crée
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # Liste tous les fichiers dans le dossier d'entrée
    files = os.listdir(input_folder)

    # Parcourt tous les fichiers
    for file in files:
        input_path = os.path.join(input_folder, file)
        output_path = os.path.join(output_folder, file)
        
        try:
            # Ouvre l'image
            img = Image.open(input_path)

            # Redimensionne l'image
            img_resized = img.resize((target_size, target_size))

            # Enregistre l'image redimensionnée dans le dossier de sortie
            img_resized.save(output_path)
            
            print(f"Image {file} redimensionnée avec succès.")
        except Exception as e:
            print(f"Impossible de redimensionner l'image {file}: {e}")

# Usage du programme
if __name__ == "__main__":
    input_folder = input("Entrez le chemin du dossier contenant les images à redimensionner : ")
    output_folder = input("Entrez le chemin du dossier où enregistrer les images redimensionnées : ")
    target_size = 800
    
    resize_images(input_folder, output_folder, target_size)
