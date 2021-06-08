const db = require('../db');

class RecordController {
    async getAll(req, res) {
        try {
            const records = await db.query('SELECT * FROM record');
            res.json(records.rows);
        } catch (e) {
            res.status(500).json({
                message: e.message,
            });
        }
    }

    async create(req, res) {
        try {
            const { name, value } = req.body;
            const record = await db.query(
                'INSERT INTO record (name, value) values($1, $2) RETURNING *',
                [name, value],
            );
            res.status(201).json(record.rows[0]);
        } catch (e) {
            res.status(500).json({
                message: e.message,
            });
        }
    }

    async update(req, res) {
        try {
            const { id, name, value } = req.body;
            const record = await db.query(
                'UPDATE record set name = $1, value = $2 where id = $3 RETURNING *',
                [name, value, id],
            );
            res.json(record.rows[0]);
        } catch (e) {
            res.status(500).json({
                message: e.message,
            });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const record = await db.query('DELETE FROM record where id = $1', [id]);
            res.status(204).json();
        } catch (e) {
            res.status(500).json({
                message: e.message,
            });
        }
    }
}

module.exports = new RecordController();
