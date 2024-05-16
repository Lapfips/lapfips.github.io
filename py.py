import os

def compte_lignes_fichier(nom_fichier):
    try:
        with open(nom_fichier, 'r', encoding='utf-8') as f:
            return sum(1 for _ in f)
    except UnicodeDecodeError:
        # Si une erreur de décodage se produit, essayez avec un autre encodage
        with open(nom_fichier, 'r', encoding='latin-1') as f:
            return sum(1 for _ in f)


import os

def compte_lignes_fichier(nom_fichier):
    try:
        with open(nom_fichier, 'r', encoding='utf-8') as f:
            return sum(1 for _ in f)
    except UnicodeDecodeError:
        # Si une erreur de décodage se produit, essayez avec un autre encodage
        with open(nom_fichier, 'r', encoding='latin-1') as f:
            return sum(1 for _ in f)

def compte_lignes_repertoire(repertoire):
    total_lignes = 0
    for dossier, _, fichiers in os.walk(repertoire):
        for nom_fichier in fichiers:
            chemin_fichier = os.path.join(dossier, nom_fichier)
            total_lignes += compte_lignes_fichier(chemin_fichier)
    return total_lignes

if __name__ == "__main__":
    repertoire_courant = os.getcwd()
    total_lignes = compte_lignes_repertoire(repertoire_courant)
    print(f"Nombre total de lignes dans le répertoire courant : {total_lignes}")
