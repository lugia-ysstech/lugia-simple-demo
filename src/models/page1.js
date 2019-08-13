import lugiax from "@lugia/lugiax";

const __LUGIAX_MODEL_DEFINE__ = "page1"; // lugiax-model-define
const state = {
  breadCrumb: [
    {href:'index',title:'首页'},
    {href:'formPage',title:'表单页'},
    {href:'page_1',title:'详情页'},
  ],
  stepsData:[
    {title:'step1',stepStatus:'finish'},
    {title:'step2',stepStatus:'process'},
    {title:'step3',stepStatus:'next'},
  ],
  searchInfo:{
    name:null,
    job:null,
    startTime:null,
    endTime:null,
    id:null,
  },
  columns: [
    {
      title: 'ID', dataIndex: 'id', key: 'id', width: 200,
    }, {
      title: '创建时间', dataIndex: 'createTime', key: 'createTime', width: 200,
    }, {
      title: '姓名', dataIndex: 'name', key: 'name', width: 200,
    }, {
      title: '年龄', dataIndex: 'age', key: 'age', width: 200,
    }, {
      title: '职业', dataIndex: 'job', key: 'job', width: 200,
    }
  ],
  formData: []
};

export default lugiax.register({
  model: __LUGIAX_MODEL_DEFINE__,
  state,
  mutations: {
    sync: {
      onChangeName(state,inParam){
        const{eventArgs:{newValue}} = inParam;
        return state.setIn(['searchInfo','name'],newValue);
      },
      onChangeJobTitle(state, inParam) {
        const {eventArgs: {newValue}} = inParam;
        return state.setIn(['searchInfo', 'job'], newValue);
      },
      onChangeStartTime(state, inParam) {
        const {eventArgs: {newValue}} = inParam;
        return state.setIn(['searchInfo', 'startTime'], newValue);
      },
      onChangeEndTime(state, inParam) {
        const {eventArgs: {newValue}} = inParam;
        return state.setIn(['searchInfo', 'endTime'], newValue);
      },
      onChangeId(state, inParam) {
        const {eventArgs: {newValue}} = inParam;
        return state.setIn(['searchInfo', 'id'], newValue);
      },
    },
    async: {
      async getSteps(state,inParam,{mutations}){
        const result = await fetch('/api/getSteps',{method:'POST'}).then(response => response.json()).then(data => {return data;})
        return state.set('stepsData',result);
      },
      async doRequest(state, inParam, {mutations}) {
        const searchInfo = state.get('searchInfo').toJS();
        const currentPage = state.get('currentPage') || 1;
        const limit = state.get('limit') || 4;
        const query = {...searchInfo, currentPage, limit};
        const resp = await fetch('/api/search',
          {
            method: 'Post',
            body: JSON.stringify({searchInfo: query}),
            headers: new Headers({'Content-Type': 'application/json'}),
          }).then(response => (response.json())).then(data => {
          return data;
        });
        const res = await resp;
        state = state.set('total', res.total);
        return state.set('formData', res.data);
      },
    }
  }
});
