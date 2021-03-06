export enum VariantPerson {
  common = 'common',
  superMan = 'superMan',
}

class Person {
  readonly id: number;
  readonly name: string;
  readonly variant: VariantPerson;
  readonly friends: Person[];

  constructor(id?: number, name?: string, friends?: Person[], variant?: VariantPerson) {
    this.id = id ?? 0
    this.name = name || '';
    this.friends = friends || []
    this.variant = variant || VariantPerson.common
  }

  private hasVariant(variant: VariantPerson): boolean {
    return this.variant === variant;
  }

  get superPerson(): boolean {
    return this.hasVariant(VariantPerson.superMan);
  }

  get commonPerson(): boolean {
    return this.hasVariant(VariantPerson.common)
  }
}

export const arrayPerson: Person[] = [
  new Person(1, 'Маша'),
  new Person(2, 'Дима', [
    new Person(3, 'Юля'), new Person(4, 'Игорь')
  ]),
  new Person(5, 'Ваня', [
    new Person(3, 'Юля'), new Person(4, 'Игорь'),
    new Person(6, 'Настя', [
      new Person(7, 'Плотва', [
        new Person(8, 'Вика', [
          new Person(9, 'Костя', [
            new Person(777, 'Сын маминой подруги', [], VariantPerson.superMan)
          ])
        ])
      ]),

    ])
  ])
]


export function searchQueueSuperPerson(
  listPerson: Person[],
  listIdsViewedPersons: number[] = []
): Person | null {
  if (!listPerson.length) {
    return null
  }
  const copyListIdsViewedPersons = [...listIdsViewedPersons];
  const copyListPerson: Person[] = [...listPerson];
  const firstPerson = copyListPerson[0];

  const isPersonViewed: boolean = listIdsViewedPersons.includes(firstPerson.id);

  if (isPersonViewed) {
    copyListPerson.shift();
    return searchQueueSuperPerson(copyListPerson, copyListIdsViewedPersons);
  }

  if (firstPerson.superPerson) {
    return firstPerson;
  } else {
    if (firstPerson.friends.length) {
      copyListPerson.push(...firstPerson.friends);
    }
    copyListIdsViewedPersons.push(firstPerson.id);
    copyListPerson.shift();
    return searchQueueSuperPerson(copyListPerson, copyListIdsViewedPersons);
  }
}