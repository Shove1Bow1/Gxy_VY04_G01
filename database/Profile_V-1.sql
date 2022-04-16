/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     4/15/2022 4:24:37 PM                         */
/*==============================================================*/
drop database cnpmnc;
use sys;
SELECT user,authentication_string,plugin,host FROM mysql.user;
SET PASSWORD FOR 'root'@'localhost' = PASSWORD('debian');
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'debian';
FLUSH PRIVILEGES;
drop table if exists ADMIN;

drop table if exists CUSTOMER_HISTORY_TRANSICATION;

drop table if exists CUSTOMER_INFO;

drop table if exists CUSTOMER_SECURITY;

drop table if exists HISTORY_POINT;

drop table if exists PARTNER_HISTORY_TRANSICATION;

drop table if exists PARTNER_INFO;

drop table if exists PARTNER_SECURITY;

drop table if exists PAYMENTCARD;

drop table if exists PROVIDER__USER_INFO;

drop table if exists SERVICE_PROVIDER;

drop table if exists TYPE_TRANSICATION;

create database CNPMNC;
use CNPMNC;
/*==============================================================*/
/* Table: ADMIN                                                 */
/*==============================================================*/
create table ADMIN
(
   ADMIN_ID             char(12) not null,
   ADMIN_NAME           varchar(30),
   ADMIN_PASSWORD       char(15),
   primary key (ADMIN_ID)
);

/*==============================================================*/
/* Table: CUSTOMER_HISTORY_TRANSICATION                         */
/*==============================================================*/
create table CUSTOMER_HISTORY_TRANSICATION
(
   TYPE_ID              char(12),
   CUSTOMER_ID          char(12) not null,
   DATE_PAID            date,
   APP_ID               char(12),
   TRANSACTION_VALUE_   int,
   primary key (CUSTOMER_ID)
);

/*==============================================================*/
/* Table: CUSTOMER_INFO                                         */
/*==============================================================*/
create table CUSTOMER_INFO
(
   CUSTOMER_ID          char(12) not null,
   PAYMENT_CARD_ID      char(12),
   FULL_NAME            nvarchar(100),
   GENDER               bool,
   DATE_OF_BIRTH        date,
   POINT                int,
   ADRESS               nvarchar(200),
   primary key (CUSTOMER_ID)
);

/*==============================================================*/
/* Table: CUSTOMER_SECURITY                                     */
/*==============================================================*/
create table CUSTOMER_SECURITY
(
   CUSTOMER_ID          char(12) not null,
   USER_EMAIL           varchar(70),
   PASSWORD             char(15),
   primary key (CUSTOMER_ID)
);

/*==============================================================*/
/* Table: HISTORY_POINT                                         */
/*==============================================================*/
create table HISTORY_POINT
(
   CUSTOMER_ID          char(12) not null,
   VOUCHER_ID           char(12),
   VOUCHER_NAME         nvarchar(100),
   GET_                  bool,
   USED                 bool,
   POINT                int,
   DATE                 date,
   primary key (CUSTOMER_ID)
);

/*==============================================================*/
/* Table: PARTNER_HISTORY_TRANSICATION                          */
/*==============================================================*/
create table PARTNER_HISTORY_TRANSICATION
(
   PARTNER_ID           char(12) not null,
   TYPE_ID              char(12),
   CUSTOMER_ID          char(12),
   DATE                 date,
   TRANSACTION_VALUE_   int,
   REVENUE              int,
   COMMISION            int,
   primary key (PARTNER_ID)
);

/*==============================================================*/
/* Table: PARTNER_INFO                                          */
/*==============================================================*/
create table PARTNER_INFO
(
   PARTNER_ID           char(12) not null,
   APP_ID               char(12),
   PAYMENT_CARD_ID      char(12),
   PARTNER_NAME         nvarchar(200),
   primary key (PARTNER_ID)
);

/*==============================================================*/
/* Table: PARTNER_SECURITY                                      */
/*==============================================================*/
create table PARTNER_SECURITY
(
   PARTNER_ID           char(12) not null,
   PARTNER_USERNAME     char(50),
   PARTNER_PASSWORD     char(16),
   primary key (PARTNER_ID)
);

/*==============================================================*/
/* Table: PAYMENTCARD                                           */
/*==============================================================*/
create table PAYMENTCARD
(
   PAYMENT_CARD_ID      char(12) not null,
   OWNER_CARD           varchar(100),
   CARD_TOKEN           varchar(300),
   LAST_FDIGIT          char(4),
   END_DATE             date,
   BALLANCE             int,
   primary key (PAYMENT_CARD_ID)
);

/*==============================================================*/
/* Table: PROVIDER__USER_INFO                                   */
/*==============================================================*/
create table PROVIDER__USER_INFO
(
   CUSTOMER_ID          char(12) not null,
   PHONE_NUM            char(9),
   PHONE_PROVIDER       varchar(8),
   PHONE_PROVIDER_NAME  nvarchar(100),
   primary key (CUSTOMER_ID)
);

