import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { TextService } from '../text-service/text.service';
import { SynonymService } from '../synonym-service/synonym.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  public word = '';
  public synonyms = [];
  private _selection = null;

  @ViewChild('file') el: ElementRef;

  constructor(
    private _textService: TextService,
    private _synonymService: SynonymService
  ) {}

  ngOnInit() {
    this._textService.getMockText().then((result) => this.el.nativeElement.innerHTML = result);
  }

  public updateStyle(style) {
    const {startOffset, endOffset} = getSelection().getRangeAt(0);
    const openTag = `<${style.toLowerCase()}>`;
    const closeTag = `</${style.toLowerCase()}>`;
    const html = this.el.nativeElement.innerHTML;
    const text = this.el.nativeElement.innerText;
    const selectedText = html.slice(startOffset, endOffset);

    debugger;

    this.el.nativeElement.innerHTML = [
      html.slice(0, startOffset),
      openTag, text.slice(startOffset, endOffset), closeTag,
      html.slice(endOffset)
    ].join('');
  }

  @HostListener('dblclick') selectedWord() {
    this.word = getSelection().toString();
    this._selection = getSelection();
    this._synonymService.getSynonym(this.word).then(res => {
      const data = res.json();
      if (data.length) {
        this.synonyms = data.sort((a, b) => a.score < b.score);
      } else {
        this.synonyms = [];
      }
    });
  }

  @HostListener('click') deselect() {
    this.word = '';
    this.synonyms = [];
  }

  replace(event) {
    const newWord = event.target.innerText;
    if (this._selection.rangeCount) {
      const range = this._selection.getRangeAt(0);
      range.deleteContents();
      range.insertNode(document.createTextNode(newWord));
    }
  }

}
