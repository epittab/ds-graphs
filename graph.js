
class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
        return this;
    }

    addEdge(v1, v2) {
        //no error handling
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
        return this;
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter( element => element !== v2 )
        this.adjacencyList[v2] = this.adjacencyList[v2].filter( element => element !== v1 )
        return this;
    }

    removeVertex(vertex) {
        this.adjacencyList[vertex].forEach((currentVertex) => { this.removeEdge(vertex, currentVertex); });
        return delete this.adjacencyList[vertex]
    }

}