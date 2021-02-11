/**
 * Абстрактный Класс определяет шаблонный метод, содержащий скелет некоторого
 * алгоритма, состоящего из вызовов (обычно) абстрактных примитивных операций.
 *
 * Конкретные подклассы должны реализовать эти операции, но оставить сам
 * шаблонный метод без изменений.
 */
abstract class AbstractClass {
  /**
   * Шаблонный метод определяет скелет алгоритма.
   */
  public templateMethod(): void {
    this.baseOperation1()
    this.requiredOperations1()
    this.baseOperation2()
    this.hook1()
    this.requiredOperation2()
    this.baseOperation3()
    this.hook2()
  }

  /**
   * Эти операции уже имеют реализации.
   */
  protected baseOperation1(): void {
    console.log('AbstractClass says: I am doing the bulk of the work')
  }

  protected baseOperation2(): void {
    console.log(
      'AbstractClass says: But I let subclasses override some operations'
    )
  }

  protected baseOperation3(): void {
    console.log(
      'AbstractClass says: But I am doing the bulk of the work anyway'
    )
  }

  /**
   * А эти операции должны быть реализованы в подклассах.
   */
  protected abstract requiredOperations1(): void

  protected abstract requiredOperation2(): void

  /**
   * Это «хуки». Подклассы могут переопределять их, но это не обязательно,
   * поскольку у хуков уже есть стандартная (но пустая) реализация. Хуки
   * предоставляют дополнительные точки расширения в некоторых критических
   * местах алгоритма.
   */
  protected hook1(): void {}

  protected hook2(): void {}
}

/**
 * Конкретные классы должны реализовать все абстрактные операции базового
 * класса. Они также могут переопределить некоторые операции с реализацией по
 * умолчанию.
 */
class ConcreteClass1 extends AbstractClass {
  protected requiredOperations1(): void {
    console.log('ConcreteClass1 says: Implemented Operation1')
  }

  protected requiredOperation2(): void {
    console.log('ConcreteClass1 says: Implemented Operation2')
  }
}

/**
 * Обычно конкретные классы переопределяют только часть операций базового
 * класса.
 */
class ConcreteClass2 extends AbstractClass {
  protected requiredOperations1(): void {
    console.log('ConcreteClass2 says: Implemented Operation1')
  }

  protected requiredOperation2(): void {
    console.log('ConcreteClass2 says: Implemented Operation2')
  }

  protected hook1(): void {
    console.log('ConcreteClass2 says: Overridden Hook1')
  }
}

/**
 * Клиентский код вызывает шаблонный метод для выполнения алгоритма. Клиентский
 * код не должен знать конкретный класс объекта, с которым работает, при
 * условии, что он работает с объектами через интерфейс их базового класса.
 */
function clientCode(abstractClass: AbstractClass) {
  // ...
  abstractClass.templateMethod()
  // ...
}

console.log('Same client code can work with different subclasses:')
clientCode(new ConcreteClass1())
console.log('')

console.log('Same client code can work with different subclasses:')
clientCode(new ConcreteClass2())

/**
 * Output
 *
  Same client code can work with different subclasses:
  AbstractClass says: I am doing the bulk of the work
  ConcreteClass1 says: Implemented Operation1
  AbstractClass says: But I let subclasses override some operations
  ConcreteClass1 says: Implemented Operation2
  AbstractClass says: But I am doing the bulk of the work anyway

  Same client code can work with different subclasses:
  AbstractClass says: I am doing the bulk of the work
  ConcreteClass2 says: Implemented Operation1
  AbstractClass says: But I let subclasses override some operations
  ConcreteClass2 says: Overridden Hook1
  ConcreteClass2 says: Implemented Operation2
  AbstractClass says: But I am doing the bulk of the work anyway
 */
