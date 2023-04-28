INSERT INTO "categories" ("name") VALUES
('Music'),
('Arts'),
('Outdoors'),
('Workshop'),
('Sport'),
('Festival'),
('Fashion');

INSERT INTO "cities" ("name") VALUES
('Jakarta'),
('Bandung'),
('Bali'),
('Aceh'),
('Solo'),
('Yogyakarta'),
('Semarang');

ALTER TABLE "events" ADD COLUMN "createdBy" INTEGER;

INSERT INTO "events" ("title", "date", "cityId", "descriptions", "createdBy") VALUES
('BRI LIGA 1, Persija VS Persebaya', '2023-04-30', 1, 'Pertandingan pekan ke-34 BRI LIGA 1', 1),
('BRI LIGA 1, Persib VS Persita', '2023-05-01', 2, 'Pertandingan pekan ke-34 BRI LIGA 1', 1),
('BRI LIGA 1, Bali United VS PSM', '2023-05-02', 3, 'Pertandingan pekan ke-34 BRI LIGA 1', 1),
('BRI LIGA 1, Persiraja VS Sriwijaya', '2023-05-03', 4, 'Pertandingan pekan ke-34 BRI LIGA 1', 1),
('BRI LIGA 1, Persis VS PSS', '2023-05-04', 5, 'Pertandingan pekan ke-34 BRI LIGA 1', 1),
('BRI LIGA 1, PSIM VS Persikabo', '2023-05-05', 6, 'Pertandingan pekan ke-34 BRI LIGA 1', 1),
('BRI LIGA 1, PSIS VS Dewa United', '2023-05-06', 7, 'Pertandingan pekan ke-34 BRI LIGA 1', 1);

INSERT INTO "eventCategories" ("eventId", "categoryId") VALUES
(1, 5),
(2, 5),
(3, 5),
(4, 5),
(5, 5),
(6, 5),
(7, 5);
