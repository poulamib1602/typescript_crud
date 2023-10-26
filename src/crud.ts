import { connect } from './db';

export async function createItem(itemData: any) {
    const connection = await connect();
    const [result] = await connection.execute('INSERT INTO items (name) VALUES (?)', [itemData.name]);
    connection.end();
    return result;
}

export async function getItems() {
    const connection = await connect();
    const [rows] = await connection.execute('SELECT * FROM items');
    connection.end();
    return rows;
}

export async function getItemById(itemId: number) {
    const connection = await connect();
    const [rows] = await connection.execute('SELECT * FROM items WHERE id = ?', [itemId]);
    connection.end();
    return rows;
}

export async function updateItem(itemId: number, itemData: any) {
    const connection = await connect();
    const [result] = await connection.execute('UPDATE items SET name = ? WHERE id = ?', [itemData.name, itemId]);
    connection.end();
    return result;
}

export async function deleteItem(itemId: number) {
    const connection = await connect();
    const [result] = await connection.execute('DELETE FROM items WHERE id = ?', [itemId]);
    connection.end();
    return result;
}
