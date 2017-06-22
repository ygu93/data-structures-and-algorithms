/*
  Node is defined as
  var Node = function(data) {
      this.data = data;
      this.next = null;
  }
*/
// or for doubly linked
/*
  Node is defined as
  var Node = function(data) {
      this.data = data;
      this.next = null;
      this.prev = null;
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

// remove duplicates
function removeDuplicates(head) {
    var current = head;
    while(current){
        if(current.next && current.next.data === current.data){
            current.next = current.next.next;
        }else{
            current = current.next;
        }
    }
    return head;
}

// has cycle
function hasCycle(head) {
   var slow = head;
   var fast = head;

   while(fast){
       if(fast.next){
        fast = fast.next.next;
       }else{
           return false;
       }

       if(fast === slow){
           return true;
       }
       slow = slow.next;
   }
   return false;

}

// find merge node
function findMergeNode(headA, headB) {
    var currentA = headA;
    var currentB = headB;

    while(currentA !== currentB){
        if(currentA.next === null){
            currentA = headB;
        }else{
            currentA = currentA.next;
        }

        if(currentB.next === null){
            currentB = headA;
        }else{
            currentB = currentB.next;
        }
    }

    return currentA.data;
}


// reverse doubly linked listed
function reverse(head) {

    var prev = null;

    while(head){
        var next = head.next;
        head.next = head.prev;
        head.prev = next;
        prev = head;
        head = next;

    }
    return prev;
}


// insert into doubly linked list
function sortedInsert(head, data) {
    if(!head){
        return new Node(data);
    }else if(head.data > data){
        var newNode = new Node(data);
        newNode.next = head;
        head.prev = newNode;
        return newNode;
    }

    var current = head;
    while(current.next !== null){
        if(current.data > data){
            break;
        }
        current = current.next;
    }

    if(current.next === null && current.data < data){
        var newNode = new Node(data);
        current.next = newNode;
        newNode.prev = current;
        return head;
    }else{
        var prev = current.prev;
        var newNode = new Node(data);
        current.prev = newNode;
        prev.next = newNode;
        newNode.next = current;
        newNode.prev = prev
        return head;
    }



}

// merge two sorted linked lists
function mergeLinkedLists( headA, headB) {
    if(!headA && !headB){
        return null;
    }

    if(!headA){
        return headB;
    }

    if(!headB){
        return headA;
    }

    if(headA.data < headB.data){
        headA.next = mergeLinkedLists(headA.next, headB);
        return headA;
    }else{
        headB.next = mergeLinkedLists(headA, headB.next);
        return headB;
    }
}
