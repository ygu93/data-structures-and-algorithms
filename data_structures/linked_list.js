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
