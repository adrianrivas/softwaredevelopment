/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     18/12/2021 7:19:56 p. m.                     */
/*==============================================================*/


drop table if exists CATEGORIES;

drop table if exists POSTS;

drop table if exists USERS;

/*==============================================================*/
/* Table: CATEGORIES                                            */
/*==============================================================*/
create table CATEGORIES
(
   CATEGORY_ID          smallint not null,
   CATEGORY_NAME        varchar(100) not null,
   CATEGORY_CREATEDAT   datetime,
   CATEGORY_UPDATEDAT   datetime,
   primary key (CATEGORY_ID)
);

/*==============================================================*/
/* Table: POSTS                                                 */
/*==============================================================*/
create table POSTS
(
   POST_ID              smallint not null,
   USER_ID              smallint,
   CATEGORY_ID          smallint,
   POST_TITLE           varchar(255) not null,
   POST_CONTENT         text not null,
   POST_IMAGE           varchar(500) not null,
   POST_CREATEDAT       datetime,
   POST_UPDATEDAT       datetime,
   primary key (POST_ID)
);

/*==============================================================*/
/* Table: USERS                                                 */
/*==============================================================*/
create table USERS
(
   USER_ID              smallint not null,
   USER_NAME            varchar(100) not null,
   USER_SURNAME         varchar(100) not null,
   USER_ROLE            varchar(20) not null,
   USER_EMAIL           varchar(255) not null,
   USER_PASSWORD        varchar(255) not null,
   USER_DESCRIPTION     text not null,
   USER_IMAGE           varchar(500) not null,
   USER_CREATEDAT       datetime,
   USER_UPDATED_AT      datetime,
   USER_REMEMBER_TOKEN  varchar(500),
   primary key (USER_ID)
);

alter table POSTS add constraint FK_CATEGORY_POST foreign key (CATEGORY_ID)
      references CATEGORIES (CATEGORY_ID) on delete restrict on update restrict;

alter table POSTS add constraint FK_USER_POST foreign key (USER_ID)
      references USERS (USER_ID) on delete restrict on update restrict;

