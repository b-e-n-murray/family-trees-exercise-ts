import { Person } from "../personTypes";

export function createStarkTree(): Person {

    const eddardsKids: Person[] = [
        { name: "Rickon", children: [] },
        { name: "Bran", children: [] },
        { name: "Arya", children: [] },
        { name: "Sansa", children: [] },
        { name: "Robb", children: [] },
        { name: "Jon", children: [] },
    ]

    const eddard: Person = { name: "Eddard", children: eddardsKids };

    const rickardsKids: Person[] = [
        { name: "Bengen", children: [] },
        { name: "Lyanna", children: [] },
        { name: "Brandon", children: [] },
        eddard,
    ]

    const topPerson: Person = { name: "Rickard", children: rickardsKids };

    return topPerson;
}

/*function logAllPeopleInTree(rootPerson)
    workStack = empty stack of Person objects
    push rootPerson onto workStack

		while workStack is not empty: 
        currentPerson = pop person off workStack
        log the name property of currentPerson
        push each element of currentPerson's children onto the workStack*/

function logAllPeopleInTree(rootPerson: Person): string[] {
    let workStack = [];
    let familyTree = []
    workStack.push(rootPerson)
    while(workStack.length !== 0) {
        let currentPerson: Person = workStack[workStack.length - 1]
        familyTree.push(currentPerson.name)
        for(let child of currentPerson.children) {
            workStack.unshift(child)
        }
        workStack.pop()
    }
    return familyTree
}

console.log(logAllPeopleInTree(createStarkTree()), "Num in Fam: ", logAllPeopleInTree(createStarkTree()).length)
