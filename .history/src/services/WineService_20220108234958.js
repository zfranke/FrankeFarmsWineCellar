import firebase from "firebase";

const db = firebase.collection("/wineCellar");

const getAll = () => {
  return db;
};

const create = (data) => {
  return db.add(data);
};

const update = (id, value) => {
  return db.doc(id).update(value);
};

const remove = (id) => {
  return db.doc(id).delete();
};

const WineService = {
  getAll,
  create,
  update,
  remove
};

export default WineService;