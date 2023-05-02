/*
 Navicat Premium Data Transfer

 Source Server         : DATABASE
 Source Server Type    : PostgreSQL
 Source Server Version : 150002 (150002)
 Source Host           : localhost:5432
 Source Catalog        : postgres
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 150002 (150002)
 File Encoding         : 65001

 Date: 02/05/2023 08:42:51
*/


-- ----------------------------
-- Sequence structure for categories_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."categories_id_seq";
CREATE SEQUENCE "public"."categories_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for cities_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."cities_id_seq";
CREATE SEQUENCE "public"."cities_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for eventCategories_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."eventCategories_id_seq";
CREATE SEQUENCE "public"."eventCategories_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for events_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."events_id_seq";
CREATE SEQUENCE "public"."events_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for forgotRequest_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."forgotRequest_id_seq";
CREATE SEQUENCE "public"."forgotRequest_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for partners_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."partners_id_seq";
CREATE SEQUENCE "public"."partners_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for paymentMethods_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."paymentMethods_id_seq";
CREATE SEQUENCE "public"."paymentMethods_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for profiles_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."profiles_id_seq";
CREATE SEQUENCE "public"."profiles_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for reservationSections_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."reservationSections_id_seq";
CREATE SEQUENCE "public"."reservationSections_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for reservationStatus_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."reservationStatus_id_seq";
CREATE SEQUENCE "public"."reservationStatus_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for reservationTickets_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."reservationTickets_id_seq";
CREATE SEQUENCE "public"."reservationTickets_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for reservations_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."reservations_id_seq";
CREATE SEQUENCE "public"."reservations_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for users_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."users_id_seq";
CREATE SEQUENCE "public"."users_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for wishlists_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."wishlists_id_seq";
CREATE SEQUENCE "public"."wishlists_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Table structure for categories
-- ----------------------------
DROP TABLE IF EXISTS "public"."categories";
CREATE TABLE "public"."categories" (
  "id" int4 NOT NULL GENERATED ALWAYS AS IDENTITY (
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1
),
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "createdAt" timestamp(6) DEFAULT now(),
  "updatedAt" timestamp(6)
)
;

-- ----------------------------
-- Records of categories
-- ----------------------------
INSERT INTO "public"."categories" OVERRIDING SYSTEM VALUE VALUES (1, 'Music', '2023-04-28 16:51:06.342871', NULL);
INSERT INTO "public"."categories" OVERRIDING SYSTEM VALUE VALUES (2, 'Arts', '2023-04-28 16:51:06.342871', NULL);
INSERT INTO "public"."categories" OVERRIDING SYSTEM VALUE VALUES (3, 'Outdoors', '2023-04-28 16:51:06.342871', NULL);
INSERT INTO "public"."categories" OVERRIDING SYSTEM VALUE VALUES (4, 'Workshop', '2023-04-28 16:51:06.342871', NULL);
INSERT INTO "public"."categories" OVERRIDING SYSTEM VALUE VALUES (5, 'Sport', '2023-04-28 16:51:06.342871', NULL);
INSERT INTO "public"."categories" OVERRIDING SYSTEM VALUE VALUES (6, 'Festival', '2023-04-28 16:51:06.342871', NULL);
INSERT INTO "public"."categories" OVERRIDING SYSTEM VALUE VALUES (7, 'Fashion', '2023-04-28 16:51:06.342871', NULL);

-- ----------------------------
-- Table structure for cities
-- ----------------------------
DROP TABLE IF EXISTS "public"."cities";
CREATE TABLE "public"."cities" (
  "id" int4 NOT NULL GENERATED ALWAYS AS IDENTITY (
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1
),
  "picture" varchar(255) COLLATE "pg_catalog"."default",
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "createdAt" timestamp(6) DEFAULT now(),
  "updatedAt" timestamp(6)
)
;

