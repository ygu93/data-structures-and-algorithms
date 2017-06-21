/*
  Node is defined as
  var Node = function(data) {
      this.data = data;
      this.next = null;
  }
*/

// simple print elements of a linked list
function print(head) {
    while(head){
        console.log(head.data);
        head = head.next;
    }
}

// insert element to tail
function insert(head, data) {
    if(head === null){
        return new Node(data)
    }else{
      var current = head;
      while(current){
          if(current.next === null){
              break;
          }else{
              current = current.next;
          }
      }
      current.next = new Node(data);
      return head;
    }
}

// insert element to head
function insertHead(head, data) {
    var newHead = new Node(data);
    newHead.next = head;
    return newHead;
}


// insert element at position
function insertPos(head, data, position) {
    if(position === 0){
        var newNode = new Node(data);
        newNode.next = head;
        return newNode
    }else{
        var times = 0;
        var prev = null;
        var current = head;
        while(times!== position){
            prev = current;
            current = current.next;
            times++;
        }

        var newNode = new Node(data);
        prev.next = newNode;
        newNode.next = current;
        return head;
    }

}

// delete node
function deleteNode(head, position) {
    if(position === 0){
       return head.next;
    }else{
        var times = 0
        var prev = null;
        var current = head;
        while(times !== position){
            prev = current;
            current = current.next;
            times++;
        }

        prev.next = current.next;
        return head;
    }
}

// reverse linked list
function reverseLinkedList(head) {
    var prev = null;
    while(head){
        var next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}

// compare linked list
function compareLinkedLists( headA, headB) {
    while(headA && headB){
        if(headA.data !== headB.data){
            return 0;
        }
        headA = headA.next;
        headB = headB.next;
    }

    if(headA !== headB){
        return 0
    }else{
        return 1;
    }
}

// get node value
function getNodeValue( head, position) {
    var fast = head;
    var slow = head;
    var i = 0;
    while(i<position){
        fast = fast.next;
        i++;
    }

    while(fast){
        if(fast.next === null){
            break;
        }
        fast = fast.next;
        slow = slow.next;
    }

    return slow.data
}
