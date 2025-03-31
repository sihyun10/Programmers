import sys
input = sys.stdin.readline

class Node:
  def __init__(self, data, left=None, right=None):
    self.data = data
    self.left = left
    self.right = right

class BinaryTree:
  def __init__(self):
    self.nodes = {}

  def add_node(self, data, left, right):
    if data not in self.nodes:
      self.nodes[data] = Node(data)
    
    node = self.nodes[data]

    if left != ".":
      if left not in self.nodes:
        self.nodes[left] = Node(left)
      node.left = self.nodes[left]
    
    if right != ".":
      if right not in self.nodes:
        self.nodes[right] = Node(right)
      node.right = self.nodes[right]
  
  def pre_order(self, node, result = []):
    if node:
      result.append(node.data)
      self.pre_order(node.left)
      self.pre_order(node.right)
    return result

  def in_order(self, node, result = []):
    if node:
      self.in_order(node.left)
      result.append(node.data)
      self.in_order(node.right)
    return result
  
  def post_order(self, node, result = []):
    if node:
      self.post_order(node.left)
      self.post_order(node.right)
      result.append(node.data)
    return result

# N : 이진 트리의 노드의 개수
N = int(input().strip("\n"))
tree = BinaryTree()

for _ in range(N):
  data, left, right = map(str, input().strip("\n").split())
  tree.add_node(data, left, right)

root = tree.nodes["A"]

print("".join(tree.pre_order(root)))
print("".join(tree.in_order(root)))
print("".join(tree.post_order(root)))