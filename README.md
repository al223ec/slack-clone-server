Run this command to manually start the postgreSQL server:

pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start

psql

\c slack;
You are now connected to database "slack" as user "antonledstrom".
slack=# \d
               List of relations
 Schema |      Name       |   Type   |  Owner
--------+-----------------+----------+----------
 public | channel_member  | table    | postgres
 public | channels        | table    | postgres
 public | channels_id_seq | sequence | postgres
 public | member          | table    | postgres
 public | messages        | table    | postgres
 public | messages_id_seq | sequence | postgres
 public | teams           | table    | postgres
 public | teams_id_seq    | sequence | postgres
 public | users           | table    | postgres
 public | users_id_seq    | sequence | postgres
(10 rows)

slack=# select * from channel_member;
 created_at | updated_at | user_id | channel_id
------------+------------+---------+------------
(0 rows)

slack=# select * from channels;
 id | name | public | created_at | updated_at | team_id
----+------+--------+------------+------------+---------
(0 rows)

slack=# select * from member;
 created_at | updated_at | user_id | team_id
------------+------------+---------+---------
(0 rows)

slack=# select * from messages;
 id | text | created_at | updated_at | channel_id | user_id
----+------+------------+------------+------------+---------
(0 rows)

slack=# select * from teams;
 id | name | created_at | updated_at | owner
----+------+------------+------------+-------
(0 rows)

slack=# select * from users;
 id | username | email | password | created_at | updated_at
----+----------+-------+----------+------------+------------
(0 rows)