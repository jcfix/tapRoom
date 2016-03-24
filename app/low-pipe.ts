import { Pipe, PipeTransform } from 'angular2/core';
import { Keg } from './keg.model';

@Pipe({
  name: 'low',
  pure: false
})

export class LowPipe implements PipeTransform {
  transform(input: Keg[], args) {
    var desiredPintState = args[0];
    if (desiredPintState === "low") {
      return input.filter((keg) => {
        return keg.pintsLeft < 10 && keg.pintsLeft > 0;
      });
    } else {
      return input;
    }
  }
}
