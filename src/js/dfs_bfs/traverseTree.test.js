/**
Note: Try to solve this task without using recursion, since this is what you'll
be asked to do during an interview.

Given a binary tree of integers t, return its node values in the following format:

The first element should be the value of the tree root;
The next elements should be the values of the nodes at height 1 (i.e. the root
children), ordered from the leftmost to the rightmost one;
The elements after that should be the values of the nodes at height 2 (i.e. the
children of the nodes at height 1) ordered in the same way;
Etc.
Example

the output should be
traverseTree(t) = [1, 2, 4, 3, 5].

This t looks like this:

     1
   /   \
  2     4
   \   /
    3 5
Input/Output

[time limit] 4000ms (js)
[input] tree.integer t

Guaranteed constraints:
0 ≤ tree size ≤ 104.

[output] array.integer

An array that contains the values at t's nodes, ordered as described above.
*/

const { TreeNode, traverseTree } = require('./traverseTree');

describe('traverseTree()', () => {
  it('should return node values in bfs order', () => {
    const t = new TreeNode(1);
    t.left = new TreeNode(2);
    t.right = new TreeNode(4);
    t.left.right = new TreeNode(3);
    t.right.left = new TreeNode(5);

    const expected = [1, 2, 4, 3, 5];
    const result = traverseTree(t);
    expect(result).toEqual(expected);
  });

  it('should return node values in bfs order', () => {
    const t = null;

    const expected = [];
    const result = traverseTree(t);
    expect(result).toEqual(expected);
  });

  it('should return node values in bfs order', () => {
    const t = new TreeNode(1);

    const expected = [1];
    const result = traverseTree(t);
    expect(result).toEqual(expected);
  });
});
