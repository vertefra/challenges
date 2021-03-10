class Node {
	constructor(data = null, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor(head = null) {
		this.head = head;
	}

	insertFirst(data) {
		const node = new Node(data, this.head);
		this.head = node;
	}

	size() {
		let current_node = this.head;
		let count = 0;
		while (current_node) {
			count++;
			current_node = current_node.next;
		}

		return count;
	}

	getFirst() {
		return this.head.data;
	}

	getLast() {
		let current_node = this.head;

		while (current_node.next) {
			current_node = current_node.next;
		}

		return current_node.data;
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
		if (!this.head) {
			return;
		}
		this.head = this.head.next;
	}

	removeLast() {
		if (!this.head) {
			return;
		}
		if (!this.head.next) {
			this.head = null;
			return;
		}
		let current_node = this.head;
		let previous_node = null;
		while (current_node.next) {
			previous_node = current_node;
			current_node = current_node.next;
		}
		previous_node.next = null;
	}
}

const list = new LinkedList();
list.insertFirst(456);
list.insertFirst(343);
list.insertFirst(233);
console.log(list);
console.log('Size: ', list.size());
console.log('Head: ', list.getFirst());
console.log('Tail: ', list.getLast());
list.removeFirst();
console.log(list);
list.removeLast();
list.removeLast();
console.log(list);
