# Giselle
Friendly helpful discord bot that manages your messages and makes sure the server stays as innocent as she is.

# Execution
Just `npm install` and then `node giselle.js`
I personally use `pm2` to keep it up and running consistently. Not that it crashes or anything...

# Plans
Giselle was initially intended to be the automated text formatting tool between a channel in discord and a channel in an IRC server, with plans to eventually integrate the chat into a web based chat service run by KBVE. Those plans are now on the backburner so this bot is now more of a chat filter to keep the server clean.
I do, however, have some specific functionality that I'd like Giselle to have, they are listed below.
- Restructuring the skeleton to be a bit prettier, want to have a specific file for banned words and spread things out into a more structured system.
- I would like to make a library for outputting text for Giselle, I feel like it would make the code a lot smoother in aesthetics and in function.
- h0ly wants me to implement some commands, namely a ping command. I want to create a modular command handler function so the bot becomes less handwritten and more plugandplay.
- Smarter and more comprehensive censorship protocols would be useful. Instantly after implementing the keyword message deleter someone showed me a million different ways to get past it and it would be a useful project to practice my code in. It's not super necessary, however, since deleting the main word should be all I should care about but hey whatever right.

# Versions
```
Version . Description
v0.1    . Simple N-Word and http link blocker for KBVE Public Access and Spec Ops Server
```
