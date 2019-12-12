import { Injectable } from "@angular/core";
import { DatabaseService } from './database.service';
import { SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable()
export class TypeService {
    constructor(private dbService: DatabaseService) { }

    public get(id: number) {
        return this.dbService.getDB()
            .then((db: SQLiteObject) => {
                let sql = 'select * from type where id = ?';
                let data = [id];

                return db.executeSql(sql, data)
                    .then((data: any) => {
                        if (data.rows.length > 0) {
                            let item = data.rows.item(0);
                            let type = new Type();
                            type.id = item.id;
                            type.description = item.description;
                        }
                    })
            })
    }

    public getAll() {
        return this.dbService.getDB()
            .then((db: SQLiteObject) => {

                return db.executeSql('select * from type', [])
                    .then((data: any) => {
                        if (data.rows.length > 0) {
                            let types: any[] = [];
                            for (var i = 0; i < data.rows.length; i++) {
                                var type = data.rows.item(i);
                                types.push(type);
                            }
                            return types;
                        } else {
                            return [];
                        }
                    })
                    .catch((e) => console.error(e));
            })
            .catch((e) => console.error(e));
    }
}

export class Type {
    id: number;
    description: string;
}