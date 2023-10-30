import { connect } from './db';

class ItemService {
    async createItem(itemData: any) {
        const connection = await connect();
        const [result] = await connection.execute('INSERT INTO items (name) VALUES (?)', [itemData.name]);
        connection.end();
        return result;
    }

    async getItems() {
        const connection = await connect();
        const [rows] = await connection.execute('SELECT * FROM items');
        connection.end();
        return rows;
    }

    async getItemById(itemId: number) {
        const connection = await connect();
        const [rows] = await connection.execute('SELECT * FROM items WHERE id = ?', [itemId]);
        connection.end();
        return rows;
    }

    async updateItem(itemId: number, itemData: any) {
        const connection = await connect();
        const [result] = await connection.execute('UPDATE items SET name = ? WHERE id = ?', [itemData.name, itemId]);
        connection.end();
        return result;
    }

    async deleteItem(itemId: number) {
        const connection = await connect();
        const [result] = await connection.execute('DELETE FROM items WHERE id = ?', [itemId]);
        connection.end();
        return result;
    }
}

export default new ItemService();
