require_relative "heap"

class Array
  def heap_sort!
    prc = Proc.new {|a, b| -1* (a <=> b)}
    i = 1
    while i < self.length
      BinaryMinHeap.heapify_up(self, i, self.length, &prc)
      i+=1
    end

    j = self.length - 1

    while j > 0
      self[j], self[0] = self[0], self[j]
      BinaryMinHeap.heapify_down(self, 0, j, &prc)
      j -= 1
    end
  end
end
