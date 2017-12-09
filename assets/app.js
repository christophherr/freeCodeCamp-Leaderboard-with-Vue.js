// @ts-check
const app = new Vue({
  el: '#app',
  data: {
    campers: [],
    leadersAllTime: 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime',
    leadersRecent: 'https://fcctop100.herokuapp.com/api/fccusers/top/recent'
  },
  mounted() {
    this.getLeadersRecent();
  },
  methods: {
    getLeadersAllTime: _.debounce(function getLeadersAllTime() {
      axios.get(this.leadersAllTime).then((response) => {
        app.campers = response.data;
      });
    }, 500),

    getLeadersRecent: _.debounce(function getLeadersRecent() {
      axios.get(this.leadersRecent).then((response) => {
        app.campers = response.data;
      });
    }, 500)
  }
});
