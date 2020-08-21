
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

    dfsRecur(start) {

        if (!this.adjacencyList[start]) return null;
        //create a list to store the end result, to be returrned at the very end
        let resultsArray = [];
        //creat an object to store visited vertices
        let visited = {};
        // create a helper function which accepts a vertex
        let al = this.adjacencyList;

        function dfs(vertex) {
            // if (!vertex) return null; //
            visited[vertex] = true;
            //results array push
            resultsArray.push(vertex)
        
            for (let el of al[vertex]) {
                if (!visited[el]) {
                    ///push into 
                    dfs(el)
                }
            }
            
        }
        dfs(start)
        console.log(Object.keys(visited))
        return resultsArray;
        
    }

    dfsIter(start) {
        let stack = [];
        let visited = {};
        let resultsArray = [];

        if (!this.adjacencyList[start]) return null;

        stack.push(start)

        while (stack.length > 0) {

           let v = stack.pop()

           if (!visited[v]) {
            visited[v] = true;
            resultsArray.push(v)

            this.adjacencyList[v].forEach((neigh) => {
                stack.push(neigh)
            })

           }

        }
        return resultsArray;
    }


    //function declaration
        //
    // if vertex is empty
        //return (base case)
        // add vertex to results list
        //mark vertex as visited => { vertex: true, vertex2: true, vertex3: true}
        // for each neighbor in vertex's neighbors
            // if neighbor is not visited: 
                //recursively call DFW on neighbot
    //return results array
}

let g = new Graph()
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');


// {
//     "A": [-, -]
// }