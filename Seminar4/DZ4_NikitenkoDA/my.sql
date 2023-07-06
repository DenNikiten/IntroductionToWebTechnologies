CREATE TABLE groupmate (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name TEXT NOT NULL,
  age INT NOT NULL,
  address TEXT NOT NULL
);

INSERT INTO groupmate(name, age, address) VALUES ('Anton', '18', 'Moscow');
INSERT INTO groupmate(name, age, address) VALUES ('Olga', '19', 'Samara');
INSERT INTO groupmate(name, age, address) VALUES ('Pauline', '18', 'Kirov');
INSERT INTO groupmate(name, age, address) VALUES ('Fedor', '30', 'Moscow');
INSERT INTO groupmate(name, age, address) VALUES ('Mark', '17', 'Ekaterinburg');
INSERT INTO groupmate(name, age, address) VALUES ('Klark', '22', 'Moscow');
INSERT INTO groupmate(name, age, address) VALUES ('Maria', '35', 'Moscow');

SELECT name FROM groupmate WHERE address = 'Moscow' AND age >= 18 AND age < 30;