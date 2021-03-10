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
}

const list = new LinkedList();
list.insertFirst(456);
list.insertFirst(343);
list.insertFirst(233);
console.log(list);
console.log(list.size());