-- ----------------------------
-- Records of cities
-- ----------------------------
INSERT INTO "public"."cities" OVERRIDING SYSTEM VALUE VALUES (1, NULL, 'Jakarta', '2023-04-28 16:51:24.898339', NULL);
INSERT INTO "public"."cities" OVERRIDING SYSTEM VALUE VALUES (2, NULL, 'Bandung', '2023-04-28 16:51:24.898339', NULL);
INSERT INTO "public"."cities" OVERRIDING SYSTEM VALUE VALUES (3, NULL, 'Bali', '2023-04-28 16:51:24.898339', NULL);
INSERT INTO "public"."cities" OVERRIDING SYSTEM VALUE VALUES (4, NULL, 'Aceh', '2023-04-28 16:51:24.898339', NULL);
INSERT INTO "public"."cities" OVERRIDING SYSTEM VALUE VALUES (5, NULL, 'Solo', '2023-04-28 16:51:24.898339', NULL);
INSERT INTO "public"."cities" OVERRIDING SYSTEM VALUE VALUES (6, NULL, 'Yogyakarta', '2023-04-28 16:51:24.898339', NULL);
INSERT INTO "public"."cities" OVERRIDING SYSTEM VALUE VALUES (7, NULL, 'Semarang', '2023-04-28 16:51:24.898339', NULL);

-- ----------------------------
-- Table structure for eventCategories
-- ----------------------------
DROP TABLE IF EXISTS "public"."eventCategories";
CREATE TABLE "public"."eventCategories" (
  "id" int4 NOT NULL GENERATED ALWAYS AS IDENTITY (
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1
),
  "eventId" int4,
  "categoryId" int4,
  "createdAt" timestamp(6) DEFAULT now(),
  "updatedAt" timestamp(6)
)
;

-- ----------------------------
-- Records of eventCategories
-- ----------------------------
INSERT INTO "public"."eventCategories" OVERRIDING SYSTEM VALUE VALUES (1, 1, 5, '2023-04-28 16:56:07.673613', NULL);
INSERT INTO "public"."eventCategories" OVERRIDING SYSTEM VALUE VALUES (2, 2, 5, '2023-04-28 16:56:07.673613', NULL);
INSERT INTO "public"."eventCategories" OVERRIDING SYSTEM VALUE VALUES (3, 3, 5, '2023-04-28 16:56:07.673613', NULL);
INSERT INTO "public"."eventCategories" OVERRIDING SYSTEM VALUE VALUES (4, 4, 5, '2023-04-28 16:56:07.673613', NULL);
INSERT INTO "public"."eventCategories" OVERRIDING SYSTEM VALUE VALUES (5, 5, 5, '2023-04-28 16:56:07.673613', NULL);
INSERT INTO "public"."eventCategories" OVERRIDING SYSTEM VALUE VALUES (6, 6, 5, '2023-04-28 16:56:07.673613', NULL);
INSERT INTO "public"."eventCategories" OVERRIDING SYSTEM VALUE VALUES (7, 7, 5, '2023-04-28 16:56:07.673613', NULL);

-- ----------------------------
-- Table structure for events
-- ----------------------------
DROP TABLE IF EXISTS "public"."events";
CREATE TABLE "public"."events" (
  "id" int4 NOT NULL GENERATED ALWAYS AS IDENTITY (
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1
),
  "picture" varchar(255) COLLATE "pg_catalog"."default",
  "title" varchar(255) COLLATE "pg_catalog"."default",
  "date" date,
  "cityId" int4,
  "descriptions" text COLLATE "pg_catalog"."default",
  "createdAt" timestamp(6) DEFAULT now(),
  "updatedAt" timestamp(6),
  "createdBy" int4
)
;

