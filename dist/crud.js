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
const db_1 = require("./db");
class ItemService {
    createItem(itemData) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield (0, db_1.connect)();
            const [result] = yield connection.execute('INSERT INTO items (name) VALUES (?)', [itemData.name]);
            connection.end();
            return result;
        });
    }
    getItems() {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield (0, db_1.connect)();
            const [rows] = yield connection.execute('SELECT * FROM items');
            connection.end();
            return rows;
        });
    }
    getItemById(itemId) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield (0, db_1.connect)();
            const [rows] = yield connection.execute('SELECT * FROM items WHERE id = ?', [itemId]);
            connection.end();
            return rows;
        });
    }
    updateItem(itemId, itemData) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield (0, db_1.connect)();
            const [result] = yield connection.execute('UPDATE items SET name = ? WHERE id = ?', [itemData.name, itemId]);
            connection.end();
            return result;
        });
    }
    deleteItem(itemId) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield (0, db_1.connect)();
            const [result] = yield connection.execute('DELETE FROM items WHERE id = ?', [itemId]);
            connection.end();
            return result;
        });
    }
}
exports.default = new ItemService();
