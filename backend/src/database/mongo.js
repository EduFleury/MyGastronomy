import { MongoClient, ServerApiVersion } from 'mongodb'

export const Mongo = {
    async connect({ mongoConnectionString, mongoDbName }) {
        try {
            const client = new MongoClient(mongoConnectionString, {
                serverApi: {
                    version: ServerApiVersion.v1,
                    strict: true,
                    deprecationErrors: true,
                },
                serverSelectionTimeoutMS: 5000,
            })

            await client.connect()

            // opcional: faz um ping para garantir que está funcionando
            await client.db("admin").command({ ping: 1 })

            const db = client.db(mongoDbName)

            this.client = client
            this.db = db
            return 'Connected to Mongo!'
        } catch (error) {
            console.error('[Mongo] Erro durante conexão:', error)
            return { text: 'Error during mongo connection', error }
        }
    }
}