-- ----------------------------
-- Records of events
-- ----------------------------
INSERT INTO "public"."events" OVERRIDING SYSTEM VALUE VALUES (1, NULL, 'BRI LIGA 1, Persija VS Persebaya', '2023-04-30', 1, 'Pertandingan pekan ke-34 BRI LIGA 1', '2023-04-28 16:53:47.622022', NULL, 1);
INSERT INTO "public"."events" OVERRIDING SYSTEM VALUE VALUES (2, NULL, 'BRI LIGA 1, Persib VS Persita', '2023-05-01', 2, 'Pertandingan pekan ke-34 BRI LIGA 1', '2023-04-28 16:53:47.622022', NULL, 2);
INSERT INTO "public"."events" OVERRIDING SYSTEM VALUE VALUES (3, NULL, 'BRI LIGA 1, Bali United VS PSM', '2023-05-02', 3, 'Pertandingan pekan ke-34 BRI LIGA 1', '2023-04-28 16:53:47.622022', NULL, 3);
INSERT INTO "public"."events" OVERRIDING SYSTEM VALUE VALUES (4, NULL, 'BRI LIGA 1, Persiraja VS Sriwijaya', '2023-05-03', 4, 'Pertandingan pekan ke-34 BRI LIGA 1', '2023-04-28 16:53:47.622022', NULL, 4);
INSERT INTO "public"."events" OVERRIDING SYSTEM VALUE VALUES (5, NULL, 'BRI LIGA 1, Persis VS PSS', '2023-05-04', 5, 'Pertandingan pekan ke-34 BRI LIGA 1', '2023-04-28 16:53:47.622022', NULL, 5);
INSERT INTO "public"."events" OVERRIDING SYSTEM VALUE VALUES (6, NULL, 'BRI LIGA 1, PSIM VS Persikabo', '2023-05-05', 6, 'Pertandingan pekan ke-34 BRI LIGA 1', '2023-04-28 16:53:47.622022', NULL, 6);
INSERT INTO "public"."events" OVERRIDING SYSTEM VALUE VALUES (7, NULL, 'BRI LIGA 1, PSIS VS Dewa United', '2023-05-06', 7, 'Pertandingan pekan ke-34 BRI LIGA 1', '2023-04-28 16:53:47.622022', NULL, 7);
INSERT INTO "public"."events" OVERRIDING SYSTEM VALUE VALUES (10, '1682969048511.jpg', 'Gatot Kaca', '2023-05-06', 3, 'Seminarnya pak gatot kaca', '2023-05-02 02:24:08.807382', NULL, NULL);
INSERT INTO "public"."events" OVERRIDING SYSTEM VALUE VALUES (8, '1682969333857.jpg', 'Gatot Kaca', '2023-05-06', 3, 'Seminarnya pak gatot kaca', '2023-05-02 01:49:48.993626', NULL, 2);

-- ----------------------------
-- Table structure for forgotRequest
-- ----------------------------
DROP TABLE IF EXISTS "public"."forgotRequest";
CREATE TABLE "public"."forgotRequest" (
  "id" int4 NOT NULL GENERATED ALWAYS AS IDENTITY (
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1
),
  "email" varchar(255) COLLATE "pg_catalog"."default",
  "code" varchar(225) COLLATE "pg_catalog"."default",
  "createdAt" timestamp(6) DEFAULT now(),
  "updatedAt" timestamp(6)
)
;

-- ----------------------------
-- Records of forgotRequest
-- ----------------------------
INSERT INTO "public"."forgotRequest" OVERRIDING SYSTEM VALUE VALUES (1, 'indrasjafri@mail.com', '227440', '2023-04-19 02:31:34.776904', NULL);
INSERT INTO "public"."forgotRequest" OVERRIDING SYSTEM VALUE VALUES (2, 'indrasjafri@mail.com', '973560', '2023-04-25 16:23:57.396284', NULL);

-- ----------------------------
-- Table structure for partners
-- ----------------------------
DROP TABLE IF EXISTS "public"."partners";
CREATE TABLE "public"."partners" (
  "id" int4 NOT NULL GENERATED ALWAYS AS IDENTITY (
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1
),
  "picture" varchar(255) COLLATE "pg_catalog"."default",
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "createdAt" timestamp(6) DEFAULT now(),
  "updatedAt" timestamp(6)
)
;

-- ----------------------------
-- Records of partners
-- ----------------------------

-- ----------------------------
-- Table structure for paymentMethods
-- ----------------------------
DROP TABLE IF EXISTS "public"."paymentMethods";
CREATE TABLE "public"."paymentMethods" (
  "id" int4 NOT NULL GENERATED ALWAYS AS IDENTITY (
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1
),
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "createdAt" timestamp(6) DEFAULT now(),
  "updatedAt" timestamp(6)
)
;

-- ----------------------------
-- Records of paymentMethods
-- ----------------------------

-- ----------------------------
-- Table structure for profiles
-- ----------------------------
DROP TABLE IF EXISTS "public"."profiles";
CREATE TABLE "public"."profiles" (
  "id" int4 NOT NULL GENERATED ALWAYS AS IDENTITY (
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1
),
  "userId" int4,
  "picture" varchar(255) COLLATE "pg_catalog"."default",
  "fullName" varchar(255) COLLATE "pg_catalog"."default",
  "phoneNumber" varchar(255) COLLATE "pg_catalog"."default",
  "gender" int4,
  "profession" varchar(255) COLLATE "pg_catalog"."default",
  "nationality" varchar(255) COLLATE "pg_catalog"."default",
  "birthDate" date,
  "createdAt" timestamp(6) DEFAULT now(),
  "updatedAt" timestamp(6)
)
;

