import { Injectable } from "@angular/core";
import { DatabaseService } from './database.service';
import { SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable()
export class ContaService {
    constructor(private dbService: DatabaseService) { }

    public insert(conta: Conta) {
        return this.dbService.getDB()
            .then((db: SQLiteObject) => {
                let sql = 'insert into contas (description, value, date, id_type) values (?, ?, ?, ?)'
                let data = [conta.description, conta.value, conta.date, conta.type];

                return db.executeSql(sql, data)
                    .catch((e) => console.error(e));
            })
            .catch((e) => console.error(e));
    }

    public getAll() {
        return this.dbService.getDB()
            .then((db: SQLiteObject) => {

                return db.executeSql('select * from contas', [])
                    .then((data: any) => {
                        if (data.rows.length > 0) {
                            let contas: any[] = [];
                            for (var i = 0; i < data.rows.length; i++) {
                                var conta = data.rows.item(i);
                                contas.push(conta);
                            }
                            return contas;
                        } else {
                            return [];
                        }
                    })
                    .catch((e) => console.error(e));
            })
            .catch((e) => console.error(e));
    }

    public remove(id: number) {
        return this.dbService.getDB()
            .then((db: SQLiteObject) => {
                let sql = 'delete from contas where id = ?';
                let data = [id];

                return db.executeSql(sql, data)
                    .catch((e) => console.error(e));
            })
            .catch((e) => console.error(e));
    }
}

export class Conta {
    id: number;
    description: string = '';
    value: number = 0;
    date: Date;
    type: number;
}