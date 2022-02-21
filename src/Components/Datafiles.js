import { nanoid } from "nanoid";

const KEYS = {
  TableData: "TableData",
  dataId: "dataId"
};

export function insertData(data) {
  let myData = getAllData();
  data["id"] = nanoid();
  myData.push(data);
  localStorage.setItem(KEYS.TableData, JSON.stringify(myData));
}
export function updateData(data) {
  let myData = getAllData();
  let index = myData.findIndex((item) => item.id === data.id);
  myData[index] = { ...data };
  localStorage.setItem(KEYS.TableData, JSON.stringify(myData));
}
export function deleteData(id) {
  let myData = getAllData();
  myData = myData.filter((item) => item.id !== id);
  localStorage.setItem(KEYS.TableData, JSON.stringify(myData));
}

export function getAllData() {
  if (localStorage.getItem(KEYS.TableData) == null)
    localStorage.setItem(KEYS.TableData, JSON.stringify([]));

  return JSON.parse(localStorage.getItem(KEYS.TableData));
}
