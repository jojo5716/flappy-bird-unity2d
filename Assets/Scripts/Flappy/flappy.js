#pragma strict

public var gravity : Vector3;
public var velocityFlying : Vector3;
public var maxVelocity : float;

private var isFlying : boolean;
private var velocity : Vector3;


function Update () {
	if (Input.GetKeyDown(KeyCode.Space) || Input.GetMouseButtonDown(0)) {
		isFlying = true;
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
	 	angle = Mathf.Lerp(0, -75, -velocity.y / maxVelocity);
	 }
	 transform.rotation = Quaternion.Euler(0, 0, angle);
}
