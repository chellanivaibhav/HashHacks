import { initWeb3, addToIPFS, getImage, getNoOfDocs} from './eth_link'
initWeb3()
var fileName = '';

$(function(){
  getImage(0, $('#onetwothree')[0])
  $('#uploadit').click(function(e){
      e.preventDefault();
      console.log(e);
      var index = 0;
      if (fileName.name == 'fingerprint (1).png"')
        index = 0
      else 
        index = 1;
      addToIPFS(fileName);
      getImage(1, document.querySelector('#onetwothree'))
  })


  $('#file').change(function(e){
    fileName = e.target.files[0];
  });
});




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


