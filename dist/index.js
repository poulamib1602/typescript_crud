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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const crud_1 = __importDefault(require("./crud"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('Well done!');
});
app.post('/items', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const itemData = req.body;
    const result = yield crud_1.default.createItem(itemData);
    res.json({ message: 'Item created', data: itemData, affectedRows: result });
}));
app.get('/items', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield crud_1.default.getItems();
    res.json(items);
}));
app.get('/items/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const itemId = parseInt(req.params.id);
    const item = yield crud_1.default.getItemById(itemId);
    res.json(item);
}));
app.put('/items/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const itemId = parseInt(req.params.id);
    const itemData = req.body;
    const result = yield crud_1.default.updateItem(itemId, itemData);
    res.json({ message: 'Item updated', affectedRows: result });
}));
app.delete('/items/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const itemId = parseInt(req.params.id);
    const result = yield crud_1.default.deleteItem(itemId);
    res.json({ message: 'Item deleted', affectedRows: result });
}));
app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
});
