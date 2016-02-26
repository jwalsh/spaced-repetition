Command Line Spaced Repetition
=================
This is a command line spaced repetition program written in Javascript using Node.js.

Spaced repetition is a learning technique that incorporates increasing intervals of time between subsequent review of 
previously learned material in order to exploit the psychological spacing effect (<a href="http://en.wikipedia.org/wiki/Spaced_repetition">from Wikipedia</a>). 
It is very useful for learning a new language or specific sets of information.

<strong>Basically information you know well is shown less often, information you have trouble is shown more often.</strong>

The algorithm implemented in this app is the SM-2 algorithm used in the SuperMemo-2 software as well as the popular 
open source Anki software. The algorithm is described in detail here: http://www.supermemo.com/english/ol/sm2.htm

Installation
------------
- Make sure you have <a href="http://nodejs.org">Node.js</a> installed.
- Clone the repo and create your word list (see baseCards.json)
- On the command line run:
    npm install 

Running
-------
- On the command line run: 
    npm start

Testing
-------
- On the command line run: 
    npm test

