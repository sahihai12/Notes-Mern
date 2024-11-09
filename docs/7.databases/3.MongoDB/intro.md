---
id: mongo
title: Interview Questions
---


### 1. What is MongoDB?
MongoDB is a NoSQL database that stores data in a flexible, document-oriented format (BSON). It is highly scalable, offering horizontal scalability through sharding and supports real-time data access.



### 2. How do you connect to MongoDB from a Node.js application?
To connect to MongoDB from Node.js, you can use the mongoose library (a MongoDB ODM) or the native mongodb driver.
```js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Connection error", err));

```



### 3. What is the difference between findOne() and find()?
- `findOne()` returns the first document that matches the query.
- `find()` returns a cursor to all documents that match the query.
```js 
// Returns the first document that matches the name "John"
db.users.findOne({ name: "John" }, (err, doc) => {
  console.log(doc);
});

// Returns a cursor for all documents with age > 25
db.users.find({ age: { $gt: 25 } }).toArray((err, docs) => {
  console.log(docs);
});
```



### 4. What is an Index in MongoDB and how does it work?
An index improves the search efficiency of a database. MongoDB creates an index to speed up query performance, much like a book index.
```js
// Creating an index on the "name" field
db.users.createIndex({ name: 1 });

// Querying with the index
db.users.find({ name: "John" });

```


### 5. Explain the aggregate() function in MongoDB.
The aggregate() function is used to process data records and return computed results. It uses a pipeline approach, where each stage transforms the data.
```js
// Aggregating users by age
db.users.aggregate([
  { $group: { _id: "$age", count: { $sum: 1 } } }, // Group by age
  { $sort: { count: -1 } }  // Sort by the count of users
]);

// This aggregation groups users by age and counts how many users are there per age group, then sorts them in descending order of count.
```


### 6. What are Replica Sets in MongoDB?
Replica sets provide redundancy and high availability by replicating data across multiple MongoDB instances. If one instance fails, the other can take over.
*A typical replica set consists of a primary node (handles all writes) and secondary nodes (replicate data from the primary).*
```js
// Example of replica set configuration in MongoDB
rs.initiate({
  _id: "rs0",
  members: [
    { _id: 0, host: "mongodb0.example.net:27017" },
    { _id: 1, host: "mongodb1.example.net:27017" },
    { _id: 2, host: "mongodb2.example.net:27017" }
  ]
});

```


### 7. What is Sharding in MongoDB?
Sharding is the process of distributing data across multiple servers. It helps to scale out MongoDB horizontally to handle large data volumes.
```js
// Enable sharding on the "users" collection in the "myDatabase"
sh.enableSharding("myDatabase");
sh.shardCollection("myDatabase.users", { "user_id": 1 });

// Here, we enable sharding for the users collection, using the user_id field as the shard key.

```


### 8. How does MongoDB handle transactions?
MongoDB supports multi-document ACID transactions from version 4.0 onwards, allowing for consistency across multiple documents in a single operation.
```js
const session = await mongoose.startSession();
session.startTransaction();
try {
  // Perform operations within a transaction
  const user = new User({ name: 'Jane' });
  await user.save({ session });

  const order = new Order({ userId: user._id, total: 100 });
  await order.save({ session });

  // Commit the transaction
  await session.commitTransaction();
} catch (error) {
  await session.abortTransaction();
  throw error;
} finally {
  session.endSession();
}
```


### 9. Explain the concept of a capped collection in MongoDB.
Capped collections are fixed-size collections that automatically overwrite the oldest documents when the space is full. They are ideal for logging or time-series data.
```js
// Create a capped collection with a size limit of 1MB and 1000 documents
db.createCollection("logs", { capped: true, size: 1000000, max: 1000 });

// This collection will store up to 1000 documents and will automatically remove the oldest document when the limit is reached.

```


### 10. What is the MongoDB aggregation framework, and how does it work?
The aggregation framework in MongoDB is a powerful tool for transforming and processing data. It allows you to perform operations such as filtering, grouping, sorting, and projecting data in a pipeline of stages.
```js
// Aggregation pipeline example to group users by age and count them
db.users.aggregate([
  { $group: { _id: "$age", count: { $sum: 1 } } },
  { $sort: { count: -1 } }
]);
```


### 11. What is $match in MongoDB aggregation, and when is it used?
The $match stage filters documents in an aggregation pipeline. It is similar to the find() query method, and it’s usually placed at the beginning of the pipeline to reduce the number of documents that need to be processed in subsequent stages.

```js
// Aggregation pipeline with a $match stage to filter users older than 30
db.users.aggregate([
  { $match: { age: { $gt: 30 } } },
  { $group: { _id: "$age", count: { $sum: 1 } } }
]);
```


### 12. What is $project in MongoDB aggregation, and how does it work?
The $project stage is used to include, exclude, or add new fields to the documents in the aggregation pipeline. You can also rename fields or compute new values based on existing fields.
```js
// Aggregation pipeline that excludes the "address" field and renames "name" to "fullName"
db.users.aggregate([
  { $project: { name: 0, fullName: "$name", age: 1 } }
]);

```


### 13. How does $lookup work in MongoDB aggregation?
The $lookup stage allows you to perform a left outer join between two collections. It is similar to the join operation in SQL. $lookup enables you to combine documents from different collections into a single document.

The $unwind stage deconstructs an array field from the input documents. It takes each element of the array and outputs a separate document for each element. This is useful when you need to flatten the array of values into individual documents.

```js
db.orders.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "userDetails"
    }
  },
  { 
    $unwind: "$userDetails"   // Flatten the array created by $lookup
  }
]);
```


:::note
Replication and sharding are both techniques used in MongoDB to improve performance and increase throughput, but they achieve this in fundamentally different ways. Here’s a breakdown of both concepts and how they differ: Replication only reading and avialiblity of data, while sharding is used for horizontal partitioning of data across multiple servers.

- `Replication`: Use when you need high availability, data redundancy, and improved read performance.
- `Sharding`: Use when your data grows too large for a single server or when you need to handle high write throughput and large datasets.
:::