-- migrate:up
    CREATE
    EXTENSION IF NOT EXISTS "uuid-ossp";

    CREATE TABLE parking_lots
    (
        "pl_id"               UUID        NOT NULL DEFAULT uuid_generate_v4(),
        "pl_name"             VARCHAR(100),
        "pl_spots"            BIGINT,
        "pl_contact"          BIGINT,
        "pl_parking_type"     VARCHAR(30),
        CONSTRAINT "pk_pl_id" PRIMARY KEY ("pl_id")
    );

    COMMENT
    ON COLUMN "parking_lots"."pl_id" IS 'Unique ID of table';
        COMMENT
    ON COLUMN "parking_lots"."pl_name" IS 'This column represents the name of the parking lot';
        COMMENT
    ON COLUMN "parking_lots"."pl_spots" IS 'This column represents the number of parking spots';
        COMMENT
    ON COLUMN "parking_lots"."pl_contact" IS 'This column represents the contact number of the parking lot';
        COMMENT
    ON COLUMN "parking_lots"."pl_parking_type" IS 'This column represents the type of parking lot';
 
    CREATE INDEX "idx_pl_id" ON "parking_lots" ("pl_id");

-- migrate:down

    -- Drop the table and all related indexes