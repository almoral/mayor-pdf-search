import { Component, Input } from '@angular/core';
import {Search} from '../search.pipe'
import {FixUrl} from '../fix-url.pipe'


@Component({
  moduleId: module.id,
  selector: 'app-file-list',
  pipes: [Search, FixUrl],
  templateUrl: 'file-list.component.html',
  styleUrls: ['file-list.component.css']
})
export class FileListComponent {


	@Input() term:string;

	@Input() selectedYear: string;

	@Input() selectedMonth: string;

	@Input() fileList: any;

  constructor() {}


}
