python3 python-server/server.py & # & is used to run the command in background
python_addr=$! # $! is used to get the PID of the last command
npm start # npm start is used to start the web-app frontend
kill "$python_addr" # kill the python server process