import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'yesNoBool'
})
export class YesNoBooleanPipe implements PipeTransform {
    transform(value: boolean): string {
        return value === true
            ? 'Y'
            : 'N';
    }
}
