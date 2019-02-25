select * from properties
join houseruser
on properties.user_id = houseruser.user_id
where houseruser.user_id = $1;

-- slect * from properties 
-- where properties.user_id = $1;