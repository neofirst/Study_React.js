const { observable, configure } = require('mobx');

configure({enforceActions:'always'});//Mobx의 자유로움을 제한한다. 리렌더링과 같은 상태를 관리 할 때 유용

const userStore = observable({
  isLoggingIn: false,
  data: null,
  logIn(data) {
    this.isLoggingIn = true;
    setTimeout(() => {
      this.data = data;
      this.isLoggingIn = false;
      postStore.data.push(1);
    }, 2000);
  },
  logOut() {
    this.data = null;
  },
});

const postStore = observable({
  data: [],
  addPost(data) {
    this.data.push(data);
  },
});

export { userStore, postStore };
