-- Active: 1680770778311@@127.0.0.1@5432@postgres@public
CREATE TABLE users (
    "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    "fullName" VARCHAR(80),
    "email" VARCHAR(255) UNIQUE, 
    "password" VARCHAR(255),
    "createdAt" TIMESTAMP DEFAULT NOW(),
    "updateAt" TIMESTAMP DEFAULT NULL
);

INSERT INTO "users" ("email", "password") VALUES ('admin@mail.com', '1234');
INSERT INTO "users" ("email", "password") VALUES ('fazztrack@mail.com', '1234');
INSERT INTO "users" ("email", "password") VALUES ('jisoo@mail.com', '1234');
INSERT INTO "users" ("fullName","email", "password") VALUES ('Kim Jisoo', 'jisoo@mail.com', '1234');


UPDATE "users" SET "email"='admin@gmail.com' WHERE "id"=1;

DELETE FROM "users" WHERE "id"=2;
DROP TABLE "users";

INSERT INTO "users"
("fullName", "email", "password")
VALUES
('Syahrian Abimanyu', 'abi@mail.com', '123321'),
('Marselino Ferdinan', 'lino@mail.com', '123321'),
('Riko Simanjuntak', 'riko@mail.com', '123321'),
('Cahya Supriadi', 'cahya@mail.com', '123321'),
('Tri Pamungkas', 'tri@mail.com', '123321');


SELECT * FROM "users" LIMIT 5 OFFSET 10;
