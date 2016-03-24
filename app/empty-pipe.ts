import { Pipe, PipeTransform } from 'angular2/core';
import { Keg } from './keg.model';

@Pipe({
  name: 'empty',
  pure: false
})

export class EmptyPipe implements PipeTransform {
  transform(input: Keg[], args) {
    var desiredPintState = args[0];
    console.log(args[0]);
    if(desiredPintState === 'empty') {
      return input.filter((keg) => {
        return keg.pintsLeft == 0;
      });
    } else {
      return input;
    }
  }
}
