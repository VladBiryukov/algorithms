export enum VariantPerson {
  common = 'common',
  super = 'super',
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
    return this.hasVariant(VariantPerson.super);
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
    new Person(6, 'Настя', [
      new Person(7, 'Плотва', [
         new Person(8, '', [
            new Person(9, '' ,[
              new Person(777, 'Сын маминой подруги', [], VariantPerson.super)
            ])
         ])
      ]),

    ])
  ])
]


export function searchQueueSuperPerson(listPerson: Person[]): Person {
  const copyListPerson: Person[] = [...listPerson];
  const firstPerson = copyListPerson[0];
  if (firstPerson.superPerson) {
    return firstPerson;
  } else {
    if (firstPerson.friends.length) {
      copyListPerson.push(...firstPerson.friends);
    }
    copyListPerson.shift();
    return searchQueueSuperPerson(copyListPerson);
  }
}