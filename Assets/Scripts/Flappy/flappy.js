#pragma strict

public var gravity : Vector3;
public var velocityFlying : Vector3;
public var maxVelocity : float;
public var tube1 : MoveTube;
public var tube2 : MoveTube;

private var isFlying : boolean;
private var velocity : Vector3;

private var anim : Animator;
private var gameOver : boolean;

function Start() {
	anim = this.gameObject.GetComponent.<Animator>();
}

function Update () {
	if (Input.GetKeyDown(KeyCode.Space) || Input.GetMouseButtonDown(0)) {
		if (!gameOver) {
			isFlying = true;
		}
	}
}

function FixedUpdate() {
	velocity +=  gravity * Time.deltaTime;

	if (isFlying) {
		isFlying = false;
		velocity.y = velocityFlying.y;
	}

	transform.position += velocity * Time.deltaTime;
	var angle : float = 0.0;

	 if (velocity.y >= 0) {
	 	angle = Mathf.Lerp(0, 25, velocity.y / maxVelocity);
	 } else {
	 	angle = Mathf.Lerp(0, -25, -velocity.y / maxVelocity);
	 }
	 transform.rotation = Quaternion.Euler(0, 0, angle);
}

function OnCollisionEnter2D(coll : Collision2D) {
	var collisionName = coll.gameObject.name;
	var posibleColisions = ['tubeTop', 'tubeBottom', 'floor1'];

	if (collisionName in posibleColisions) {
		 tube1.velocity = new Vector2(0, 0);
		 tube2.velocity = new Vector2(0, 0);
		 anim.SetTrigger('gameOver');
		 gameOver = true;
	}

	if (collisionName == 'tubeBottom') {
    	coll.gameObject.GetComponent.<BoxCollider2D>().enabled = false;
	}

	if (collisionName == 'floor1') {
		 gravity = new Vector3(0, 0, 0);
	}
}