---
id: mysql-interview-questions
title: Interview Questions
---

### 1. What is the difference between INNER JOIN and LEFT JOIN in MySQL?
- `INNER JOIN` Returns only the rows that have matching values in both tables. If there is no match, the row is excluded from the result.
- `LEFT JOIN` (or LEFT OUTER JOIN): Returns all rows from the left table, and matching rows from the right table. If there is no match, NULL values are returned for columns from the right table.

```sql 
SELECT * FROM orders
INNER JOIN customers ON orders.customer_id = customers.id;

SELECT * FROM orders
INNER JOIN customers ON orders.customer_id = customers.id;
```

### What is the difference between TRUNCATE and DELETE?
- `DELETE`: Removes rows from a table one at a time, and can be filtered with a WHERE clause. It is slower because it logs each row deletion.
- `TRUNCATE`: Removes all rows from a table by deallocating the data pages. It is faster and does not log individual row deletions. However, it cannot be rolled back in some cases and cannot be used with a WHERE clause.



### 3. What are indexes in MySQL? Why do we use them?
An index is a data structure that improves the speed of data retrieval operations on a table at the cost of additional space and slower write operations (inserts, updates, and deletes).
Indexes are used to enhance the performance of queries by allowing quick lookups, especially for columns involved in WHERE, JOIN, ORDER BY, and GROUP BY clauses.

```sql
CREATE INDEX idx_employee_name ON employees(name);
```

### What is a PRIMARY KEY and a FOREIGN KEY in MySQL?
- `PRIMARY KEY`: Uniquely identifies each record in a table. It ensures that the values in the primary key column(s) are unique and not NULL.
- `FOREIGN KEY`: A column (or set of columns) that creates a relationship between two tables. It refers to the PRIMARY KEY of another table to enforce referential integrity.

```sql
CREATE TABLE departments (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE employees (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES departments(id)
);
```

### What is the difference between WHERE and HAVING?
- `WHERE`: Filters rows before any aggregation is applied, working on individual rows.
- `HAVING`: Filters groups after the GROUP BY operation, working on aggregate data.

```sql
SELECT department_id, AVG(salary)
FROM employees
GROUP BY department_id
HAVING AVG(salary) > 50000;
```

### What are the types of joins in MySQL?
- `INNER JOIN`: Returns only the rows with matching values in both tables.
- `LEFT JOIN`: Returns all rows from the left table, and matching rows from the right table.
- `RIGHT JOIN`: Returns all rows from the right table, and matching rows from the left table.
- `FULL JOIN` (not supported by MySQL directly): Returns all rows when there is a match in either left or right table. In MySQL, this can be achieved using UNION of LEFT JOIN and RIGHT JOIN.


### What is a UNION in MySQL?
- `UNION` combines the results of two or more SELECT statements into a single result set, removing duplicates. To include duplicates, use UNION ALL.

```sql
SELECT name FROM employees
UNION
SELECT name FROM customers;
```

### What is the use of EXPLAIN in MySQL?
- `EXPLAIN` statement provides information about how MySQL executes a query. It helps in analyzing query performance, revealing the execution plan, indexes used, join types, and more.

```sql
EXPLAIN SELECT * FROM employees WHERE salary > 50000;
```

### What is the difference between CHAR and VARCHAR in MySQL?
- `CHAR`: A fixed-length string. It pads the value with spaces if it’s shorter than the defined length. Used for fields with a fixed size (e.g., country code).
- `VARCHAR`: A variable-length string. It uses only the necessary space and is more flexible for fields where the length can vary.

```sql
CREATE TABLE users (
  username VARCHAR(50),
  phone_number CHAR(10)
);
```

### What is a subquery in MySQL?
A subquery is a query embedded inside another query, typically inside a WHERE, FROM, or SELECT clause. It can be a single-row, multiple-row, or correlated subquery.

```sql
SELECT name 
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
```

### How would you find the second-highest salary in a table?

```sql
SELECT MAX(salary) AS SecondHighestSalary
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);
```

### What is the difference between TRUNCATE and DROP in MySQL?
- `TRUNCATE`: Removes all rows from a table but keeps the table structure intact. It is faster than DELETE and cannot be rolled back in some cases.
- `DROP`: Removes the table and all its data from the database permanently.

```sql
TRUNCATE TABLE employees;
DROP TABLE employees;
```

### What is a VIEW in MySQL?
A VIEW is a virtual table that stores the result of a query. It simplifies complex queries by allowing the user to query a view as if it were a regular table.

```sql
CREATE VIEW employee_salaries AS
SELECT name, salary FROM employees WHERE salary > 50000;
```

###  What is the AUTO_INCREMENT attribute in MySQL?
- `AUTO_INCREMENT` is used to generate a unique value for the PRIMARY KEY column automatically when a new row is inserted. It increments the value for each new row.

```sql
CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100)
);
```

### Find all employees who have the same salary as 'John'.

```sql
SELECT name, salary 
FROM employees
WHERE salary = (SELECT salary FROM employees WHERE name = 'John');
```

### List the employees who have not been assigned a department

```sql
SELECT id, name
FROM employees
WHERE department_id IS NULL;
```

### Find the total salary of each department.

```sql
SELECT department_id, SUM(salary) AS total_salary
FROM employees
GROUP BY department_id;
```

### Delete duplicate records from a table
```sql
DELETE u1
FROM users u1
INNER JOIN users u2
WHERE u1.id < u2.id AND u1.email = u2.email;
```
### Find the employees who have worked in more than one department.
```sql
SELECT id, name
FROM employees
GROUP BY id, name
HAVING COUNT(DISTINCT department_id) > 1;
```

### Find employees who joined in the last 30 days.
```sql
SELECT id, name, hire_date
FROM employees
WHERE hire_date > CURDATE() - INTERVAL 30 DAY;
```