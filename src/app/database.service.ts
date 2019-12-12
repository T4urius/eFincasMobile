import { Injectable } from "@angular/core";
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable()
export class DatabaseService {
    constructor(private sqlite: SQLite) { }

    public getDB() {
        return this.sqlite.create({
            name: 'efincas.db',
            location: 'default'
        });
    }

    public create() {
        return this.getDB()
            .then((db: SQLiteObject) => {
                this.createTables(db);
                this.insertDefaultItems(db);
            }).catch(e => console.log(e));
    }

    private createTables(db: SQLiteObject) {
        // Criando as tabelas
        db.sqlBatch([
            ['CREATE TABLE IF NOT EXISTS contas (id INTEGER primary key AUTOINCREMENT NOT NULL, description TEXT, value TEXT, date TEXT, id_type INTEGER, FOREIGN KEY(id_type) REFERENCES type (id))'],
            ['CREATE TABLE IF NOT EXISTS types (id INTEGER primary key AUTOINCREMENT NOT NULL, description TEXT)'],
        ])
            .then(() => console.log('Tabelas criadas'))
            .catch(e => console.error('Erro ao criar as tabelas', e));
    }

    private insertDefaultItems(db: SQLiteObject) {
        db.executeSql('select COUNT(id) as qtd from types', [])
            .then((data: any) => {
                //Se não existe nenhum registro
                if (data.rows.item(0).qtd == 0) {

                    // Criando as tabelas
                    db.sqlBatch([
                        ['insert into types (description) values (?)', ['A pagar']],
                        ['insert into types (description) values (?)', ['A receber']],
                    ])
                        .then(() =>
                            console.log('Dados padrões incluídos'))
                        .catch(e => console.error('Erro ao incluir dados padrões', e));

                }
            })
            .catch(e => console.error('Erro ao consultar a qtd de types', e));
    }
}