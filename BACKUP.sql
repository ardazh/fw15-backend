PGDMP                         {            postgres     15.1 (Ubuntu 15.1-1.pgdg20.04+1)    15.3 y    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                        0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    5    postgres    DATABASE     p   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C.UTF-8';
    DROP DATABASE postgres;
                postgres    false                       0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    3841                       0    0    DATABASE postgres    ACL     2   GRANT ALL ON DATABASE postgres TO dashboard_user;
                   postgres    false    3841                       0    0    postgres    DATABASE PROPERTIES     �   ALTER DATABASE postgres SET "app.settings.jwt_secret" TO 'bbCY6M9q8CYYgE4knegsHda047vrHqLadC48DTLuJ1AxSnbytJcMvPLKDfftqtU3juEjnT/yyqtWvVZxMMqzgA==';
ALTER DATABASE postgres SET "app.settings.jwt_exp" TO '3600';
                     postgres    false                        2615    28516    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                pg_database_owner    false                       0    0    SCHEMA public    ACL     �   REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT USAGE ON SCHEMA public TO postgres;
GRANT USAGE ON SCHEMA public TO anon;
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT USAGE ON SCHEMA public TO service_role;
                   pg_database_owner    false    17                       1259    29188 
   categories    TABLE     �   CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(255),
    "createdAt" timestamp without time zone DEFAULT now(),
    "updatedAt" timestamp without time zone
);
    DROP TABLE public.categories;
       public         heap    postgres    false    17                       0    0    TABLE categories    ACL     �   GRANT ALL ON TABLE public.categories TO anon;
GRANT ALL ON TABLE public.categories TO authenticated;
GRANT ALL ON TABLE public.categories TO service_role;
          public          postgres    false    264            	           1259    29198    categories_id_seq    SEQUENCE     �   ALTER TABLE public.categories ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.categories_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    17    264                       0    0    SEQUENCE categories_id_seq    ACL     �   GRANT ALL ON SEQUENCE public.categories_id_seq TO anon;
GRANT ALL ON SEQUENCE public.categories_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.categories_id_seq TO service_role;
          public          postgres    false    265            
           1259    29205    cities    TABLE     �   CREATE TABLE public.cities (
    id integer NOT NULL,
    picture character varying(255),
    name character varying(255),
    "createdAt" timestamp without time zone DEFAULT now(),
    "updatedAt" timestamp without time zone
);
    DROP TABLE public.cities;
       public         heap    postgres    false    17                       0    0    TABLE cities    ACL     �   GRANT ALL ON TABLE public.cities TO anon;
GRANT ALL ON TABLE public.cities TO authenticated;
GRANT ALL ON TABLE public.cities TO service_role;
          public          postgres    false    266                       1259    29217    cities_id_seq    SEQUENCE     �   ALTER TABLE public.cities ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.cities_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    266    17            	           0    0    SEQUENCE cities_id_seq    ACL     �   GRANT ALL ON SEQUENCE public.cities_id_seq TO anon;
GRANT ALL ON SEQUENCE public.cities_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.cities_id_seq TO service_role;
          public          postgres    false    267            *           1259    30112    deviceToken    TABLE       CREATE TABLE public."deviceToken" (
    id integer NOT NULL,
    "userId" integer,
    token character varying(255),
    "eventCreationNotif" boolean DEFAULT true,
    "createdAt" timestamp without time zone DEFAULT now(),
    "updatedAt" timestamp without time zone
);
 !   DROP TABLE public."deviceToken";
       public         heap    postgres    false    17            
           0    0    TABLE "deviceToken"    ACL     �   GRANT ALL ON TABLE public."deviceToken" TO anon;
GRANT ALL ON TABLE public."deviceToken" TO authenticated;
GRANT ALL ON TABLE public."deviceToken" TO service_role;
          public          postgres    false    298            )           1259    30111    deviceToken_id_seq    SEQUENCE     �   ALTER TABLE public."deviceToken" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."deviceToken_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    298    17                       0    0    SEQUENCE "deviceToken_id_seq"    ACL     �   GRANT ALL ON SEQUENCE public."deviceToken_id_seq" TO anon;
