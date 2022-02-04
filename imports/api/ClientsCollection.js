import { Mongo } from "meteor/mongo"

export const ClientsCollection = new Mongo.Collection("Clients");

export const ClientsTrending = new Mongo.Collection("ClientsTrending")