import Component from 'vue-class-component';
import Vue from 'vue';

const map:{[key:string]:string}={
  'Tag name is duplicated':"标签名重复了"
}
@Component


export class TagHelper extends Vue {
  createTag() {
    const name = window.prompt('请输入标签');
    if (!name) {
     return window.alert('标签名不能为空');
    } else {
      this.$store.commit('createTag', name);
      if(this.$store.state.createdTagError){
        window.alert(map[this.$store.state.createdTagError.message])
      }else{
        window.alert('标签添加成功')
      }
    }
  }
}

export default TagHelper;




