// QUEUE FIFO

// enqueue -> dequeue

// first record to go in is the first to go out

class Node {
	constructor(data) {
		this.next = undefined;
		this.data = data;
	}
}

class Queue {
	constructor(head) {
		this.head = head;
	}

	print() {
		let current = this.head;

		while (current.next) {
			current = current.next;
			console.log(current.data);
		}
	}

	add(node) {
		const swapVar = this.head;
		this.head = node;
		this.head.next = swapVar;
	}

	remove() {
		let current = this.head;
		while (current.next.next) {
			current = current.next;
		}
		current.next = undefined;
	}
}

const head = new Node(1);
const q = new Queue(head);

for (let i = 1; i < 100; i++) {
	const n = new Node(i);
	q.add(n);
}

q.print();

q.add(node2);
q.remove();
console.log(q);
