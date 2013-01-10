<h1>aerodeck API Platform</h1>

<h2>Routes</h2>
<ul>
	<p><b>Games</b></p>
	<li>
		GET /games
	</li>
	<p><b>Matches</b></p>
	<li>
		POST /quadrow/matches
	</li>
	<li>
		GET /quadrow/matches
	</li>
	<li>
		GET /quadrow/matches/:matchid
	</li>
	<li>
		PUT /quadrow/matches/:matchid
	</li>
	<li>
		DELETE /quadrow/matches/:matchid
	</li>
	<p><b>Oauth</b></p>
	<li>
		POST /oauth/token
	</li>
	<p><b>Users</b></p>
	<li>
		POST /users
	</li>
	<li>
		POST /users/:userid/reset
	</li>
	<li>
		POST /users/:userid/change
	</li>
	<li>
		GET /users
	</li>
	<li>
		GET /users/:userid
	</li>
	<li>
		PUT /users/:userid
	</li>
	<li>
		DELETE /users/:userid
	</li>
</ul>
<h3>Test</h3>

<code>
	$ node aerodeck //outputs aerodeck API server listening on port 3000
</code>
<p>Do this curl command in another terminal session. And with the server running.
<code>
	$ curl -i -X GET http://localhost:3000/games
</code>
<p>If it outputed 'GET /games' under 'aerodeck API server listening on port 3000', then it worked.</p>
<h3>License</h3>
<p>aerodeck Platform is licensed under the MIT license. See LICENSE.md to view.</p> 