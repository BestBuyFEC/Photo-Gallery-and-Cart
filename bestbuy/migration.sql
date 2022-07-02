-- CREATE TABLE product(
--     id SERIAL PRIMARY KEY,
--     product_name VARCHAR,
--     sku VARCHAR,
--     release_date VARCHAR,
--     model VARCHAR,
--     price NUMERIC
-- );

-- CREATE TABLE image(
--     id SERIAL PRIMARY KEY,
--     image_url VARCHAR,
--     product_id INT REFERENCES product(id)
-- );

CREATE TABLE cart(
    id serial PRIMARY KEY,
    product_name VARCHAR,
    price NUMERIC,
    quantity INT,
    image_url VARCHAR,
    product_id INT REFERENCES product(id)
)