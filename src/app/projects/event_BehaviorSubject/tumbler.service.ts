import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

/** Передача события через RxJs/BehaviorSubject
 * @Info https://stackoverflow.com/questions/39494058/behaviorsubject-vs-observable
 * Уникальные особенности BehaviorSubject:
 * - Ему нужно начальное значение, так как он всегда должен возвращать значение в подписке, даже если он не получил next()
 *    Тоесть значение по умолчанию.
 * - При подписке возвращает последнее значение темы. Обычная наблюдаемая срабатывает только тогда, когда она получает onnext
 *    Новый подписчик получить последнее, что было разослано.
 * - в любой момент вы можете получить последнее значение субъекта в ненаблюдаемом коде, используя метод getValue().
 */
@Injectable()
export class TumblerService  {

  // isDarkTheme$ = new BehaviorSubject<boolean>( false ); // обьявим серис для обмена изменениями
  isDarkTheme$ = new BehaviorSubject<boolean>( JSON.parse(localStorage.getItem('Theme'))); // обьявим серис для обмена изменениями

  constructor() {}

  toggleTheme(): void {
    const toggledTheme = !this.isDarkTheme$.getValue(); // Получаем последние установленное значение и Измение на противоположное
    localStorage.setItem('Theme', JSON.stringify(toggledTheme)); // Сохраним ето изменение в локальном хранилище
    this.isDarkTheme$.next(toggledTheme); // Сообщим всем слушателям об изменениях
  }

}