/*==============================================================*/
/* Table: SERVICE_PROVIDER                                      */
/*==============================================================*/
create table SERVICE_PROVIDER
(
   APP_ID               char(12) not null,
   ADMIN_ID             char(12),
   SERVICE_NAME         nvarchar(100),
   MIN_PRICE            int,
   MAX_PRICE            int,
   POINT_EXCHANGE_RANGE int,
   primary key (APP_ID)
);

/*==============================================================*/
/* Table: TYPE_TRANSICATION                                     */
/*==============================================================*/
create table TYPE_TRANSICATION
(
   TYPE_ID              char(12) not null,
   NAME_TRANSICATION    nvarchar(12),
   primary key (TYPE_ID)
);

alter table CUSTOMER_HISTORY_TRANSICATION add constraint FK_RELATIONSHIP_18 foreign key (CUSTOMER_ID)
      references CUSTOMER_INFO (CUSTOMER_ID) on delete restrict on update restrict;

alter table CUSTOMER_HISTORY_TRANSICATION add constraint FK_RELATIONSHIP_23 foreign key (TYPE_ID)
      references TYPE_TRANSICATION (TYPE_ID) on delete restrict on update restrict;

alter table CUSTOMER_INFO add constraint FK_RELATIONSHIP_17 foreign key (PAYMENT_CARD_ID)
      references PAYMENTCARD (PAYMENT_CARD_ID) on delete restrict on update restrict;

alter table CUSTOMER_SECURITY add constraint FK_RELATIONSHIP_3 foreign key (CUSTOMER_ID)
      references CUSTOMER_INFO (CUSTOMER_ID) on delete restrict on update restrict;

alter table HISTORY_POINT add constraint FK_RELATIONSHIP_11 foreign key (CUSTOMER_ID)
      references CUSTOMER_INFO (CUSTOMER_ID) on delete restrict on update restrict;

alter table PARTNER_HISTORY_TRANSICATION add constraint FK_RELATIONSHIP_12 foreign key (TYPE_ID)
      references TYPE_TRANSICATION (TYPE_ID) on delete restrict on update restrict;

alter table PARTNER_HISTORY_TRANSICATION add constraint FK_RELATIONSHIP_13 foreign key (CUSTOMER_ID)
      references CUSTOMER_INFO (CUSTOMER_ID) on delete restrict on update restrict;

alter table PARTNER_HISTORY_TRANSICATION add constraint FK_RELATIONSHIP_15 foreign key (PARTNER_ID)
      references PARTNER_INFO (PARTNER_ID) on delete restrict on update restrict;

alter table PARTNER_INFO add constraint FK_RELATIONSHIP_14 foreign key (APP_ID)
      references SERVICE_PROVIDER (APP_ID) on delete restrict on update restrict;

alter table PARTNER_INFO add constraint FK_RELATIONSHIP_16 foreign key (PAYMENT_CARD_ID)
      references PAYMENTCARD (PAYMENT_CARD_ID) on delete restrict on update restrict;

alter table PARTNER_SECURITY add constraint FK_RELATIONSHIP_9 foreign key (PARTNER_ID)
      references PARTNER_INFO (PARTNER_ID) on delete restrict on update restrict;

alter table PROVIDER__USER_INFO add constraint FK_RELATIONSHIP_20 foreign key (CUSTOMER_ID)
      references CUSTOMER_INFO (CUSTOMER_ID) on delete restrict on update restrict;

alter table SERVICE_PROVIDER add constraint FK_RELATIONSHIP_25 foreign key (ADMIN_ID)
      references ADMIN (ADMIN_ID) on delete restrict on update restrict;

insert into ADMIN(ADMIN_ID,ADMIN_NAME,ADMIN_PASSWORD) values('AD01','CoTu','CoTuXinhDep');
select * from ADMIN;
insert into SERVICE_PROVIDER(APP_ID,ADMIN_ID,SERVICE_NAME,MIN_PRICE,MAX_PRICE,POINT_EXCHANGE_RANGE) values
('VY04MB','AD01','Chuyến bay',300000,30000000,100000),
('VY04KS','AD01','Khách sạn',300000,30000000,100000),
('VY04DDSB','AD01','Đưa đón sân bay',300000,3000000,100000),
('VY04BTCH','AD01','Biệt thự và căn hộ',500000,20000000,100000),
('VY04TDL','AD01','Tour du lịch( trải nghiệm)',12000000,30000000,100000),
('VY04TX','AD01','Thuê xe',100000,15000000,100000),
('VY04NH','AD01','Nhà hàng',300000,30000000,100000),
('VY04V','AD01','Voucher',300000,30000000,100000),
('VY04CTK','AD01','Combo tiết kiệm',2000000,30000000,100000);
select * from SERVICE_PROVIDER;

