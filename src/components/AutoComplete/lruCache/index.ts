import { Node } from './Node';
export class LRUCache<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  size: number;
  maxSize: number;
  cache: {
    [key: string]: Node<T>;
  } | null;
  constructor(maxSize: number) {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.maxSize = maxSize;
    this.cache = null;
  }
  set(key: string, value: T) {
    if (!key) {
      console.error('key가 존재하지 않습니다.');
      return;
    }
    if (!this.cache) return;

    let newNode: Node<T>;

    if (this.cache[key]) {
      newNode = this.get(key) as Node<T>;
      newNode.value = value;
      this.size -= 1;
    } else {
      newNode = new Node(key, value);
    }

    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.size += 1;
      this.cache[key] = newNode;
      return;
    }
    if (this.size === this.maxSize) {
      delete this.cache[this.tail!.key];
      this.tail = this.tail!.prev;
      this.tail!.next = null;
      this.size -= 1;
    }
    this.head!.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.size++;

    //add to cache
    this.cache[key] = newNode;
    return;
  }
  get(key: string): Node<T> | null {
    if (!this.cache?.[key]) {
      return null;
    }

    const foundNode = this.cache[key];
    if (foundNode === this.head) return foundNode;

    const previous = foundNode.prev;
    const next = foundNode.next;

    if (foundNode === this.tail) {
      previous!.next = null;
      this.tail = previous;
    } else {
      previous!.next = next;
      next!.prev = previous;
    }

    this.head!.prev = foundNode;
    foundNode.next = this.head;
    foundNode.prev = null;
    this.head = foundNode;

    return foundNode;
  }
}
