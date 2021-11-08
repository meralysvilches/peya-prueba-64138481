--1.Cantidad de órdenes y monto total de órdenes por ciudad, país. Nivel año-mes
--Se obtiene la cantidad de órdenes y monto total de órdenes por ciudad, país y por cada año-mes. 
--No esta especificado si para el calculo del monto total se tiene en cuenta si la orden tiene como state_name  CONFIRMED
--por tanto no se toma en consideracion
SELECT 
  EXTRACT(YEAR_MONTH FROM o.order_date) as  order_date 
, o.city
, o.country
, count((EXTRACT(YEAR_MONTH FROM o.order_date))) as count_order
, sum(o.order_amount) as order_amount
FROM 
	orders o 
GROUP BY
	 o.city
	, o.country
ORDER BY
   o.country 
   , o.city
   , o.order_date
   
--#2.Cantidad de restaurantes en Uruguay, por categoría de restaurante, que tienen por lo menos un monto mensual (order amount) en abril 2017 mayor a 1000.
--No esta especificado si se deben mostrar el order_amount cuyas ordenes son CONFIRMED 
--por tanto no se toma en consideracion 
SELECT COUNT(r.id) as count_restaurant
, r.category as category 
FROM restaurants r 
INNER JOIN orders o ON r.id  = o.restaurant_id 
WHERE UPPER(o.country) = 'URUGUAY' AND EXTRACT(YEAR_MONTH FROM o.order_date) = 201704 AND o.order_amount > 1000
GROUP BY 
r.category


--3.Cantidad de restaurantes distintos en que compró cada usuario en todo el período. 
--No esta especificado si para considerar que una compra de un usuario es efectiva se considera la orden con state_name = CONFIRMED
--por tanto no se toma en consideracion
--Se con considera el termino "todo el período" como todas las compras realizadas hasta la fecha

SELECT COUNT(o.restaurant_id) as count_restaurant
, r.id as restaurant_id
, r.restaurant_name AS restaurant_name
, u.id as user_id
, u.user_firstname 
, u.user_lastname 
FROM orders o INNER JOIN users u on o.user_id = u.id
INNER JOIN restaurants r ON o.restaurant_id  = r.id 
GROUP BY 
r.id
,  r.restaurant_name 
, u.id 
ORDER BY 
   u.id 
,  r.id 