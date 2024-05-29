#!/bin/bash

# Se déplacer vers le répertoire spécifié
cd "$1" || exit

# Compter le nombre total de fichiers dans le répertoire
file_count=$(find . -maxdepth 1 -type f | wc -l)

# Compteur pour les noms de fichiers numérotés
counter=1

# Parcourir tous les fichiers dans le répertoire
for file in *; do
    # Renommer chaque fichier avec un numéro
    if [[ -f "$file" ]]; then
        # Extraire l'extension du fichier
        extension="${file##*.}"
        # Construire le nouveau nom de fichier numéroté
        new_name="$counter.$extension"
        # Renommer le fichier
        mv "$file" "$new_name"
        # Incrémenter le compteur
        ((counter++))
    fi
done

echo "Renommage terminé."
