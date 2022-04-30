import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(
    value: string,
    limit: number = 120,
    completeWords: boolean = true,
    ellipsis: string = '...'
  ): string {
    const selectedLimit = completeWords ? value.substr(0, limit).lastIndexOf(' ') : limit;
    return value.length > selectedLimit ? value.substr(0, selectedLimit) + ellipsis : value;
  }
}
