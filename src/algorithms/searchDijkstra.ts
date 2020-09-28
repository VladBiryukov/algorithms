const infinity = 1E8

const graph: { [key: string]: { [k: string]: number } | {} } = {
  start: {a: 6, b: 2},
  a: {fin: 1},
  b: {a: 3, fin: 5},
  fin: {},
}
const costs: { [key: string]: number } = {
  a: 6,
  b: 2,
  fin: infinity
}
const parents: { [key: string]: string } = {
  a: "start",
  b: "start",
  fin: null
}
const processes: Map<string, boolean> = new Map()

export function findLowestCostNode(costsParam: { [key: string]: number }): null | string {
  let lowestCost: number = infinity
  let lowestCostNode: string | null = null
  Object.keys(costsParam).forEach(key => {
    const node = key
    const nodeIsProcessed = processes.has(node)
    const cost = costsParam[node]
    if ((cost < lowestCost) && (!nodeIsProcessed)) {
      lowestCost = cost
      lowestCostNode = node
    }
  })
  return lowestCostNode
}

export function searchDijkstra() {
  // b
  let node = findLowestCostNode(costs)
  while (node) {
    const cost = costs[node]
    const neighbors = graph[node]
    Object.keys(neighbors).forEach(neighbor => {
      const newCost: number = cost + neighbors[neighbor]
      if(costs[neighbor] > newCost) {
        costs[neighbor] = newCost
        parents[neighbor] = node
      }
    })
    processes.set(node, true)
    node = findLowestCostNode(costs)
  }
}