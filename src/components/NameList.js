import React from 'react'

function NameList() {
    // const names = ['Tsentle', 'Thabiso', 'Matsentle']
    const persons = [
        {
            id: 1,
            name: 'Tsentle',
            age: 3,
        }, {
            id: 2,
            name: 'Thabiso',
            age: 33,
        }, {
            id: 3,
            name: 'Matsentle',
            age: 27,
        }
    ]

    const personList = persons.map((person) => <h2>{person.id} name {person.name} age {person.age}</h2>)

    return (<div>{personList}</div>)
}

export default NameList
