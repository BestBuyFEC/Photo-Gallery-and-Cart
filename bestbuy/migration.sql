CREATE TABLE product(
    id SERIAL PRIMARY KEY,
    product_name VARCHAR,
    sku VARCHAR
);

CREATE TABLE image(
    id SERIAL PRIMARY KEY,
    image_url VARCHAR,
    product_id INT REFERENCES product(id)
);