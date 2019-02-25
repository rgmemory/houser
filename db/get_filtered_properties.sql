select * from properties
where user_id = $1 and rent > $2;