GRANT ALL ON SEQUENCE public."deviceToken_id_seq" TO authenticated;
GRANT ALL ON SEQUENCE public."deviceToken_id_seq" TO service_role;
          public          postgres    false    297                       1259    29224    eventCategories    TABLE     �   CREATE TABLE public."eventCategories" (
    id integer NOT NULL,
    "eventId" integer,
    "categoryId" integer,
    "createdAt" timestamp without time zone DEFAULT now(),
    "updatedAt" timestamp without time zone
);
 %   DROP TABLE public."eventCategories";
       public         heap    postgres    false    17                       0    0    TABLE "eventCategories"    ACL     �   GRANT ALL ON TABLE public."eventCategories" TO anon;
GRANT ALL ON TABLE public."eventCategories" TO authenticated;
GRANT ALL ON TABLE public."eventCategories" TO service_role;
          public          postgres    false    268                       1259    29234    eventCategories_id_seq    SEQUENCE     �   ALTER TABLE public."eventCategories" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."eventCategories_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    17    268                       0    0 !   SEQUENCE "eventCategories_id_seq"    ACL     �   GRANT ALL ON SEQUENCE public."eventCategories_id_seq" TO anon;
GRANT ALL ON SEQUENCE public."eventCategories_id_seq" TO authenticated;
GRANT ALL ON SEQUENCE public."eventCategories_id_seq" TO service_role;
          public          postgres    false    269                       1259    29241    events    TABLE     ;  CREATE TABLE public.events (
    id integer NOT NULL,
    picture character varying(255),
    title character varying(255),
    date date,
    "cityId" integer,
    descriptions text,
    "createdAt" timestamp without time zone DEFAULT now(),
    "updatedAt" timestamp without time zone,
    "createdBy" integer
);
    DROP TABLE public.events;
       public         heap    postgres    false    17                       0    0    TABLE events    ACL     �   GRANT ALL ON TABLE public.events TO anon;
GRANT ALL ON TABLE public.events TO authenticated;
GRANT ALL ON TABLE public.events TO service_role;
          public          postgres    false    270                       1259    29253    events_id_seq    SEQUENCE     �   ALTER TABLE public.events ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.events_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    17    270                       0    0    SEQUENCE events_id_seq    ACL     �   GRANT ALL ON SEQUENCE public.events_id_seq TO anon;
GRANT ALL ON SEQUENCE public.events_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.events_id_seq TO service_role;
          public          postgres    false    271                       1259    29260    forgotRequest    TABLE     �   CREATE TABLE public."forgotRequest" (
    id integer NOT NULL,
    email character varying(255),
    code character varying(225),
    "createdAt" timestamp without time zone DEFAULT now(),
    "updatedAt" timestamp without time zone
);
 #   DROP TABLE public."forgotRequest";
       public         heap    postgres    false    17                       0    0    TABLE "forgotRequest"    ACL     �   GRANT ALL ON TABLE public."forgotRequest" TO anon;
GRANT ALL ON TABLE public."forgotRequest" TO authenticated;
GRANT ALL ON TABLE public."forgotRequest" TO service_role;
          public          postgres    false    272                       1259    29270    forgotRequest_id_seq    SEQUENCE     �   ALTER TABLE public."forgotRequest" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."forgotRequest_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    272    17                       0    0    SEQUENCE "forgotRequest_id_seq"    ACL     �   GRANT ALL ON SEQUENCE public."forgotRequest_id_seq" TO anon;
GRANT ALL ON SEQUENCE public."forgotRequest_id_seq" TO authenticated;
GRANT ALL ON SEQUENCE public."forgotRequest_id_seq" TO service_role;
          public          postgres    false    273                       1259    29277    partners    TABLE     �   CREATE TABLE public.partners (
    id integer NOT NULL,
    picture character varying(255),
    name character varying(255),
    "createdAt" timestamp without time zone DEFAULT now(),
    "updatedAt" timestamp without time zone
);
    DROP TABLE public.partners;
       public         heap    postgres    false    17                       0    0    TABLE partners    ACL     �   GRANT ALL ON TABLE public.partners TO anon;
GRANT ALL ON TABLE public.partners TO authenticated;
GRANT ALL ON TABLE public.partners TO service_role;
          public          postgres    false    274                       1259    29289    partners_id_seq    SEQUENCE     �   ALTER TABLE public.partners ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.partners_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    17    274                       0    0    SEQUENCE partners_id_seq    ACL     �   GRANT ALL ON SEQUENCE public.partners_id_seq TO anon;