-- ----------------------------
-- Records of profiles
-- ----------------------------
INSERT INTO "public"."profiles" OVERRIDING SYSTEM VALUE VALUES (2, 5, '1682429605297.jpg', 'Indra Sjafri', NULL, NULL, NULL, NULL, NULL, '2023-04-19 01:10:11.694545', NULL);
INSERT INTO "public"."profiles" OVERRIDING SYSTEM VALUE VALUES (3, 6, NULL, 'Indra Sjafri', NULL, NULL, NULL, NULL, NULL, '2023-04-25 22:26:33.42606', NULL);

-- ----------------------------
-- Table structure for reservationSections
-- ----------------------------
DROP TABLE IF EXISTS "public"."reservationSections";
CREATE TABLE "public"."reservationSections" (
  "id" int4 NOT NULL GENERATED ALWAYS AS IDENTITY (
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1
),
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "price" varchar(255) COLLATE "pg_catalog"."default",
  "createdAt" timestamp(6) DEFAULT now(),
  "updatedAt" timestamp(6)
)
;

-- ----------------------------
-- Records of reservationSections
-- ----------------------------

-- ----------------------------
-- Table structure for reservationStatus
-- ----------------------------
DROP TABLE IF EXISTS "public"."reservationStatus";
CREATE TABLE "public"."reservationStatus" (
  "id" int4 NOT NULL GENERATED ALWAYS AS IDENTITY (
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1
),
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "createdAt" timestamp(6) DEFAULT now(),
  "updatedAt" timestamp(6)
)
;

-- ----------------------------
-- Records of reservationStatus
-- ----------------------------

-- ----------------------------
-- Table structure for reservationTickets
-- ----------------------------
DROP TABLE IF EXISTS "public"."reservationTickets";
CREATE TABLE "public"."reservationTickets" (
  "id" int4 NOT NULL GENERATED ALWAYS AS IDENTITY (
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1
),
  "reservationId" int4,
  "sectionId" int4,
  "quantity" int4,
  "createdAt" timestamp(6) DEFAULT now(),
  "updatedAt" timestamp(6)
)
;

-- ----------------------------
-- Records of reservationTickets
-- ----------------------------

-- ----------------------------
-- Table structure for reservations
-- ----------------------------
DROP TABLE IF EXISTS "public"."reservations";
CREATE TABLE "public"."reservations" (
  "id" int4 NOT NULL GENERATED ALWAYS AS IDENTITY (
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1
),
  "eventId" int4,
  "userId" int4,
  "statusId" int4,
  "paymentMethodId" int4,
  "createdAt" timestamp(6) DEFAULT now(),
  "updatedAt" timestamp(6)
)
;

