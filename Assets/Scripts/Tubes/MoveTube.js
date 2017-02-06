﻿#pragma strict

public var velocity : Vector2;
public var distanceBetweenColumns: Vector2;

function Update () {
	moveTube();		
}

function moveTube() {
	this.transform.position += velocity * Time.deltaTime;

	if (this.transform.position.x <= -13.5f) {
		var temporalPosition : Vector2 = this.transform.position + distanceBetweenColumns;
		temporalPosition.y = Random.Range(-3f, 0.6f);
		this.transform.position = temporalPosition;
	}
}