import { Meteor } from "meteor/meteor"

import { ClientsCollection, ClientsTrending } from "../imports/api/ClientsCollection"
import { SalesCollection, SalesTrendingCollection} from "../imports/api/SalesCollection"


Meteor.startup(() => {  

    ClientsCollection.insert({ username: "Luan Otávio", thisMonth: 4000})
    ClientsCollection.insert({ username: "Eric", thisMonth: 5000})
    ClientsCollection.insert({ username: "João", thisMonth: 6000})
    ClientsCollection.insert({ username: "Maria", thisMonth: 4400})
    ClientsCollection.insert({ username: "Bruna", thisMonth: 4600})
    ClientsCollection.insert({ username: "Rafaela", thisMonth: 4058})
    ClientsCollection.insert({ username: "Simone", thisMonth: 3218})
    ClientsCollection.insert({ username: "Juliano", thisMonth: 5350})

    ClientsTrending.insert({username: "Luan Otávio", percentage: 0.9})
    ClientsTrending.insert({username: "Janaina", percentage: 0.82})
    ClientsTrending.insert({username: "José", percentage: 0.5})
    ClientsTrending.insert({username: "Miguel", percentage: 0.3})
    ClientsTrending.insert({username: "Rafael", percentage: 0.32})
    

    SalesCollection.insert({ username: "Tenis", thisMonth: 4000})
    SalesCollection.insert({ username: "Sapato", thisMonth: 5000})
    SalesCollection.insert({ username: "Carro", thisMonth: 6000})
    SalesCollection.insert({ username: "Caderno", thisMonth: 4400})
    SalesCollection.insert({ username: "Lapis", thisMonth: 4600})
    SalesCollection.insert({ username: "Caneta", thisMonth: 4058})
    SalesCollection.insert({ username: "Computador", thisMonth: 3218})
    SalesCollection.insert({ username: "Celular", thisMonth: 5350})

    SalesTrendingCollection.insert({username: "Tenis", percentage: 0.9})
    SalesTrendingCollection.insert({username: "Sapato", percentage: 0.82})
    SalesTrendingCollection.insert({username: "Carro", percentage: 0.5})
    SalesTrendingCollection.insert({username: "Caderno", percentage: 0.3})
    SalesTrendingCollection.insert({username: "Caneta", percentage: 0.32})
    
})


