import { RowID, RowElement } from './interface';

declare function create(row: RowElement): RowID;
declare function read(id: RowID): RowElement | null;
declare function update(id: RowID, row: RowElement): void;
declare function del(id: RowID): void;
declare function insertRow(row: RowElement): RowID;
declare function updateRow(id: RowID, row: RowElement): void;
declare function deleteRow(id: RowID): void;
