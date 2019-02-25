insert into houseruser (username, password)
values($1, $2)

returning *
-- returns entire row