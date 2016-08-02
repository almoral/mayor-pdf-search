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
	public months: any[] = [
		{'label': 'Please Select a Month', 'value': false}, 
		{'label':'January', 'value': 'January'}, 
		{'label':'February', 'value': 'February'},
		{'label': 'March', 'value': 'March'},
		{'label': 'April', 'value': 'April'},
		{'label':'May', 'value': 'May'},
		{'label': 'June', 'value': 'June'},
		{'label': 'July', 'value': 'July'},
		{'label': 'August', 'value': 'August'},
		{'label':'September', 'value': 'September'},
		{'label': 'October', 'value': 'October'},
		{'label': 'November', 'value': 'November'},
		{'label': 'December', 'value': 'December'}
		];


	constructor(private pdfService: PdfsService){}

getParameterByName(name:string = '', url:string = ''){

		if(!url) url = window.location.href;

		name = name.replace(/[\[\]]/g, "\\$&");
    	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    	
    	if (!results) return null;
    	
    	if (!results[2]) return '';
    	
    	console.log('returned param: ', decodeURIComponent(results[2].replace(/\+/g, " ")))

    	return decodeURIComponent(results[2].replace(/\+/g, " "));
	}
	

	ngOnInit(){


		let opts:MDCRequest = {
			url: 'https://www.miamidade.gov/mayor/searchApp/searchHandler.ashx?',
			targetFolder: this.getParameterByName('folder') === null ? "memos-and-reports": this.getParameterByName('folder'),
			targetYear: this.getParameterByName('year') === null ? "": this.getParameterByName('year'),
			targetMonth: this.getParameterByName('month') === null ? "": this.getParameterByName('month'),
		}

				this.files = this.pdfService.getFiles(opts).getValue();
		};

}
