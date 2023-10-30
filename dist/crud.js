"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.updateItem = exports.getItemById = exports.getItems = exports.createItem = void 0;
const db_1 = require("./db");
function createItem(itemData) {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield (0, db_1.connect)();
        const [result] = yield connection.execute('INSERT INTO items (name) VALUES (?)', [itemData.name]);
        connection.end();
        return result;
    });
}
exports.createItem = createItem;
function getItems() {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield (0, db_1.connect)();
        const [rows] = yield connection.execute('SELECT * FROM items');
        connection.end();
        return rows;
    });
}
exports.getItems = getItems;
function getItemById(itemId) {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield (0, db_1.connect)();
        const [rows] = yield connection.execute('SELECT * FROM items WHERE id = ?', [itemId]);
        connection.end();
        return rows;
    });
}
exports.getItemById = getItemById;
function updateItem(itemId, itemData) {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield (0, db_1.connect)();
        const [result] = yield connection.execute('UPDATE items SET name = ? WHERE id = ?', [itemData.name, itemId]);
        connection.end();
        return result;
    });
}
exports.updateItem = updateItem;
function deleteItem(itemId) {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield (0, db_1.connect)();
        const [result] = yield connection.execute('DELETE FROM items WHERE id = ?', [itemId]);
        connection.end();
        return result;
    });
}
exports.deleteItem = deleteItem;
