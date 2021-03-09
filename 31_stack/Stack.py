from typing import Any


class Record():
    def __init__(self, value: Any = None):
        self.value = value
        self.next: Record = None
        self.previos: Record = None


class Stack():
    def __init__(self):
        self.head: Record = None
        self.tail: Record = None
        self.current: Record = None
        self.length: int = 0
    def push(self, v: Any) -> None:
        
        r = Record(v)

        if self.head is None:
            self.head = r
            self.tail = r

        self.tail.next = r
        self.tail = r

        self.length += 1

    def pop(self) -> Record:
        next_head = self.head.next
        popped = self.head.value
        self.head = next_head

        self.length -= 1

        return popped


    def __repr__(self) -> str:
        self.current = self.head
        buffer: str = ""
        while self.current is not None:
            buffer += str(self.current.value) + " "
            self.current = self.current.next

        return buffer


class Queue():
    def __init__(self):
        self.stack_1 = Stack()
        self.stack_2 = Stack()

    def push(self, value: Any) -> None:
        self.stack_1.push(value)

    def pop(self) -> None:
        while self.stack_1.length != 0:
            v = self.stack_1.pop()
            self.stack_2.push(v)
        
        popped = self.stack_2.pop()
        
        while self.stack_2.length != 0:
            v = self.stack_2.pop()
            self.stack_1.push(v)
        return popped

    def __repr__(self) -> str:
        return f"<{self.stack_1}>"



def main() -> None:
    q = Queue()

    q.push(1)
    q.push(2)
    q.push(3)
    q.push(1)
    q.push(2)
    q.push(3)

    print(q)

    q.pop()

    print(q)


if __name__ == "__main__":
    main()

