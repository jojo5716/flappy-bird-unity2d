#pragma strict

public var velocity : Vector2;
public var distanceBetweenColumns: Vector2;
public var score : UI.Text;

private var addScore : boolean = true;

function Update () {
	moveTube();		
}

function moveTube() {
	this.transform.position += velocity * Time.deltaTime;

	if (this.transform.position.x <= -13.5f) {
		var temporalPosition : Vector2 = this.transform.position + distanceBetweenColumns;
		temporalPosition.y = Random.Range(-3f, 0.6f);
		this.transform.position = temporalPosition;
		addScore = true;
	}

	if (this.transform.position.x <= -12.83f && addScore) {
		var points = int.Parse(score.text) + 1;
		score.text = points.ToString();
		addScore = false;
		incrementVelocityByScore(points * -1);
		distanceBetweenColumns -= Vector2(Time.deltaTime, 0);
	}
}


function incrementVelocityByScore(score) {
	velocity += (Vector2(score, 0) * Time.deltaTime) * 1.5;
}