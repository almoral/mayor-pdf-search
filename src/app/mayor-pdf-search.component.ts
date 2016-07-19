import {Component} from '@angular/core'
import {SearchBoxComponent} from './search-box'
import {FileListComponent} from './file-list'
import {HTTP_PROVIDERS, URLSearchParams} from '@angular/http'
import { PdfsService } from './pdfs.service'
import {YearSelectorComponent} from './year-selector'
import {MonthSelectorComponent} from './month-selector'
import {ResetButtonComponent} from './reset-button'
import {MDCRequest} from './mdc-request'


@Component({
  moduleId: module.id,
  selector: 'mayor-pdf-search-app',
  directives: [YearSelectorComponent, MonthSelectorComponent, SearchBoxComponent, ResetButtonComponent, FileListComponent],
  templateUrl: 'mayor-pdf-search.component.html',
  styleUrls: ['mayor-pdf-search.component.css'],
  providers: [HTTP_PROVIDERS, PdfsService]
})


export class MayorPdfSearchAppComponent {

	public files:any;
	public months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


	constructor(private pdfService: PdfsService){}

	ngOnInit(){


		let opts:MDCRequest = {
			url: 'http://www.miamidade.gov/mayor/searchApp/searchHandler.ashx?',
			targetFolder: 'memos-and-reports',
			targetYear: '',
			targetMonth: ''
		}

				this.files = this.pdfService.getFiles(opts).getValue();
		};

}