GRANT ALL ON SEQUENCE public.partners_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.partners_id_seq TO service_role;
          public          postgres    false    275                       1259    29296    paymentMethods    TABLE     �   CREATE TABLE public."paymentMethods" (
    id integer NOT NULL,
    name character varying(255),
    "createdAt" timestamp without time zone DEFAULT now(),
    "updatedAt" timestamp without time zone
);
 $   DROP TABLE public."paymentMethods";
       public         heap    postgres    false    17                       0    0    TABLE "paymentMethods"    ACL     �   GRANT ALL ON TABLE public."paymentMethods" TO anon;
GRANT ALL ON TABLE public."paymentMethods" TO authenticated;
GRANT ALL ON TABLE public."paymentMethods" TO service_role;
          public          postgres    false    276                       1259    29306    paymentMethods_id_seq    SEQUENCE     �   ALTER TABLE public."paymentMethods" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."paymentMethods_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    17    276                       0    0     SEQUENCE "paymentMethods_id_seq"    ACL     �   GRANT ALL ON SEQUENCE public."paymentMethods_id_seq" TO anon;
GRANT ALL ON SEQUENCE public."paymentMethods_id_seq" TO authenticated;
GRANT ALL ON SEQUENCE public."paymentMethods_id_seq" TO service_role;
          public          postgres    false    277                       1259    29313    profiles    TABLE     �  CREATE TABLE public.profiles (
    id integer NOT NULL,
    "userId" integer,
    picture character varying(255),
    "fullName" character varying(255),
    "phoneNumber" character varying(255),
    gender integer,
    profession character varying(255),
    nationality character varying(255),
    "birthDate" date,
    "createdAt" timestamp without time zone DEFAULT now(),
    "updatedAt" timestamp without time zone
);
    DROP TABLE public.profiles;
       public         heap    postgres    false    17                       0    0    TABLE profiles    ACL     �   GRANT ALL ON TABLE public.profiles TO anon;
GRANT ALL ON TABLE public.profiles TO authenticated;
GRANT ALL ON TABLE public.profiles TO service_role;
          public          postgres    false    278                       1259    29325    profiles_id_seq    SEQUENCE     �   ALTER TABLE public.profiles ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.profiles_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    278    17                       0    0    SEQUENCE profiles_id_seq    ACL     �   GRANT ALL ON SEQUENCE public.profiles_id_seq TO anon;
GRANT ALL ON SEQUENCE public.profiles_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.profiles_id_seq TO service_role;
          public          postgres    false    279                       1259    29332    reservationSections    TABLE     �   CREATE TABLE public."reservationSections" (
    id integer NOT NULL,
    name character varying(255),
    price character varying(255),
    "createdAt" timestamp without time zone DEFAULT now(),
    "updatedAt" timestamp without time zone
);
 )   DROP TABLE public."reservationSections";
       public         heap    postgres    false    17                       0    0    TABLE "reservationSections"    ACL     �   GRANT ALL ON TABLE public."reservationSections" TO anon;
GRANT ALL ON TABLE public."reservationSections" TO authenticated;
GRANT ALL ON TABLE public."reservationSections" TO service_role;
          public          postgres    false    280                       1259    29344    reservationSections_id_seq    SEQUENCE     �   ALTER TABLE public."reservationSections" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."reservationSections_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    280    17                       0    0 %   SEQUENCE "reservationSections_id_seq"    ACL     �   GRANT ALL ON SEQUENCE public."reservationSections_id_seq" TO anon;
GRANT ALL ON SEQUENCE public."reservationSections_id_seq" TO authenticated;
GRANT ALL ON SEQUENCE public."reservationSections_id_seq" TO service_role;
          public          postgres    false    281                       1259    29351    reservationStatus    TABLE     �   CREATE TABLE public."reservationStatus" (
    id integer NOT NULL,
    name character varying(255),
    "createdAt" timestamp without time zone DEFAULT now(),
    "updatedAt" timestamp without time zone
);
 '   DROP TABLE public."reservationStatus";
       public         heap    postgres    false    17                       0    0    TABLE "reservationStatus"    ACL     �   GRANT ALL ON TABLE public."reservationStatus" TO anon;
GRANT ALL ON TABLE public."reservationStatus" TO authenticated;
GRANT ALL ON TABLE public."reservationStatus" TO service_role;
          public          postgres    false    282                       1259    29361    reservationStatus_id_seq    SEQUENCE     �   ALTER TABLE public."reservationStatus" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."reservationStatus_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    282    17                       0    0 #   SEQUENCE "reservationStatus_id_seq"    ACL     �   GRANT ALL ON SEQUENCE public."reservationStatus_id_seq" TO anon;
