-- CreateTable
CREATE TABLE "Apprenant" (
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
    CONSTRAINT "Apprenant_ordinateurId_fkey" FOREIGN KEY ("ordinateurId") REFERENCES "Ordinateur" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Apprenant_cohorteId_fkey" FOREIGN KEY ("cohorteId") REFERENCES "Cohorte" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Ordinateur" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tag" TEXT NOT NULL,
    "modele" TEXT NOT NULL,
    "fabriquant" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Cohorte" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" INTEGER NOT NULL,
    "sessionId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    CONSTRAINT "Cohorte_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Session" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Session" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "annee" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "ville" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Coach" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "prenom" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "postnom" TEXT NOT NULL,
    "date_naissance" DATETIME NOT NULL,
    "adresse" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Affectation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "coachId" INTEGER NOT NULL,
    "cohorteId" INTEGER NOT NULL,
    CONSTRAINT "Affectation_coachId_fkey" FOREIGN KEY ("coachId") REFERENCES "Coach" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Affectation_cohorteId_fkey" FOREIGN KEY ("cohorteId") REFERENCES "Cohorte" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Ordinateur_tag_key" ON "Ordinateur"("tag");

-- CreateIndex
CREATE UNIQUE INDEX "Cohorte_code_key" ON "Cohorte"("code");