-- ----------------------------
-- Records of reservations
-- ----------------------------

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS "public"."users";
CREATE TABLE "public"."users" (
  "id" int4 NOT NULL GENERATED ALWAYS AS IDENTITY (
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1
),
  "email" varchar(255) COLLATE "pg_catalog"."default",
  "password" varchar(255) COLLATE "pg_catalog"."default",
  "createdAt" timestamp(6) DEFAULT now(),
  "updatedAt" timestamp(6)
)
;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (2, 'shin@mail.com', '$argon2id$v=19$m=65536,t=3,p=4$Q/VJj2n38TqR+o1FN4AUUg$6VjAIJi0JfvcvX6wJ7ysgSKYfefR8S7956lR6+R1pIs', '2023-04-18 00:34:23.123917', NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (3, 'young@mail.com', '$argon2id$v=19$m=65536,t=3,p=4$KiydwtlV8GYt956Edf2Dtw$fevvxGFoDJ8AJahk6SiBnovRqC7HAmx7KAxLF6IM+dQ', '2023-04-18 00:40:23.086623', NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (5, 'indrasjafri@mail.com', '$argon2id$v=19$m=65536,t=3,p=4$rDWaWVeNkfyRTn364XwBZw$Y92XQ6culX/qpWYNUz06E54bZGkGwdSxqEV1dTwtH6c', '2023-04-19 01:10:11.451169', NULL);
INSERT INTO "public"."users" OVERRIDING SYSTEM VALUE VALUES (6, 'indra@mail.com', '$argon2id$v=19$m=65536,t=3,p=4$gE1byP9HQlEZ8fruJMr0XA$6Noisqc+cCJk5K7BVuGE+VFb0zx1+ZNUfgYd/TKUNZg', '2023-04-25 22:26:33.278335', NULL);

-- ----------------------------
-- Table structure for wishlists
-- ----------------------------
DROP TABLE IF EXISTS "public"."wishlists";
CREATE TABLE "public"."wishlists" (
  "id" int4 NOT NULL GENERATED ALWAYS AS IDENTITY (
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1
),
  "eventId" int4,
  "userId" int4,
  "createdAt" timestamp(6) DEFAULT now(),
  "updatedAt" timestamp(6)
)
;

-- ----------------------------
-- Records of wishlists
-- ----------------------------
INSERT INTO "public"."wishlists" OVERRIDING SYSTEM VALUE VALUES (2, 2, 2, '2023-04-30 22:29:41.092453', NULL);
INSERT INTO "public"."wishlists" OVERRIDING SYSTEM VALUE VALUES (3, 3, 3, '2023-04-30 22:29:41.092453', NULL);
INSERT INTO "public"."wishlists" OVERRIDING SYSTEM VALUE VALUES (4, 4, 3, '2023-04-30 22:29:41.092453', NULL);
INSERT INTO "public"."wishlists" OVERRIDING SYSTEM VALUE VALUES (5, 5, 5, '2023-04-30 22:29:41.092453', NULL);
INSERT INTO "public"."wishlists" OVERRIDING SYSTEM VALUE VALUES (6, 6, 5, '2023-04-30 22:29:41.092453', NULL);
INSERT INTO "public"."wishlists" OVERRIDING SYSTEM VALUE VALUES (7, 3, 6, '2023-05-01 00:06:47.754357', NULL);
INSERT INTO "public"."wishlists" OVERRIDING SYSTEM VALUE VALUES (8, 3, 2, '2023-05-01 00:07:25.056413', NULL);
INSERT INTO "public"."wishlists" OVERRIDING SYSTEM VALUE VALUES (9, 4, 2, '2023-05-01 00:14:21.115914', NULL);
INSERT INTO "public"."wishlists" OVERRIDING SYSTEM VALUE VALUES (10, 100, 2, '2023-05-01 00:14:56.479837', NULL);
INSERT INTO "public"."wishlists" OVERRIDING SYSTEM VALUE VALUES (11, 100, NULL, '2023-05-01 00:15:35.405034', NULL);
INSERT INTO "public"."wishlists" OVERRIDING SYSTEM VALUE VALUES (12, 7, 2, '2023-05-01 00:36:59.875493', NULL);
INSERT INTO "public"."wishlists" OVERRIDING SYSTEM VALUE VALUES (13, 1, 2, '2023-05-02 07:56:11.157025', NULL);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."categories_id_seq"
OWNED BY "public"."categories"."id";
SELECT setval('"public"."categories_id_seq"', 7, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."cities_id_seq"
OWNED BY "public"."cities"."id";
SELECT setval('"public"."cities_id_seq"', 7, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."eventCategories_id_seq"
OWNED BY "public"."eventCategories"."id";
SELECT setval('"public"."eventCategories_id_seq"', 7, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."events_id_seq"
OWNED BY "public"."events"."id";
SELECT setval('"public"."events_id_seq"', 10, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."forgotRequest_id_seq"
OWNED BY "public"."forgotRequest"."id";
SELECT setval('"public"."forgotRequest_id_seq"', 2, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."partners_id_seq"
OWNED BY "public"."partners"."id";
SELECT setval('"public"."partners_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."paymentMethods_id_seq"
OWNED BY "public"."paymentMethods"."id";
SELECT setval('"public"."paymentMethods_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."profiles_id_seq"
OWNED BY "public"."profiles"."id";
SELECT setval('"public"."profiles_id_seq"', 3, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."reservationSections_id_seq"
OWNED BY "public"."reservationSections"."id";
SELECT setval('"public"."reservationSections_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."reservationStatus_id_seq"
OWNED BY "public"."reservationStatus"."id";
SELECT setval('"public"."reservationStatus_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."reservationTickets_id_seq"
OWNED BY "public"."reservationTickets"."id";
SELECT setval('"public"."reservationTickets_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."reservations_id_seq"
OWNED BY "public"."reservations"."id";
SELECT setval('"public"."reservations_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."users_id_seq"
OWNED BY "public"."users"."id";
SELECT setval('"public"."users_id_seq"', 6, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."wishlists_id_seq"
OWNED BY "public"."wishlists"."id";
SELECT setval('"public"."wishlists_id_seq"', 13, true);

-- ----------------------------
-- Auto increment value for categories
-- ----------------------------
SELECT setval('"public"."categories_id_seq"', 7, true);

-- ----------------------------
-- Primary Key structure for table categories
-- ----------------------------
ALTER TABLE "public"."categories" ADD CONSTRAINT "categories_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Auto increment value for cities
-- ----------------------------
SELECT setval('"public"."cities_id_seq"', 7, true);

-- ----------------------------
-- Primary Key structure for table cities
-- ----------------------------
ALTER TABLE "public"."cities" ADD CONSTRAINT "cities_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Auto increment value for eventCategories
-- ----------------------------
SELECT setval('"public"."eventCategories_id_seq"', 7, true);

-- ----------------------------
-- Primary Key structure for table eventCategories
-- ----------------------------
ALTER TABLE "public"."eventCategories" ADD CONSTRAINT "eventCategories_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Auto increment value for events
-- ----------------------------
SELECT setval('"public"."events_id_seq"', 10, true);

-- ----------------------------
-- Primary Key structure for table events
-- ----------------------------
ALTER TABLE "public"."events" ADD CONSTRAINT "events_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Auto increment value for forgotRequest
-- ----------------------------
SELECT setval('"public"."forgotRequest_id_seq"', 2, true);

-- ----------------------------
-- Primary Key structure for table forgotRequest
-- ----------------------------
ALTER TABLE "public"."forgotRequest" ADD CONSTRAINT "forgotRequest_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Auto increment value for partners
-- ----------------------------
SELECT setval('"public"."partners_id_seq"', 1, false);

-- ----------------------------
-- Primary Key structure for table partners
-- ----------------------------
ALTER TABLE "public"."partners" ADD CONSTRAINT "partners_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Auto increment value for paymentMethods
-- ----------------------------
SELECT setval('"public"."paymentMethods_id_seq"', 1, false);

-- ----------------------------
-- Primary Key structure for table paymentMethods
-- ----------------------------
ALTER TABLE "public"."paymentMethods" ADD CONSTRAINT "paymentMethods_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Auto increment value for profiles
-- ----------------------------
SELECT setval('"public"."profiles_id_seq"', 3, true);

-- ----------------------------
-- Primary Key structure for table profiles
-- ----------------------------
ALTER TABLE "public"."profiles" ADD CONSTRAINT "profiles_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Auto increment value for reservationSections
-- ----------------------------
SELECT setval('"public"."reservationSections_id_seq"', 1, false);

-- ----------------------------
-- Primary Key structure for table reservationSections
-- ----------------------------
ALTER TABLE "public"."reservationSections" ADD CONSTRAINT "reservationSections_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Auto increment value for reservationStatus
-- ----------------------------
SELECT setval('"public"."reservationStatus_id_seq"', 1, false);

-- ----------------------------
-- Primary Key structure for table reservationStatus
-- ----------------------------
ALTER TABLE "public"."reservationStatus" ADD CONSTRAINT "reservationStatus_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Auto increment value for reservationTickets
-- ----------------------------
SELECT setval('"public"."reservationTickets_id_seq"', 1, false);

-- ----------------------------
-- Primary Key structure for table reservationTickets
-- ----------------------------
ALTER TABLE "public"."reservationTickets" ADD CONSTRAINT "reservationTickets_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Auto increment value for reservations
-- ----------------------------
SELECT setval('"public"."reservations_id_seq"', 1, false);

-- ----------------------------
-- Primary Key structure for table reservations
-- ----------------------------
ALTER TABLE "public"."reservations" ADD CONSTRAINT "reservations_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Auto increment value for users
-- ----------------------------
SELECT setval('"public"."users_id_seq"', 6, true);

-- ----------------------------
-- Uniques structure for table users
-- ----------------------------
ALTER TABLE "public"."users" ADD CONSTRAINT "users_email_key" UNIQUE ("email");

-- ----------------------------
-- Primary Key structure for table users
-- ----------------------------
ALTER TABLE "public"."users" ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Auto increment value for wishlists
-- ----------------------------
SELECT setval('"public"."wishlists_id_seq"', 13, true);

-- ----------------------------
-- Primary Key structure for table wishlists
-- ----------------------------
ALTER TABLE "public"."wishlists" ADD CONSTRAINT "wishlists_pkey" PRIMARY KEY ("id");
