INSERT INTO customers (authid, name) VALUES ($1, $2) RETURNING authid, name;