GRANT ALL ON SEQUENCE public."reservationStatus_id_seq" TO authenticated;
GRANT ALL ON SEQUENCE public."reservationStatus_id_seq" TO service_role;
          public          postgres    false    283                       1259    29368    reservationTickets    TABLE     �   CREATE TABLE public."reservationTickets" (
    id integer NOT NULL,
    "reservationId" integer,
    "sectionId" integer,
    quantity integer,
    "createdAt" timestamp without time zone DEFAULT now(),
    "updatedAt" timestamp without time zone
);
 (   DROP TABLE public."reservationTickets";
       public         heap    postgres    false    17                       0    0    TABLE "reservationTickets"    ACL     �   GRANT ALL ON TABLE public."reservationTickets" TO anon;
GRANT ALL ON TABLE public."reservationTickets" TO authenticated;
GRANT ALL ON TABLE public."reservationTickets" TO service_role;
          public          postgres    false    284                       1259    29378    reservationTickets_id_seq    SEQUENCE     �   ALTER TABLE public."reservationTickets" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."reservationTickets_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    17    284                       0    0 $   SEQUENCE "reservationTickets_id_seq"    ACL     �   GRANT ALL ON SEQUENCE public."reservationTickets_id_seq" TO anon;
GRANT ALL ON SEQUENCE public."reservationTickets_id_seq" TO authenticated;
GRANT ALL ON SEQUENCE public."reservationTickets_id_seq" TO service_role;
          public          postgres    false    285                       1259    29385    reservations    TABLE     
  CREATE TABLE public.reservations (
    id integer NOT NULL,
    "eventId" integer,
    "userId" integer,
    "statusId" integer,
    "paymentMethodId" integer,
    "createdAt" timestamp without time zone DEFAULT now(),
    "updatedAt" timestamp without time zone
);
     DROP TABLE public.reservations;
       public         heap    postgres    false    17                       0    0    TABLE reservations    ACL     �   GRANT ALL ON TABLE public.reservations TO anon;
GRANT ALL ON TABLE public.reservations TO authenticated;
GRANT ALL ON TABLE public.reservations TO service_role;
          public          postgres    false    286                       1259    29395    reservations_id_seq    SEQUENCE     �   ALTER TABLE public.reservations ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.reservations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    17    286                       0    0    SEQUENCE reservations_id_seq    ACL     �   GRANT ALL ON SEQUENCE public.reservations_id_seq TO anon;
GRANT ALL ON SEQUENCE public.reservations_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.reservations_id_seq TO service_role;
          public          postgres    false    287                        1259    29402    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255),
    password character varying(255),
    "createdAt" timestamp without time zone DEFAULT now(),
    "updatedAt" timestamp without time zone
);
    DROP TABLE public.users;
       public         heap    postgres    false    17                        0    0    TABLE users    ACL     �   GRANT ALL ON TABLE public.users TO anon;
GRANT ALL ON TABLE public.users TO authenticated;
GRANT ALL ON TABLE public.users TO service_role;
          public          postgres    false    288            !           1259    29414    users_id_seq    SEQUENCE     �   ALTER TABLE public.users ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    288    17            !           0    0    SEQUENCE users_id_seq    ACL     �   GRANT ALL ON SEQUENCE public.users_id_seq TO anon;
GRANT ALL ON SEQUENCE public.users_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.users_id_seq TO service_role;
          public          postgres    false    289            "           1259    29421 	   wishlists    TABLE     �   CREATE TABLE public.wishlists (
    id integer NOT NULL,
    "eventId" integer,
    "userId" integer,
    "createdAt" timestamp without time zone DEFAULT now(),
    "updatedAt" timestamp without time zone
);
    DROP TABLE public.wishlists;
       public         heap    postgres    false    17            "           0    0    TABLE wishlists    ACL     �   GRANT ALL ON TABLE public.wishlists TO anon;
GRANT ALL ON TABLE public.wishlists TO authenticated;
GRANT ALL ON TABLE public.wishlists TO service_role;
          public          postgres    false    290            #           1259    29431    wishlists_id_seq    SEQUENCE     �   ALTER TABLE public.wishlists ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.wishlists_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    17    290            #           0    0    SEQUENCE wishlists_id_seq    ACL     �   GRANT ALL ON SEQUENCE public.wishlists_id_seq TO anon;
