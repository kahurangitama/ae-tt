import { Component, Input, OnInit } from '@angular/core';
import { FileComponent } from '../file/file.component';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  @Input() appFile: FileComponent;

  ngOnInit() {}

  format (event) {
    const { command } = event.currentTarget.dataset;

    if (command === 'h1' || command === 'h2' || command === 'p') {
      document.execCommand('formatBlock', false, command);
    } else if (command == 'createlink' || command == 'insertimage') {
      const url = prompt('Enter the link here: ', 'http:\/\/');
      document.execCommand(command, false, url);
    } else {
      document.execCommand(command, false, null);
    }
  }

}
