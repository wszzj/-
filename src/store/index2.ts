import {recordListModel} from '@/models/recordListModel';
import {tagListModel} from '@/models/tagListModel';

const store = {
  recordList: recordListModel.fetch(),
  createRecord(record: RecordItem) {
    recordListModel.create(record);
  },

  tagList: tagListModel.fetch(),
  findTag (id: string)  {
    return store.tagList.filter(item => item.id === id)[0];
  },
  createTag: (name: string) => {
    const message = tagListModel.create(name);
    if (message === 'duplicate') {
      window.alert('标签重复了');
    } else if (message === 'success') {
      window.alert('标签添加成功');
    }
  },
  removeTag: (id: string) => {
    return tagListModel.remove(id);
  },
  updateTag: (id: string, name: string) => {
    return tagListModel.update(id, name);
  }
};


export default store