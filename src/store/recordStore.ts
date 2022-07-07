import clone from '@/lib/clone';

const localStorageName = 'recordList';
const recordStore = {
  recordList: [] as RecordItem[],
  fetchRecord() {
    this.recordList = JSON.parse(window.localStorage.getItem(localStorageName) || '[]') as RecordItem[];
    return this.recordList;
  },
  createRecord(record: RecordItem) {
    const record2: RecordItem = clone(record);
    record2.createdTime = new Date();
    this.recordList.push(record2);
    this.saveRecord();

  },
  saveRecord() {
    window.localStorage.setItem(localStorageName, JSON.stringify(this.recordList));
  }
};
recordStore.fetchRecord();
export default recordStore;