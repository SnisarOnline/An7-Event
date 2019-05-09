/** Фейковый бек */
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {User} from './model/user.model';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const apiTokenAuth = [
      {
        id: 0,
        title: '1 learning Angular CLI',
        completed : false,
        body: ' Angular CLI very cool '
      }
    ];

    // const apiTokenObject = {
    //   id: 0,
    //   title: '1 learning Angular CLI',
    //   completed : false,
    //   body: ' Angular CLI very cool '
    // };

    // const nobodies: any[] = [ ];

    // const stringers: any[string] = ['1111', '2222', '3333', '4444', ];

    // const db = { apiTokenAuth, nobodies, stringers };

    return {apiTokenAuth};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  // genId(heroes: ObjectTypes[]): number {
  //   return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  // }
}
