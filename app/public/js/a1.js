var app = new Vue({
  el: '#app',
  delimiters: ['{', '}'],
  data: {
    doc: false,
    pat: false,
    hos: false,
    busy: false,
    otpbox: false,
    otp: '',
    phone: "",
    user: 'John',
    uploadFieldName: '',
    files: ['as', 'sd', 'sds']
  },
  methods: {
  	update: function(val){
  		this.doc = this.pat = this.hos = false;
  		console.log(val)
  		switch(val){
  			case 1: this.hos = true;
  			break;
  			case 2: this.pat = true;
  			break;
  			case 0: this.doc = true;
  			break;
  		}
  	},
  	processFile: function(event) {
  		console.log(event)
    	this.uploadFieldName = event.target.files[0]
  	},
  	loadMore: function() {
  		console.log("Sdsd")	
    },
    login: function(){
      this.$http.get('/token/'+this.phone).then(response => {
        this.otpbox = true;

      }, response => {
        // error callback
      });
    },
    otppost: function(){
      this.$http.get('/verify/'+this.otp).then(response => {
        this.otpbox = true;
        window.location.href = '/dashboard'
      }, response => {
        // error callback
      });
    }
  }
})


// (function ($) {
// $('#uploadit').on('click', function () {
//   var file = $('#file')[0].files[0];
//   var fileReader = new FileReader();
//   fileReader.onloadend = function (e) {
//     var arrayBuffer = e.target.result;
//     var fileType = $('#file-type').val();
//     blobUtil.arrayBufferToBlob(arrayBuffer, fileType).then(function (blob) {
//       console.log('here is a blob', blob);
//       console.log('its size is', blob.size);
//       console.log('its type is', blob.type);
//     }).catch(console.log.bind(console));
//   };
//   fileReader.readAsArrayBuffer(file);
// });
// })(jQuery);


