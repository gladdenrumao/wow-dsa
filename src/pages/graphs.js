import React from "react";
import CodeBlock from "../components/CodeBlock";
import LearningSection from "../components/LearningSection";

const Graphs = () => {
  return (
    <div className="learning-container">
      <h1 className="page-title">Graphs</h1>

      <LearningSection title="1️⃣ Introduction to Graphs">
        <ul>
          <li>🔹 A Graph is a non-linear data structure consisting of <strong>vertices (nodes)</strong> and <strong>edges</strong>.</li>
          <li>🔹 Used to represent networks like social networks, maps, web pages, etc.</li>
          <li>🔹 Can be <strong>directed</strong> (edges have direction) or <strong>undirected</strong> (edges are bidirectional).</li>
          <li>🔹 Can be <strong>weighted</strong> (edges have values) or <strong>unweighted</strong>.</li>
        </ul>
        <p><strong>Key Terminology:</strong></p>
        <ul>
          <li>🔸 <strong>Vertex/Node</strong>: A point in the graph.</li>
          <li>🔸 <strong>Edge</strong>: Connection between two vertices.</li>
          <li>🔸 <strong>Path</strong>: Sequence of vertices connected by edges.</li>
          <li>🔸 <strong>Cycle</strong>: Path that starts and ends at the same vertex.</li>
          <li>🔸 <strong>Degree</strong>: Number of edges connected to a vertex.</li>
          <li>🔸 <strong>Connected Graph</strong>: There's a path between every pair of vertices.</li>
        </ul>
      </LearningSection>

      <LearningSection title="2️⃣ Graph Representations">
        <h3>Adjacency Matrix</h3>
        <p>🧠 2D array where <code>matrix[i][j] = 1</code> if there's an edge from vertex i to j.</p>
        <CodeBlock
          code={`# Adjacency Matrix for undirected graph
# Vertices: 0, 1, 2, 3
graph = [
    [0, 1, 1, 0],  # Vertex 0 connected to 1, 2
    [1, 0, 0, 1],  # Vertex 1 connected to 0, 3
    [1, 0, 0, 1],  # Vertex 2 connected to 0, 3
    [0, 1, 1, 0]   # Vertex 3 connected to 1, 2
]

# Check if edge exists between vertex 0 and 1
print(graph[0][1])  # Output: 1 (edge exists)`}
        />
        <p>✅ Space Complexity: O(V²) where V is number of vertices.</p>
        <p>✅ Good for dense graphs.</p>

        <h3>Adjacency List</h3>
        <p>🧠 Array of lists where each index stores the list of adjacent vertices.</p>
        <CodeBlock
          code={`# Adjacency List for undirected graph
graph = {
    0: [1, 2],      # Vertex 0 connected to 1, 2
    1: [0, 3],      # Vertex 1 connected to 0, 3
    2: [0, 3],      # Vertex 2 connected to 0, 3
    3: [1, 2]       # Vertex 3 connected to 1, 2
}

# Get neighbors of vertex 0
print(graph[0])  # Output: [1, 2]`}
        />
        <p>✅ Space Complexity: O(V + E) where V is vertices and E is edges.</p>
        <p>✅ Good for sparse graphs (most real-world graphs).</p>
      </LearningSection>

      <LearningSection title="3️⃣ Graph Traversals">
        <h3>Depth First Search (DFS)</h3>
        <p>🧠 Explores as far as possible along each branch before backtracking.</p>
        <p>🔸 Uses a <strong>stack</strong> (or recursion).</p>
        <CodeBlock
          code={`def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    
    visited.add(start)
    print(start, end=' ')
    
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)
    
    return visited

# Example graph
graph = {
    0: [1, 2],
    1: [0, 3, 4],
    2: [0],
    3: [1],
    4: [1]
}

dfs(graph, 0)  # Output: 0 1 3 4 2`}
        />
        <p>✅ Time Complexity: O(V + E)</p>
        <p>✅ Space Complexity: O(V) for visited set and recursion stack</p>

        <h3>Breadth First Search (BFS)</h3>
        <p>🧠 Explores all neighbors at the current depth before moving to the next level.</p>
        <p>🔸 Uses a <strong>queue</strong>.</p>
        <CodeBlock
          code={`from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)
    
    while queue:
        vertex = queue.popleft()
        print(vertex, end=' ')
        
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
    
    return visited

# Example graph
graph = {
    0: [1, 2],
    1: [0, 3, 4],
    2: [0],
    3: [1],
    4: [1]
}

bfs(graph, 0)  # Output: 0 1 2 3 4`}
        />
        <p>✅ Time Complexity: O(V + E)</p>
        <p>✅ Space Complexity: O(V) for queue and visited set</p>
      </LearningSection>

      <LearningSection title="4️⃣ Cycle Detection">
        <h3>Cycle Detection in Undirected Graph (DFS)</h3>
        <CodeBlock
          code={`def has_cycle_undirected(graph, vertex, visited, parent):
    visited.add(vertex)
    
    for neighbor in graph[vertex]:
        if neighbor not in visited:
            if has_cycle_undirected(graph, neighbor, visited, vertex):
                return True
        elif neighbor != parent:
            return True  # Cycle detected
    
    return False

def detect_cycle(graph):
    visited = set()
    
    for vertex in graph:
        if vertex not in visited:
            if has_cycle_undirected(graph, vertex, visited, -1):
                return True
    
    return False

# Example: Graph with cycle
graph = {
    0: [1, 2],
    1: [0, 2],
    2: [0, 1]
}

print(detect_cycle(graph))  # Output: True`}
        />

        <h3>Cycle Detection in Directed Graph (DFS)</h3>
        <CodeBlock
          code={`def has_cycle_directed(graph, vertex, visited, rec_stack):
    visited.add(vertex)
    rec_stack.add(vertex)
    
    for neighbor in graph[vertex]:
        if neighbor not in visited:
            if has_cycle_directed(graph, neighbor, visited, rec_stack):
                return True
        elif neighbor in rec_stack:
            return True  # Back edge found (cycle)
    
    rec_stack.remove(vertex)
    return False

def detect_cycle_directed(graph):
    visited = set()
    rec_stack = set()
    
    for vertex in graph:
        if vertex not in visited:
            if has_cycle_directed(graph, vertex, visited, rec_stack):
                return True
    
    return False

# Example: Directed graph with cycle
graph = {
    0: [1],
    1: [2],
    2: [0]
}

print(detect_cycle_directed(graph))  # Output: True`}
        />
      </LearningSection>

      <LearningSection title="5️⃣ Topological Sort">
        <p>🧠 Linear ordering of vertices in a Directed Acyclic Graph (DAG) such that for every directed edge (u, v), u comes before v.</p>
        <p>🔸 Only possible for <strong>DAG (Directed Acyclic Graph)</strong>.</p>
        <CodeBlock
          code={`def topological_sort_util(graph, vertex, visited, stack):
    visited.add(vertex)
    
    for neighbor in graph[vertex]:
        if neighbor not in visited:
            topological_sort_util(graph, neighbor, visited, stack)
    
    stack.append(vertex)

def topological_sort(graph):
    visited = set()
    stack = []
    
    for vertex in graph:
        if vertex not in visited:
            topological_sort_util(graph, vertex, visited, stack)
    
    return stack[::-1]  # Reverse to get correct order

# Example: DAG (course prerequisites)
graph = {
    0: [1, 2],
    1: [3],
    2: [3],
    3: []
}

print(topological_sort(graph))  # Output: [0, 2, 1, 3] or [0, 1, 2, 3]`}
        />
        <p>✅ Time Complexity: O(V + E)</p>
        <p>✅ Applications: Task scheduling, course prerequisites</p>
      </LearningSection>

      <LearningSection title="6️⃣ Shortest Path Algorithms">
        <h3>Dijkstra's Algorithm (Weighted Graph)</h3>
        <p>🧠 Finds shortest path from source to all vertices in a weighted graph with non-negative weights.</p>
        <CodeBlock
          code={`import heapq

def dijkstra(graph, start):
    # Initialize distances
    distances = {vertex: float('infinity') for vertex in graph}
    distances[start] = 0
    
    # Priority queue: (distance, vertex)
    pq = [(0, start)]
    
    while pq:
        current_dist, current_vertex = heapq.heappop(pq)
        
        # Skip if we've found a better path already
        if current_dist > distances[current_vertex]:
            continue
        
        # Check neighbors
        for neighbor, weight in graph[current_vertex]:
            distance = current_dist + weight
            
            # If shorter path found
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(pq, (distance, neighbor))
    
    return distances

# Example: Weighted graph (adjacency list with weights)
graph = {
    0: [(1, 4), (2, 1)],
    1: [(3, 1)],
    2: [(1, 2), (3, 5)],
    3: []
}

print(dijkstra(graph, 0))  # Output: {0: 0, 1: 3, 2: 1, 3: 4}`}
        />
        <p>✅ Time Complexity: O((V + E) log V) with min-heap</p>
      </LearningSection>

      <LearningSection title="7️⃣ Connected Components">
        <p>🧠 Find all connected components in an undirected graph.</p>
        <CodeBlock
          code={`def dfs_component(graph, vertex, visited, component):
    visited.add(vertex)
    component.append(vertex)
    
    for neighbor in graph[vertex]:
        if neighbor not in visited:
            dfs_component(graph, neighbor, visited, component)

def find_connected_components(graph):
    visited = set()
    components = []
    
    for vertex in graph:
        if vertex not in visited:
            component = []
            dfs_component(graph, vertex, visited, component)
            components.append(component)
    
    return components

# Example: Graph with 2 components
graph = {
    0: [1, 2],
    1: [0],
    2: [0],
    3: [4],
    4: [3]
}

print(find_connected_components(graph))  
# Output: [[0, 1, 2], [3, 4]]`}
        />
      </LearningSection>

      <LearningSection title="8️⃣ Summary">
        <ul>
          <li>✅ Graphs represent relationships between entities.</li>
          <li>✅ DFS uses stack (recursion), BFS uses queue.</li>
          <li>✅ DFS is good for detecting cycles and topological sorting.</li>
          <li>✅ BFS is good for shortest path in unweighted graphs.</li>
          <li>✅ Dijkstra's algorithm finds shortest path in weighted graphs.</li>
          <li>✅ Understanding graph traversals is crucial for many algorithms.</li>
        </ul>
      </LearningSection>

      <LearningSection title="9️⃣ Practice Problems">
        <ul>
          <li>🔸 Number of Islands (Connected Components)</li>
          <li>🔸 Course Schedule (Cycle Detection + Topological Sort)</li>
          <li>🔸 Clone Graph</li>
          <li>🔸 Network Delay Time (Dijkstra's Algorithm)</li>
          <li>🔸 Word Ladder (BFS)</li>
          <li>🔸 Rotting Oranges (Multi-source BFS)</li>
        </ul>
      </LearningSection>
    </div>
  );
};

export default Graphs;
