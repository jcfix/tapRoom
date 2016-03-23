import { Pipe, PipeTransform } from 'angular2/core';
import { Keg } from './keg.model';

@Pipe({
  name: 'low',
  pure: false
})

export class LowPipe implements PipeTransform {
  transform(input: Keg[], args) {
    console.log('selected keg: ', args[1]);
    var desiredPintState = args[0];
    if (desiredPintState === "low") {
      return input.filter((Keg) => {
        return keg.pintsLeft;
      });
    } else if (desiredPintState === "empty") {
      return input.filter((Keg) => {
        return "we need beer";
      });
    } else {
      return input;
    }
  }
}
