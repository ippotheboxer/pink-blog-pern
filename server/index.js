const express = require("express");
const { PORT, CLIENT_URL } = require("./src/constants");
const app = express();
const cookieParser = require('cookie-parser')
const passport = require('passport');
const cors = require('cors');

// Import passport middleware
require('./src/middlewares/passport-middleware');

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(cors({origin: CLIENT_URL, credentials: true}));

// Import routes
const authRoutes = require("./src/routes/auth");
const blogRoutes = require("./src/routes/blog");

// Initialize routes
app.use('/api', authRoutes);
app.use('/api', blogRoutes);

// App start
const appStart = () => {
  try {
    app.listen(PORT, () => {
      console.log(`App running on port ${PORT}`);
    })
  } catch (error) {
    console.log(error);
  }
}

appStart();