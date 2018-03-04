import { Component, OnInit } from '@angular/core';
import { TextService } from '../text-service/text.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  constructor(private _textService: TextService) {
  }

  ngOnInit() {
    this._textService.getMockText().then((result) => console.log(result));
  }

}
