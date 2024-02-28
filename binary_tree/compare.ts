import type { BinaryNode } from "./BinaryNode";

function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
  if (a === null && b === null) {
    return true;
  }

  if (a === null || b === null) {
    return false;
  }

  if (a.value !== b.value) {
    return false;
  }

  compare(a.left, b.left) && compare(a.right, b.right);
}