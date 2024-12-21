// server/server.js

// NEED TO CONNECT TO DB AND GET ACTUAL DATA INSTEAD OF HARD CODE

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// ALL USERS THAT SIGN UP
const testUsers = {
  'netid': {
    'nextTarget': 'sm4635',
    'assassin': 'hk1234',
    'numKills': 5,
    'isEliminated': false,
    'isAdmin': true,
  },
  'sm5635': {
    'nextTarget': 'hk1234',
    'assassin': 'netid',
    'numKills': 9,
    'isEliminated': false,
    'isAdmin': true,
  },
  'hk1234': {
    'nextTarget': 'netid',
    'assassin': 'sm5635',
    'numKills': 7,
    'isEliminated': false,
    'isAdmin': true,
  }
};

// ALL USERS STILL ALIVE - once they get eliminated will be removed from this list 
const aliveUsers = ['netid', 'sm5635', 'hk1234'];

// GAME INFO
const testGame = {
  'gameHasBegun': true,
  'numPlayersEliminated': 0,
};

// GET requests
//----------------------------------------------------------------
// GETs if a player is admin
app.get('/isAdmin*', (req, res) => {
  try {
    const username = req.query.username;
    console.log(`Received request for username: ${username}`);
    
    if (!username) {
      return res.status(400).json({ error: 'Username is required' });
    }

    const user = testUsers[username];
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const admin = user['isAdmin'];
    res.json({ message: admin });
  } catch (error) {
    console.error('Error in /isAdmin:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GETs a players target
app.get('/target*', (req, res) => {
  const username = req.query.username; // Corrected this line
  console.log(`Received request for username: ${username}`);
  const user = testUsers[username];
  if (user) {
    const target = user['nextTarget'];
    res.json({ message: target });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// GETs a players number of kills
app.get('/numKills*', (req, res) => {
  const username = req.query.username; // Corrected this line
  console.log(`Received request for username: ${username}`);
  const user = testUsers[username];
  if (user) {
    const kills = user['numKills'];
    res.json({ message: kills });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// GETs number of players remaining
app.get('/numRemaining', (req, res) => {
  res.json({ message: 100})
});

// GETs if a player is eliminated
app.get('/isEliminated*', (req, res) => {
  const username = req.query.username; // Corrected this line
  console.log(`Received request for username: ${username}`);
  const user = testUsers[username];
  if (user) {
    const eliminated = user['isEliminated'];
    res.json({ message: eliminated });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// GET all remaining players netids
app.get('/remainingPlayers', (req, res) => {
  // HOW TO GET LIST OF ALL USERS (DEAD OR ALIVE): const playeres = Object.keys(testUsers);
  const remainingPlayers = aliveUsers;
  console.log(remainingPlayers);
  res.json({ message: remainingPlayers });
});

// PROBABLY SHOULD BE A POST REQUEST TO DB BC CHANGING VALUES - LOGIC IS CORRECT THOUGH
app.get('/eliminate*', (req, res) => {
  const username = req.query.username;
  playersEliminated = req.query.numPlayersEliminated;
  const user = testUsers[username]
  const eliminatedTarget = user['nextTarget'];
  const assassin = user['assassin'];
  user['isEliminated'] = true;
  user['nextTarget'] = null;
  user['assassin'] = null;

  //updating the person who will now have the target
  const newAssassin = testUsers[assassin];
  newAssassin['nextTarget'] = eliminatedTarget;

  //updating the 'assassin' of the new target
  const target = testUsers[eliminatedTarget];
  target['assassin'] = assassin;

  console.log(assassin)
  console.log(eliminatedTarget)
  var index = aliveUsers.indexOf(username);
  if (index != -1) aliveUsers.splice(index, 1);
  console.log(aliveUsers);
  console.log(testUsers);
  playersEliminated++;

  res.json({ message: playersEliminated }); 
});

// POST requests
//----------------------------------------------------------------

// eliminate player will most likely have to go here 
// shuffle targets will most likely have to go here 

// starting server
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server is running on port number ${PORT}`);
}).on('error', (err) => {
  console.error('Server failed to start:', err);
});