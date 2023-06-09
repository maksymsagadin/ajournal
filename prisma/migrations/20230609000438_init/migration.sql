-- CreateTable
CREATE TABLE "journalEntry" (
    "uid" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "text" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL,

    CONSTRAINT "journalEntry_pkey" PRIMARY KEY ("uid")
);
