import { Schema, model } from "mongoose";

interface IBatchConfig{
    guildID: string;
    dunks: Array<{
        id: string;
        name: string;
        bestBatch: string;
        budgetBatch: string; 
        extraInfo: string;
        url: string;
        image: string;
        lastUpdated: Date;
    }>;
    aj1: Array<{
        id: string;
        name: string;
        bestBatch: string;
        budgetBatch: string; 
        extraInfo: string;
        url: string;
        image: string;
        lastUpdated: Date;
    }>;
    aj3: Array<{
        id: string;
        name: string;
        bestBatch: string;
        budgetBatch: string; 
        extraInfo: string;
        url: string;
        image: string;
        lastUpdated: Date;
    }>;
    aj4: Array<{
        id: string;
        name: string;
        bestBatch: string;
        budgetBatch: string; 
        extraInfo: string;
        url: string;
        image: string;
        lastUpdated: Date;
    }>;
    af1: Array<{
        id: string;
        name: string;
        bestBatch: string;
        budgetBatch: string; 
        extraInfo: string;
        url: string;
        image: string;
        lastUpdated: Date;
    }>;
    ye: Array<{
        id: string;
        name: string;
        bestBatch: string;
        budgetBatch: string; 
        extraInfo: string;
        url: string;
        image: string;
        lastUpdated: Date;
    }>;
    other: Array<{
        id: string;
        name: string;
        bestBatch: string;
        budgetBatch: string; 
        extraInfo: string;
        url: string;
        image: string;
        lastUpdated: Date;
    }>;
    ts: Array<{
        id: string;
        name: string;
        bestBatch: string;
        budgetBatch: string; 
        extraInfo: string;
        url: string;
        image: string;
        lastUpdated: Date;
    }>;
}

export default model<IBatchConfig>("BatchConfig", new Schema<IBatchConfig>({
    guildID: String,
    dunks: [{
        id: String,
        name: String,
        bestBatch: String,
        budgetBatch: String, 
        extraInfo: String,
        url: String,
        image: String,
        lastUpdated: Date
    }],
    aj1: [{
        id: String,
        name: String,
        bestBatch: String,
        budgetBatch: String, 
        extraInfo: String,
        url: String,
        image: String,
        lastUpdated: Date
    }],
    aj3: [{
        id: String,
        name: String,
        bestBatch: String,
        budgetBatch: String, 
        extraInfo: String,
        url: String,
        image: String,
        lastUpdated: Date
    }],
    aj4: [{
        id: String,
        name: String,
        bestBatch: String,
        budgetBatch: String, 
        extraInfo: String,
        url: String,
        image: String,
        lastUpdated: Date
    }],
    af1: [{
        id: String,
        name: String,
        bestBatch: String,
        budgetBatch: String, 
        extraInfo: String,
        url: String,
        image: String,
        lastUpdated: Date
    }],
    ye: [{
        id: String,
        name: String,
        bestBatch: String,
        budgetBatch: String, 
        extraInfo: String,
        url: String,
        image: String,
        lastUpdated: Date
    }],
    other: [{
        id: String,
        name: String,
        bestBatch: String,
        budgetBatch: String, 
        extraInfo: String,
        url: String,
        image: String,
        lastUpdated: Date
    }],
    ts: [{
        id: String,
        name: String,
        bestBatch: String,
        budgetBatch: String, 
        extraInfo: String,
        url: String,
        image: String,
        lastUpdated: Date
    }]
   
}, {
    timestamps: true // Adds createdAt and updatedAt fields
    }))