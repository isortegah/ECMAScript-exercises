import { sumTwo  , sumThree } from './addition'
import * as addition from './addition'
import { users } from './user'
import * as _ from 'lodash'

console.log(users)
console.log(_.find( users , {age : 36}))

console.log(
    "2 + 3 = ",
  sumTwo(2,3)
)

console.log(
  "2 + 3 + 4 = ",  sumThree( 2 , 3 , 4)
)
console.log();

console.log(
    "2 + 3 = ",
  addition.sumTwo(2,3)
)

console.log(
  "2 + 3 + 4 = ",  addition.sumThree( 2 , 3 , 4)
)