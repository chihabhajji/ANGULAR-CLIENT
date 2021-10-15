import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl} from "@angular/forms";


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
	messageFormControl: FormControl = new FormControl({}, );
	@Output() closeChatEvent: EventEmitter<undefined> = new EventEmitter<undefined>();
	@HostListener('document:click') clickout() {console.log("clicked router")}
  constructor() { }

  ngOnInit(): void {

	}
	get message(): AbstractControl | null{
		return this.messageFormControl.get('message');
	}
	toggleChat() {
		this.closeChatEvent.emit(undefined);
	}

}
