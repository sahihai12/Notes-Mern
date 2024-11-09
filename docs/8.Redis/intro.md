---
id: redis
title: Redis 
---

### What is Redis?
**Answer**: Redis is an open-source, in-memory data structure store, used as a database, cache, and message broker. It supports different data types such as strings, lists, sets, hashes, and sorted sets. Redis is known for its high performance, persistence, and support for atomic operations.

### What is the difference between Redis and Memcached?
**Answer**: Redis is more feature-rich, supporting multiple data types like lists, sets, and sorted sets, and it also supports persistence and replication.
Memcached is simpler and is primarily used as a key-value store with only strings as values. It doesn't have support for complex data types, persistence, or replication.

### How does Redis handle replication?
**Answer**: Redis supports master-slave replication, where one server (master) handles writes, and multiple servers (slaves) can handle reads. This ensures high availability and read scaling. Data from the master is asynchronously replicated to the slaves.

### What is a Redis pipeline and when would you use it?
**Answer**: Redis pipeline allows sending multiple commands to the server without waiting for the response of each one individually. This improves performance by reducing round-trip time. It is useful when you need to execute many commands in a short amount of time.


### Redis simple example
```jsx
const express = require('express');
const redis = require('redis');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 3000;

// Create a Redis client
const client = redis.createClient({
  host: 'localhost', // Redis server address
  port: 6379,        // Redis server port
});

client.on('connect', () => {
  console.log('Connected to Redis');
});

app.use(express.json());

// Secret keys for JWT
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || 'access_secret';
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || 'refresh_secret';

// Mock user
const mockUser = {
  id: 1,
  username: 'user1',
};

// Generate an access token
function generateAccessToken(user) {
  return jwt.sign(user, ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
}

// Generate a refresh token
function generateRefreshToken(user) {
  const refreshToken = jwt.sign(user, REFRESH_TOKEN_SECRET, { expiresIn: '7d' });

  // Store refresh token in Redis with the user ID as the key
  client.setex(user.id.toString(), 60 * 60 * 24 * 7, refreshToken); // Store for 7 days

  return refreshToken;
}

// Endpoint to login (mocked for simplicity)
app.post('/login', (req, res) => {
  // In real-world apps, you would validate user credentials here

  const accessToken = generateAccessToken(mockUser);
  const refreshToken = generateRefreshToken(mockUser);

  res.json({
    accessToken,
    refreshToken,
  });
});

// Endpoint to refresh access token
app.post('/refresh', (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(401).json({ message: 'Refresh token required' });
  }

  // Verify refresh token
  jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid refresh token' });
    }

    // Check if the refresh token exists in Redis
    client.get(user.id.toString(), (err, storedToken) => {
      if (err || storedToken !== refreshToken) {
        return res.status(403).json({ message: 'Refresh token does not match' });
      }

      // Generate a new access token
      const newAccessToken = generateAccessToken(user);
      res.json({ accessToken: newAccessToken });
    });
  });
});

// Protected route to demonstrate access token use
app.get('/protected', (req, res) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header missing' });
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Access token invalid or expired' });
    }

    res.json({ message: `Hello ${user.username}, you have access!` });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

```

### What is TTL (Time To Live) in Redis?
In Redis, TTL (Time to Live) is a setting applied to a key to define its expiration time. Once the TTL expires, the key will be automatically deleted by Redis. This is particularly useful for managing cache data, session data, or any other temporary information that should not persist indefinitely.

