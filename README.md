# aerodeck API Platform

## Routes

### Games

- GET /games

### Matches

- POST /:game/matches
- GET /:game/matches
- GET /:game/matches/:matchid
- PUT /:game/matches/:matchid
- DELETE /:game/matches/:matchid

### Users

- POST /users
- POST /users/:userid/reset
- POST /users/:userid/change
- GET /users
- GET /users/:userid
- PUT /users/:userid
- DELETE /users/:userid

## Run

Begin the API server locally with the following command:

``` sh
node aerodeck 
```

With the server running, give this a try:

``` sh
curl -i -X GET http://localhost:8000/games
```

If it outputed 'GET /games' under 'aerodeck API server listening on port 8000', then it worked.

## License

aerodeck-platform is available under the MIT license. See the LICENSE file for more info.
