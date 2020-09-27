export class Node {
  start: string;
  end: string;
  cost: number;

  constructor(start: string, end: string, cost: number) {
    this.start = start
    this.end = end
    this.cost = cost
  }
}


export class Graph {
  nodes: Node[];

  constructor(nodes: Node[]) {
    this.nodes = nodes
  }

  getNodeByKey(key: string): Node | null {
    return this.nodes.find(node => node.start === key) || null;
  }

  getNeighborsByKey(key: string): Node[] {
    return this.nodes.reduce((acc, current) => {
      if (current.start === key) {
        const neighbor = this.getNodeByKey(current.end);
        if (neighbor){
          acc.push(neighbor);
        }
      }
      return acc;
    }, [] as Node[])
  }
}

const nodeSA = new Node('s', 'a', 6);
const nodeSB = new Node('s', 'b', 2);
const nodeAF = new Node('a', 'f', 1);
const nodeBF = new Node('b', 'f', 5);
const nodeBA = new Node('b', 'a', 3);

export const someGraph = new Graph([
  nodeSA,
  nodeSB,
  nodeBF,
  nodeBA,
  nodeAF,
]);


export function searchDijkstra(
   graph: Graph,
   // keyStart: string,
   // keyEnd: string
) {
  console.log(graph.getNeighborsByKey('s'));
}