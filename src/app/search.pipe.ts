import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class Search implements PipeTransform {

transform(value: any, term:string, selectedYear:any, selectedMonth:any){


		if(value !== null && value !== undefined){
			
			if(!selectedYear && !selectedMonth){
			
				return value.filter((item:any) => item.label !== null && item.label.toLowerCase().indexOf(term.toLowerCase()) > -1);

			} 
		
			if(!selectedYear && !selectedMonth) {

				return value.filter((item:any) => item.year !== null && item.year == selectedYear.target.value);
			}

		
			if(selectedYear && !selectedMonth){

				return value.filter((item:any) => item.year !== null && item.year == selectedYear.target.value && item.label.toLowerCase().indexOf(term.toLowerCase()) > -1);

			}

			if(selectedYear && selectedMonth){

				return value.filter((item:any) => item.year !== null && item.year == selectedYear.target.value && item.label.toLowerCase().indexOf(term.toLowerCase()) > -1 && item.monthLabel == selectedMonth.target.value);

			}

			if(!selectedYear && selectedMonth){

				return value.filter((item:any) => item.year !== null && item.monthLabel == selectedMonth.target.value);

			}

			if(selectedYear && selectedMonth){

				return value.filter((item:any) => item.year !== null && item.label.toLowerCase().indexOf(term.toLowerCase()) > -1 && item.monthLabel == selectedMonth.target.value);

			}

		}

	}

}
