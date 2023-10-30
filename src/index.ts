import express from 'express';
import bodyParser from 'body-parser';
import ItemService  from './crud';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Well done!');
});
app.post('/items', async (req, res) => {
    const itemData = req.body;
    const result = await ItemService.createItem(itemData);
    res.json({ message: 'Item created', data: itemData, affectedRows: result });
});
app.get('/items', async (req, res) => {
    const items = await ItemService.getItems();
    res.json(items);
});
app.get('/items/:id', async (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = await ItemService.getItemById(itemId);
    res.json(item);
});
app.put('/items/:id', async (req, res) => {
    const itemId = parseInt(req.params.id);
    const itemData = req.body;
    const result = await ItemService.updateItem(itemId, itemData);
    res.json({ message: 'Item updated', affectedRows: result });
});
app.delete('/items/:id', async (req, res) => {
    const itemId = parseInt(req.params.id);
    const result = await ItemService.deleteItem(itemId);
    res.json({ message: 'Item deleted', affectedRows: result });
});
app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})