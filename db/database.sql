CREATE TABLE pizzas (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  imageUrl VARCHAR(511),
  price NUMERIC,
  rating NUMERIC
);

CREATE TABLE cart (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  imageUrl VARCHAR(511),
  price NUMERIC,
  type VARCHAR(255),
  size NUMERIC,
  pizzas_id INTEGER NOT NULL,
  FOREIGN KEY (pizzas_id) REFERENCES pizzas(id)
);

CREATE TABLE types (
  pizzas_id INTEGER,
  title VARCHAR(255) NOT NULL,
  FOREIGN KEY (pizzas_id) REFERENCES pizzas(id)
);

CREATE TABLE sizes (
  pizzas_id INTEGER,
  size NUMERIC NOT NULL,
  FOREIGN KEY (pizzas_id) REFERENCES pizzas(id)
);

CREATE TABLE categories (
  pizzas_id INTEGER,
  category VARCHAR(255),
  FOREIGN KEY (pizzas_id) REFERENCES pizzas(id)
);

INSERT INTO pizzas 
VALUES 
(1, 
'Пепперони Фреш с перцем', 
'https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg', 
803, 
4);

INSERT INTO pizzas 
VALUES 
(2, 
'Сырная', 
'https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg', 
245, 
6);

INSERT INTO pizzas 
VALUES 
(3, 
'Цыпленок барбекю', 
'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg', 
295, 
4);

INSERT INTO pizzas 
VALUES 
(4, 
'Кисло-сладкий цыпленок', 
'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg', 
275, 
2);

INSERT INTO pizzas 
VALUES 
(5, 
'Чизбургер-пицца', 
'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg', 
415, 
8);

INSERT INTO pizzas 
VALUES 
(6, 
'Крэйзи пепперони', 
'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/1e1a6e80-b3ba-4a44-b6b9-beae5b1fbf27.jpg', 
500, 
2);

INSERT INTO pizzas 
VALUES 
(7, 
'Пепперони', 
'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg', 
675, 
9);

INSERT INTO pizzas 
VALUES 
(8, 
'Маргарита', 
'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg', 
450, 
10);

INSERT INTO pizzas 
VALUES 
(9, 
'Четыре сезона', 
'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg', 
395, 
10);

INSERT INTO pizzas 
VALUES 
(10, 
'Овощи и грибы', 
'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg', 
285, 
7);

INSERT INTO types 
VALUES 
(1, 'тонкое'),
(1, 'толстое'),
(2, 'тонкое'),
(2, 'толстое'),
(3, 'тонкое'),
(4, 'толстое'),
(5, 'тонкое'),
(5, 'толстое'),
(6, 'тонкое'),
(7, 'тонкое'),
(7, 'толстое'),
(8, 'тонкое'),
(8, 'толстое'),
(9, 'тонкое'),
(9, 'толстое'),
(10, 'тонкое'),
(10, 'толстое');

INSERT INTO sizes 
VALUES
(1, 26),
(1, 30),
(1, 40),
(2, 26),
(2, 40),
(3, 26),
(3, 40),
(4, 26),
(4, 30),
(4, 40),
(5, 26),
(5, 30),
(5, 40),
(6, 30),
(6, 40),
(7, 26),
(7, 30),
(7, 40),
(8, 26),
(8, 30),
(8, 40),
(9, 26),
(9, 30),
(9, 40),
(10, 26),
(10, 30),
(10, 40);

INSERT INTO categories
VALUES
(1, 'острые'),
(2, 'вегетарианские'),
(3, 'мясные'),
(4, 'мясные'),
(5, 'гриль'),
(6, 'мясные'),
(6, 'острые'),
(7, 'мясные'),
(8, 'вегетарианские'),
(9, 'мясные'),
(10, 'вегетарианские');

CREATE TABLE pizzas_new (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  imageUrl VARCHAR(511),
  types TEXT,
  categories TEXT,
  price NUMERIC,
  rating NUMERIC
);

INSERT INTO pizzas_new 
VALUES 
(1, 
'Пепперони Фреш с перцем', 
'https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg',
 '{"тонкое": true, "толстое": false}',
 '{"26": true, "30": true, "40": true}',
803, 
4);