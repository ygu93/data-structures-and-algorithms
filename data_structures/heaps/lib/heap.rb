class BinaryMinHeap
  def initialize(&prc)
    @store = []
  end

  def count
    @store.length
  end

  def extract
    @store[0], @store[-1] = @store[-1], @store[0]
    el = @store.pop
    BinaryMinHeap.heapify_down(@store, 0)
    el
  end

  def peek
    @store[0]
  end

  def push(val)
    @store.push(val)
    index = self.count - 1
    BinaryMinHeap.heapify_up(@store, index)
  end

  protected
  attr_accessor :prc, :store

  public
  def self.child_indices(len, parent_index)
    indices = []
    potential_childs = [(2*parent_index)+1, (2*parent_index)+2]
    potential_childs.each {|index| indices.push(index) if index < len}
    indices
  end

  def self.parent_index(child_index)
    if child_index == 0
      raise "root has no parent"
    else
      (child_index-1)/2
    end
  end

  def self.heapify_down(array, parent_idx, len = array.length, &prc)
    if !prc
      prc = Proc.new {|a, b| a <=> b}
    end

    swapped = true
    while swapped
      swapped = false
      el = array[parent_idx]
      child_indices = BinaryMinHeap.child_indices(len, parent_idx)
      min = 0
      if child_indices.length > 1
        comparator = prc.call(array[child_indices[0]], array[child_indices[1]])
        if comparator > 0
          min = child_indices[1]
        else
          min = child_indices[0]
        end
      elsif child_indices.length == 1
        min = child_indices[0]
      else
        return array
      end

      if prc.call(array[parent_idx], array[min]) > 0
        array[parent_idx], array[min] = array[min], array[parent_idx]
        swapped = true
        parent_idx = min
      end
    end
    array
  end

  def self.heapify_up(array, child_idx, len = array.length, &prc)
    if !prc
      prc = Proc.new {|a, b| a <=> b}
    end

    swapped = true
    while swapped
      swapped = false
      el = array[child_idx]
      if child_idx > 0
        parent_idx = BinaryMinHeap.parent_index(child_idx)
      else
        return array
      end
      if prc.call(el, array[parent_idx]) < 0
        array[child_idx], array[parent_idx] = array[parent_idx], array[child_idx]
        child_idx = parent_idx
        swapped = true
      end
    end

    array
  end
end
