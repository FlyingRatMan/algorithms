type LNode<T> = {
  value: T,
  next?: LNode<T>,
  prev?: LNode<T>,
}

function createNode<V>(value: V): LNode<V> {
  return {value};
}

class LRU<K, V> {
  private length: number;
  private head?: LNode<V>;
  private tail?: LNode<V>;

  private lookup: Map<K, LNode<V>>;
  private reverseLookup: Map<LNode<V>, K>;

  constructor(private capacity: number) {
    this.length = 0;
    this.head = this.tail = undefined;
    this.lookup = new Map<K, LNode<V>>();
    this.reverseLookup = new Map<LNode<V>, K>();
  }

  update(key: K, value: V): void {
    // check if it exists
    // if doesn't - insert
    // check capacity and delete if full
    // if does - update and push to the begining

    let node = this.lookup.get(key);
    if (!node) {
      node = createNode(value);
      this.length++;
      this.prepend(node);
      this.trim();

      this.lookup.set(key, node);
      this.reverseLookup.set(node, key);
    } else {
      this.detach(node);
      this.prepend(node);
      node.value = value;
    }
  }

  get(key: K): V | undefined {
    // check if it exists
    const node = this.lookup.get(key);
    if (!node) {
      return undefined;
    }

    // move it to the front
    this.detach(node);
    this.prepend(node);

    // return if found
    return node.value;
  }

  private detach(node: LNode<V>): void {
    if (node.prev) {
      node.prev.next = node.next;
    }
    if (node.next) {
      node.next.prev = node.prev;
    }

    if (this.head === node) {
      this.head = this.head.next;
    }
    if (this.tail === node) {
      this.tail = this.tail.prev;
    }

    node.next = undefined;
    node.prev = undefined;
  }

  private prepend(node: LNode<V>): void {
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  private trim(): void {
    if (this.length <= this.capacity) {
      return;
    }

    const tail = this.tail as LNode<V>;
    this.detach(this.tail as LNode<V>);
    
    const key = this.reverseLookup.get(tail) as K;
    this.lookup.delete(key);
    this.reverseLookup.delete(tail);
    this.length--;
  }
}