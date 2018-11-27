Run this command to manually start the postgreSQL server:

pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start

psql

\c slack;
You are now connected to database "slack" as user "antonledstrom".
slack=# \d
               List of relations
 Schema |      Name       |   Type   |  Owner
--------+-----------------+----------+----------
 public | channels        | table    | postgres
 public | channels_id_seq | sequence | postgres
 public | member          | table    | postgres
 public | messages        | table    | postgres
 public | messages_id_seq | sequence | postgres
 public | teams           | table    | postgres
 public | teams_id_seq    | sequence | postgres
 public | users           | table    | postgres
 public | users_id_seq    | sequence | postgres
(9 rows)