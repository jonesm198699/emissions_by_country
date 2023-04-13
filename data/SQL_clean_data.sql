CREATE TABLE emissions ( 
	id SERIAL PRIMARY KEY,
  Country VARCHAR(50),
  iso_code VARCHAR(10),
  Year INT,
  Total FLOAT,
  Coal FLOAT,
  Oil FLOAT,
  Gas FLOAT,
  Cement FLOAT,
  Flaring FLOAT,
  Other FLOAT,
  Per_Capita FLOAT
 
);

SELECT * FROM emissions;
DROP TABLE emissions;

DELETE FROM emissions 
WHERE year <= 1990;

DELETE FROM emissions 
WHERE country = 'Global';

delete from emissions
where not (emissions is not null);