GRANT ALL ON SEQUENCE public.wishlists_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.wishlists_id_seq TO service_role;
          public          postgres    false    291            �          0    29188 
   categories 
   TABLE DATA           H   COPY public.categories (id, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    264   ��       �          0    29205    cities 
   TABLE DATA           M   COPY public.cities (id, picture, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    266   c�       �          0    30112    deviceToken 
   TABLE DATA           l   COPY public."deviceToken" (id, "userId", token, "eventCreationNotif", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    298   �       �          0    29224    eventCategories 
   TABLE DATA           b   COPY public."eventCategories" (id, "eventId", "categoryId", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    268   ��       �          0    29241    events 
   TABLE DATA           y   COPY public.events (id, picture, title, date, "cityId", descriptions, "createdAt", "updatedAt", "createdBy") FROM stdin;
    public          postgres    false    270   ~�       �          0    29260    forgotRequest 
   TABLE DATA           T   COPY public."forgotRequest" (id, email, code, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    272   ��       �          0    29277    partners 
   TABLE DATA           O   COPY public.partners (id, picture, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    274   �       �          0    29296    paymentMethods 
   TABLE DATA           N   COPY public."paymentMethods" (id, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    276   �       �          0    29313    profiles 
   TABLE DATA           �   COPY public.profiles (id, "userId", picture, "fullName", "phoneNumber", gender, profession, nationality, "birthDate", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    278   c�       �          0    29332    reservationSections 
   TABLE DATA           Z   COPY public."reservationSections" (id, name, price, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    280   5�       �          0    29351    reservationStatus 
   TABLE DATA           Q   COPY public."reservationStatus" (id, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    282   ��       �          0    29368    reservationTickets 
   TABLE DATA           t   COPY public."reservationTickets" (id, "reservationId", "sectionId", quantity, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    284   '�       �          0    29385    reservations 
   TABLE DATA           x   COPY public.reservations (id, "eventId", "userId", "statusId", "paymentMethodId", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    286   Ȩ       �          0    29402    users 
   TABLE DATA           N   COPY public.users (id, email, password, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    288   v�       �          0    29421 	   wishlists 
   TABLE DATA           V   COPY public.wishlists (id, "eventId", "userId", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    290   ]�       $           0    0    categories_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.categories_id_seq', 7, true);
          public          postgres    false    265            %           0    0    cities_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.cities_id_seq', 7, true);
          public          postgres    false    267            &           0    0    deviceToken_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."deviceToken_id_seq"', 8, true);
          public          postgres    false    297            '           0    0    eventCategories_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."eventCategories_id_seq"', 23, true);
          public          postgres    false    269            (           0    0    events_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.events_id_seq', 35, true);
          public          postgres    false    271            )           0    0    forgotRequest_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."forgotRequest_id_seq"', 24, true);
          public          postgres    false    273            *           0    0    partners_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.partners_id_seq', 6, true);
          public          postgres    false    275            +           0    0    paymentMethods_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."paymentMethods_id_seq"', 4, true);
          public          postgres    false    277            ,           0    0    profiles_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.profiles_id_seq', 12, true);
          public          postgres    false    279            -           0    0    reservationSections_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."reservationSections_id_seq"', 4, true);
          public          postgres    false    281            .           0    0    reservationStatus_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."reservationStatus_id_seq"', 3, true);
          public          postgres    false    283            /           0    0    reservationTickets_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."reservationTickets_id_seq"', 9, true);
          public          postgres    false    285            0           0    0    reservations_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.reservations_id_seq', 11, true);
          public          postgres    false    287            1           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 16, true);
          public          postgres    false    289            2           0    0    wishlists_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.wishlists_id_seq', 16, true);
          public          postgres    false    291            )           2606    29645    categories categories_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_pkey;
       public            postgres    false    264            +           2606    29653    cities cities_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.cities
    ADD CONSTRAINT cities_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.cities DROP CONSTRAINT cities_pkey;
       public            postgres    false    266            G           2606    30118    deviceToken deviceToken_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."deviceToken"
    ADD CONSTRAINT "deviceToken_pkey" PRIMARY KEY (id);
 J   ALTER TABLE ONLY public."deviceToken" DROP CONSTRAINT "deviceToken_pkey";
       public            postgres    false    298            -           2606    29661 $   eventCategories eventCategories_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public."eventCategories"
    ADD CONSTRAINT "eventCategories_pkey" PRIMARY KEY (id);
 R   ALTER TABLE ONLY public."eventCategories" DROP CONSTRAINT "eventCategories_pkey";
       public            postgres    false    268            /           2606    29669    events events_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.events
    ADD CONSTRAINT events_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.events DROP CONSTRAINT events_pkey;
       public            postgres    false    270            1           2606    29677     forgotRequest forgotRequest_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public."forgotRequest"
    ADD CONSTRAINT "forgotRequest_pkey" PRIMARY KEY (id);
 N   ALTER TABLE ONLY public."forgotRequest" DROP CONSTRAINT "forgotRequest_pkey";
       public            postgres    false    272            3           2606    29685    partners partners_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.partners
    ADD CONSTRAINT partners_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.partners DROP CONSTRAINT partners_pkey;
       public            postgres    false    274            5           2606    29693 "   paymentMethods paymentMethods_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."paymentMethods"
    ADD CONSTRAINT "paymentMethods_pkey" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public."paymentMethods" DROP CONSTRAINT "paymentMethods_pkey";
       public            postgres    false    276            7           2606    29701    profiles profiles_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.profiles DROP CONSTRAINT profiles_pkey;
       public            postgres    false    278            9           2606    29709 ,   reservationSections reservationSections_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public."reservationSections"
    ADD CONSTRAINT "reservationSections_pkey" PRIMARY KEY (id);
 Z   ALTER TABLE ONLY public."reservationSections" DROP CONSTRAINT "reservationSections_pkey";
       public            postgres    false    280            ;           2606    29717 (   reservationStatus reservationStatus_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public."reservationStatus"
    ADD CONSTRAINT "reservationStatus_pkey" PRIMARY KEY (id);
 V   ALTER TABLE ONLY public."reservationStatus" DROP CONSTRAINT "reservationStatus_pkey";
       public            postgres    false    282            =           2606    29725 *   reservationTickets reservationTickets_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public."reservationTickets"
    ADD CONSTRAINT "reservationTickets_pkey" PRIMARY KEY (id);
 X   ALTER TABLE ONLY public."reservationTickets" DROP CONSTRAINT "reservationTickets_pkey";
       public            postgres    false    284            ?           2606    29733    reservations reservations_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.reservations
    ADD CONSTRAINT reservations_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.reservations DROP CONSTRAINT reservations_pkey;
       public            postgres    false    286            A           2606    29741    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    288            C           2606    29749    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    288            E           2606    29757    wishlists wishlists_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.wishlists
    ADD CONSTRAINT wishlists_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.wishlists DROP CONSTRAINT wishlists_pkey;
       public            postgres    false    290            �	           826    29995     DEFAULT PRIVILEGES FOR SEQUENCES    DEFAULT ACL     �  ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON SEQUENCES  TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON SEQUENCES  TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON SEQUENCES  TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON SEQUENCES  TO service_role;
          public          postgres    false    17            �	           826    29996     DEFAULT PRIVILEGES FOR SEQUENCES    DEFAULT ACL     �  ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON SEQUENCES  TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON SEQUENCES  TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON SEQUENCES  TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON SEQUENCES  TO service_role;
          public          supabase_admin    false    17            �	           826    29997     DEFAULT PRIVILEGES FOR FUNCTIONS    DEFAULT ACL     �  ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON FUNCTIONS  TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON FUNCTIONS  TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON FUNCTIONS  TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON FUNCTIONS  TO service_role;
          public          postgres    false    17            �	           826    29998     DEFAULT PRIVILEGES FOR FUNCTIONS    DEFAULT ACL     �  ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON FUNCTIONS  TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON FUNCTIONS  TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON FUNCTIONS  TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON FUNCTIONS  TO service_role;
          public          supabase_admin    false    17            �	           826    29999    DEFAULT PRIVILEGES FOR TABLES    DEFAULT ACL     }  ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON TABLES  TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON TABLES  TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON TABLES  TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON TABLES  TO service_role;
          public          postgres    false    17            �	           826    30000    DEFAULT PRIVILEGES FOR TABLES    DEFAULT ACL     �  ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON TABLES  TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON TABLES  TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON TABLES  TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON TABLES  TO service_role;
          public          supabase_admin    false    17            �   s   x�3��--�L�4202�50�5�P04�25�20�361�07���2�t,*)&�Șӿ�$%?���B�������
M9��J�2�tK-.�,K�!�М�-�8#3?���=... �==�      �   �   x�3��J�N,*I�+�K��9���uLt�,ͬL��L�,,-��-9c���8��RJ���z� lz��zr2�r2	�6�LLN� �v2�6�,����2�6��O�D�t$�K@�9gqjnbQ"���P]1z\\\ ��Y�      �   }  x�e�ْ�H ��몧�� !Y�;Hٗ�
�QYD��Ǌꋙ~�/�s��~��Q�v Zws�u�Y�[mw������+�sX�|����X��I�!Kfb��֞ZkO��&�Vs�<�A���G��ʏˌ2r��:i���.������T����R�v�z]8E~k\۝��XbgA�c��H�&H� �?$������D4�>~��)��X�Ve���ȏSp��l��wOS�}��,��۽z^�ĝN:�����LAp~i���sQi�p\+w����b̲���84�9T`�W����-}�tbt���1l�)ьmi�>
�������?�%�-�6��!ɾ!�����(
�e�A�s����;�غ����J(#�{X�>��%ΎU,��U���5l�)�N*��],�Z�bJ� :���g��Z�5bJ��Q\�I�p+�xx	C��<f$��G�)�λ6����|^������I�7�����?�w���l���a�;?����z`�mѝfd��V�@:j~i��P��BW4H�>{�7��C{�.e�
��X���`Q��#����4���e�\��0f)�'Ke��j�0'խ�/�7
��8�D��⾋B!�t��ti�@���)"��KvS�W�R}��Y�"��z`7��ح�XY��G!���N��.6t�]�7@�����,q�0{��
/-�X���_���n����/�s4}p���Kfr�� �̖f6������ə/aQ��j
�>�0%�C?�Ðय़� .N|�=y	�u���.�u�^�����qo��!�V��&�ɏ0�<u/�<�!��q���%!��:�IM��sIf�c�h�Y5�(��1Z*�����/�����A��#�6����'�r      �   �   x����m1�3��m`�XD*p�u�^#q�x�`4���E/�K։H��9bj@��uIk��5F�'oMP�f�l�"����rBS$m��m��C�i2�4`����,�s��i��"��D@r�X��wF	Q���)���s�/�v+#�^9��VU��S�d���p���z�HP�}*��2���A7����D{U���[��\!Y����+N�WJ�z��8���I      �     x�ՖKs�6����`q�"������G:;��3��B��@����E)N�fz�)�b�}��|���֎�O��\�e�Lk���zƔ�S.T-hJb�h��N�vjтs�4�*c<T�'"%_� q����ޥ.u�5Zܳ%��溙�w���'>���ీ��'�Ǯ���p�����=z�&,!L%�2��T�j �k_{����+UD�;��N7�E�F�Pj�RX&�L&a�
�� �L���e���2�˼�!�uc�`7m��e]��փ^9�����������`*�C�졭����wK�N�,�f	޺�.;�ak��i�	��8�V�Xi�DFej\�#���V�A7y����z�fm��2L�9�D��8sʢ!Z>F{��;�� Z6D�b��ѦW���F�`Yw��7C�\��8�t^�Xw0�����Bx��j	�ꮙ��2)CF�%;N<r��!�������1��|�Z?DLF��<뱔;���Kg���8��i��ou����A��lW�f�v��y."L�Ƹ���Vx�mN���^_�
�XR�z�i��N����a�4���$�ܘJ{�3�}��He
��M!"�t��ǈ����� �*��i\�u��Dھ7G���\_��;��7�}���������	ys�1d���4!a��� <֏t&�Pq\�3ld�ﳟ�7��Eשּ�>�y<Ĉ��g����Y�79�p��'�3�yg�+����j����\�\o�W�s���^�R?i��ךS��$�X��<�y2@���Ǽk���-7�b�o�}���W�Ch��o+�7�Q�Ş,��օ��	QǢ�o�W�����h���9/X?��x���q8.��ՁP�_������M~��(΢(TJ$JM���¹�M��Ə���C-�m.h�3���m[8[a�\Q�o��_h��������S�-��Ά>��X�С���#�bb��b�.C����&'���"S6��Ŋ2�ÔRE�N�XrxG�X�\N��Xq�e�b��S���A��Om�      �   �  x�m�Kn1�����>EQ�� '��H]�i� �s�R��9����(�r��}9^ߏ.�_�������,����2V�d�dy}�Ѷuc�wK��\��Zb�T���t9��#f!�Az �#W�@M��`�r9޾�Ȩ�H����@����u=�QV/���#�-��1����`Bі'Ƣـ��J�%@��1�3�"�H�b�(*�<��&���冢�g��0�\�����Z6���`U4f��YyEN"���7&�$���T#�e���٠�Z_Dl�0Ƶ04�	Ie����B�L*�erD��ո
2?Y����b�ոTr���܂�j\�B�>��\E����`��G�_s�(�{_4��F_L�%�"e]-������)�ۭiYl��'O���>����<�8R�$���/��U{�!�m�W����=�5�v���2      �   W   x��ʹ�  �O�@~ ���� ����q�����k��R��	��,K$��;j����j��>���������������#�\?F      �   m   x�e�1�  �ټ"�ej���C�,�������X�����O뿥����ĕl%]��zᄉ5{���^,��x�y"��o�_�QaA�n<�¶��E	-���<���*!      �   �  x����n�0���S�,��o��a��b�^⬱��=�$e薡-�:Q��ɏ�D���,����4�KW=tߖQ=|�yd�C"����%�VFٜ�?Hj�H6��,da���a��ۼ���� �HQ\D��C �rQ>�c <Y!��R��5߫f"Pd����!W�*�����ض˰�ǧ�܏S�\��|l��.��ei�c����i���G`�<�o����g�"�O�N-�v��q�w
=�aI�A�o0^���?���X�*�>
�H�����p���y��ǣ�6i�C���^�j0}��e)i%�aDN��[�bW�/�:$:Jt��Mg�ˀn�82E�clYrPh���{}����E�������5M9��w�>D���[+RT�Fmú�)5u����z[6��,^����J�&��Y3 ^��AWU��S�      �   v   x�mͫ�@�a=�}�N�>tmUAU� �")�`�{���(����7�G���zT���"�k1X�=i�*�q0y����?^�s
�ī�Ir�D���)�RN��lXJ�U&(w      �   \   x�e�;�  й=���P���� ,D�!1�4����P��`�XEN�lDمl��b8A=����9�����'r�m�X}���b&�Il
�����U      �   �   x�u���0E�u\E��16E���_Ǆh4�Q,yǑ��u֓MX�`?�vF��a��{�d�z�$��(�_�f�����w&�0�`��ߙrz'��h}�,YitT}�%#���X�Hv�1�s�ҟ�c�/ɠ;L�)����;VA�      �   �   x�uл�0�X���Ŀ�����q�/����˃F�����F�Q.�"�`�l>��\��"��$��sV� ��t�v.�P<�0k��P��qKHU�a�1)\���ޱ����q��B�l��w��Fv~k������i9
	,���|`����M�      �   �  x���I��H�3�+���n��%�"YpC)�/(�����G�{z��dF��/��CTuL��~�ř��2.r���
����,&���������1N(����P[0�m�4qN�n$��n��KZ��W�����h�o8�%ٚ��W�wȿ bFDx G�X�a�^4y�2�L�A[g?��ϨA������v�&Z��d�ǔl�q^��W��J�3�n�}>������� �J������ˬR��;'\��}��1a�v����\���]/�υ����ޛ��6�tWՁ������/KxP�@�pȰ��"?Y/�b��+aje��Gec�K�J4YIu=���&7v��:p�=�;8�v��i/��7������c�>A<�I���P��u��M����mLk���'����4��\�p7m4��g)9e�\ؿ<�w��!~(�׿	T����.������`�+�2���E���V��b�T�s�^w�j������J�G��$�t~��ˈ ?< B�遀J���OJn�Œ�y��f���VZt6�FJɘ4ª��3��+��8M��/�ikw�3�oB� ��Y<�H�� AH�E�z�g+p����ˮu��+΢�����zޜJ�qJx;������t�e�O�T��Ο��È!; ��O�NIU/�
��y/��g�~ƛ��J4ȓ(TNU;���┮�8�˽���wª�B��Ũ��/��c���}$�x�%b�
_��ձg�r���`ǌ���>J�ܺ*\?8Dvb�6��8v�˵����_og� ^D�U������갪_mA��$57cÛq;��93����l��(�vjj
��M3�Jy>P� >7������gB��Y0,"8�E�c�P�0}+&[�'��l~�k�B8�h��p�,�rY8�ɽ�M�FB$-�E(!�Z���ȶ��z���{f�9!�������S��      �   �   x�����0г<E���#�	�����H��I^A���7��H���jǧ	�<}5+���_ͬ%��Hb���1M��2�zs73��+�=Q��4���2�0��xZ����,�:�"�j�<��l"ۉ�,���0�}�p-u����<IO     