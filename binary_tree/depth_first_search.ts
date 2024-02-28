import type { BinaryNode } from "./BinaryNode";

function search(curr: BinaryNode<number> | null, needle:  number): boolean {
  if (!curr) {
    return false;
  }

  if (curr.value === needle) {
    return true;
  }

  if (needle > curr.value) {
    return search(curr.right, needle);
  } 
  
  return search(curr.left, needle);
}

function depth_first_search(head: BinaryNode<number>, needle: number): boolean {
  return search(head, needle);
}