import sys
input = sys.stdin.readline

class Node:
  def __init__(self, data):
    self.data = data
    self.next = None

class LinkedListQueue:
  def __init__(self):
    self.front = None
    self.rear = None
    self.num = 0
  
  def isEmpty(self):
    return self.front is None
  
  # 값 넣기 (enqueue)
  def enqueue(self, data):
    new_node = Node(data)
    if self.isEmpty():
      self.front = new_node
      self.rear = new_node
    else:
      self.rear.next = new_node
      self.rear = new_node
    self.num += 1
  
  # 값 빼기 (dequeue)
  def dequeue(self):
    data = None
    if self.isEmpty():
      return -1
    else:
      data = self.front.data
      self.front = self.front.next
    self.num -= 1

    # 큐가 비었다는 의미가 되므로 rear도 None으로 설정
    if self.front is None:
      self.rear = None

    return data
  
  # 가장 앞에 있는 정수 반환
  def get_front(self):
    if self.isEmpty():
      return -1
    return self.front.data
  
  # 가장 뒤에 있는 정수 반환
  def get_back(self):
    if self.isEmpty():
      return -1
    return self.rear.data
  
  def size(self):
    return self.num

if __name__ == "__main__":
  linked_list_queue = LinkedListQueue()
  N = int(input().strip())
  results = []

  for _ in range(N):
    command = input().strip().split()

    if command[0] == "push":
      linked_list_queue.enqueue(int(command[1]))
    elif command[0] == "pop":
      results.append(linked_list_queue.dequeue())
    elif command[0] == "size":
      results.append(linked_list_queue.size())
    elif command[0] == "empty":
      results.append("1" if linked_list_queue.isEmpty() else "0")
    elif command[0] == "front":
      results.append(linked_list_queue.get_front())
    elif command[0] == "back":
      results.append(linked_list_queue.get_back())

  for _ in results:
    print(_)