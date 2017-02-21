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
    getLeadersAllTime: _.debounce(
      function() {
        axios.get(this.leadersAllTime).then(function(response) {
          app.campers = response.data;
        });
      },
      500
    ),

    getLeadersRecent: _.debounce(
      function() {
        axios.get(this.leadersRecent).then(function(response) {
          app.campers = response.data;
        });
      },
      500
    )
  }
});
