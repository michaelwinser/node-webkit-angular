This is a trivial node-webkit-angular application example.

I wrote it to work out how best to connect angular based UI with node based modules.

The node module is a trivial service implementing a bomb.  Bombs can be created with a delay and will eventually explode.  Bombs emit events when they blowup.

The node module is wrapped by an angular factory.  This factory registers for events from the bomb and converts those events into all of the following:
 * Angular events.
 * Promises
 * Changes via $apply to the bomb's exploded state.

All three work and it's largely a question of preference and context that will determine which solution is right for you.

A few notes on managing async behaviour between angular providers and controllers.  
 * Promises are, IMO, the best way to do this.  Return a promise from your service.
 * Providers should not hang on to or even have references to scopes.  Angular avoids regenerating scopes wherever possible but there are always times when Angular has to create the scopes from scratch.  When this happens the provider's reference will be stale and will leak.
 * Appying changes to member variables is by far the least compelling approach.  It is nice however, to be able to reference subproperties on a node module without having to wrap everything in a promise.
