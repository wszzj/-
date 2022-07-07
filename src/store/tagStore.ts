import idCreator from '@/lib/idCreator';

const localStorageName = 'tagList';
const tagStore = {
  tagList: [] as Tag[],
  fetchTag() {
    this.tagList = JSON.parse(window.localStorage.getItem(localStorageName) || '[]');
    return this.tagList;
  },
  findTag(id: string) {
    return this.tagList.filter(item => item.id === id)[0];
  },
  createTag(name: string) {
    const names = this.tagList.map(item => item.name);
    if (names.indexOf(name) >= 0) {
      window.alert('标签重复了');
      return 'duplicate';
    }
    const id = idCreator().toString();
    this.tagList.push({id: id, name: name});
    this.saveTag();
    window.alert('标签添加成功');
    return 'success';
  },
  removeTag(id: string) {
    let index = -1;
    for (let i = 0; i < this.tagList.length; i++) {
      if (this.tagList[i].id === id) {
        index = i;
        break;
      }
    }
    this.tagList.splice(index, 1);
    this.saveTag();
    return true;
  },
  updateTag(id: string, name: string) {
    const idList = this.tagList.map(item => item.id);
    if (idList.indexOf(id) >= 0) {
      const names = this.tagList.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        return 'duplicate';
      } else {
        const tag = this.tagList.filter(item => item.id === id)[0];
        tag.name = name;
        this.saveTag();
        return 'success';
      }
    } else {
      return 'notFound';
    }
  },
  saveTag() {
    window.localStorage.setItem(localStorageName, JSON.stringify(this.tagList));
  },
};
tagStore.fetchTag();
export default tagStore;