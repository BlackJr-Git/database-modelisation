-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Apprenant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ordinateurId" INTEGER NOT NULL,
    "cohorteId" INTEGER NOT NULL,
    "prenom" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "postnom" TEXT NOT NULL,
    "date_naissance" DATETIME NOT NULL,
    "adresse" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "password" TEXT NOT NULL DEFAULT '',
    CONSTRAINT "Apprenant_ordinateurId_fkey" FOREIGN KEY ("ordinateurId") REFERENCES "Ordinateur" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Apprenant_cohorteId_fkey" FOREIGN KEY ("cohorteId") REFERENCES "Cohorte" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Apprenant" ("adresse", "cohorteId", "date_naissance", "email", "id", "nom", "ordinateurId", "postnom", "prenom", "telephone") SELECT "adresse", "cohorteId", "date_naissance", "email", "id", "nom", "ordinateurId", "postnom", "prenom", "telephone" FROM "Apprenant";
DROP TABLE "Apprenant";
ALTER TABLE "new_Apprenant" RENAME TO "Apprenant";
CREATE TABLE "new_Coach" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "prenom" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "postnom" TEXT NOT NULL,
    "date_naissance" DATETIME NOT NULL,
    "adresse" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "password" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_Coach" ("adresse", "date_naissance", "email", "id", "nom", "postnom", "prenom", "telephone") SELECT "adresse", "date_naissance", "email", "id", "nom", "postnom", "prenom", "telephone" FROM "Coach";
DROP TABLE "Coach";
ALTER TABLE "new_Coach" RENAME TO "Coach";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
