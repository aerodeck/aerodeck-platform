<h1>aerodeck API Platform</h1>

<h2>Routes</h2>
<p><b>Games</b></p>
<ul>
	<li>
		GET /games
	</li>
</ul>
<p><b>Matches</b></p>
<ul>
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
</ul>
<p><b>Oauth</b></p>
<ul>
	<li>
		POST /oauth/token
	</li>
</ul>
<p><b>Users</b></p>
<ul>
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
	$ node aerodeck 
</code>

<p>Do this curl command in another terminal session. And with the server running.</p>

<code>
	$ curl -i -X GET http://localhost:3000/games
</code>

<p>If it outputed 'GET /games' under 'aerodeck API server listening on port 3000', then it worked.</p>
<h3>License</h3>
<p>aerodeck Platform is licensed under the MIT license. See LICENSE.md to view.</p> 