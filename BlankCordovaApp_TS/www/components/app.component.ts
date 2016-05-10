import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'my-app',
	templateUrl: '../templates/app.component.html',
	styleUrls: ['../css/app.component.css']
})
export class AppComponent implements OnInit {

	ngOnInit() {
		// add event listener to the battery status event
		window.addEventListener("batterystatus", this._onBatteryStatus, false);
	}

	_onBatteryStatus(status: Object): void {
		function alertDismissed() {
			// do something
		}

		navigator.notification.alert(
			'Battery percentage: ' + status.level + "; isPlugged: " + status.isPlugged,  // message
			alertDismissed,         // callback
			'Battery status',            // title
			'Done'                  // buttonName
		);
	}
}