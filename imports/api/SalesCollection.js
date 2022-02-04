import { Mongo } from "meteor/mongo"

export const SalesCollection = new Mongo.Collection("Sales");

export const SalesTrendingCollection = new Mongo.Collection("SalesTrending")