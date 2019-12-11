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
                // this.insertDefaultItems(db);
            }).catch(e => console.log(e));
    }

    private createTables(db: SQLiteObject) {
        // Criando as tabelas
        db.sqlBatch([
            ['CREATE TABLE IF NOT EXISTS contas (id integer primary key AUTOINCREMENT NOT NULL, description TEXT, value TEXT, date TEXT)'],
        ])
            .then(() => console.log('Tabelas criadas'))
            .catch(e => console.error('Erro ao criar as tabelas', e));
    }

    // private insertDefaultItems(db: SQLiteObject) {
    //     db.executeSql('select COUNT(id) as qtd from contas', [])
    //         .then((data: any) => {
    //             //Se não existe nenhum registro
    //             if (data.rows.item(0).qtd == 0) {

    //                 // Criando as tabelas
    //                 db.sqlBatch([
    //                     ['insert into contas (description, value, date) values (?, ?, ?)', ['Salário:', 'R$ 100,00', '10/Dez/19']],
    //                     ['insert into contas (description, value, date) values (?, ?, ?)', ['Transferência', 'R$ 200,00', '10/Out/19']],
    //                 ])
    //                     .then(() => console.log('Dados padrões incluídos'))
    //                     .catch(e => console.error('Erro ao incluir dados padrões', e));

    //             }
    //         })
    //         .catch(e => console.error('Erro ao consultar a qtd de contas', e));
    // }
}