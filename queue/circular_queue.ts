class CircularQueue<T> {
  public queue: (number | null)[];
  private read: number;
  private write: number;
  private max: number;
  
  constructor(size) {
    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    // q is full
    if (this.queue[this.write] !== null) {
      return null;
    }

    // write and advance the pointer
    this.queue[this.write] = item;
    this.write = (this.write + 1) % (this.max + 1);

    return item;
  }

  dequeue() {
    // q is empty
    if (this.read === this.write && this.queue[this.read] === null) {
      return null;
    }

    // read and advance the pointer
    let item = this.queue[this.read];
    this.queue[this.read] = null;
    this.read = (this.read + 1) % (this.max + 1);

    return item;
  }
}
