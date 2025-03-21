import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

type User = {
    email: string;
    walletAddress: string;
};

const uri = process.env.MONGODB_URI as string;
const client = new MongoClient(uri);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        await client.connect();
        const db = client.db("yourDatabaseName");
        const collection = db.collection<User>("users");

        if (req.method === "POST") {
            const { email, walletAddress } = req.body as User;
            if (!email || !walletAddress) {
                return res.status(400).json({ message: "Email and Wallet Address are required" });
            }

            const existingUser = await collection.findOne({ email });
            if (existingUser) {
                return res.status(200).json({ message: "Email already exists" });
            }

            await collection.insertOne({ email, walletAddress });
            return res.status(201).json({ message: "User added successfully" });
        }

        if (req.method === "GET") {
            const email = req.query.email as string;
            if (!email) {
                return res.status(400).json({ message: "Email is required" });
            }

            const user = await collection.findOne({ email });
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            return res.status(200).json({ walletAddress: user.walletAddress });
        }

        return res.status(405).json({ message: "Method Not Allowed" });
    } catch (error: any) {
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    } finally {
        await client.close();
    }
}
