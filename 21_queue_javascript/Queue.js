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

	// returns the last element without removing it
	peek() {
		let current = this.head;
		while (current.next) {
			current = current.next;
		}
		return current;
	}

	newNode(data) {
		return new Node(data);
	}
}

module.exports = Queue;
