// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
    .forEach(function (form) {
        form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.classList.add('was-validated')
        }, false)
    })
})()

$(document).ready(function () {
  // 編輯的 Modal 事件
  $('#editModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // 選則當初觸發事件的按鈕
  var title = button.data('title') // 使用 data-* 來取得特定內容

  var modal = $(this)
  modal.find('.modal-title').text(title) // 寫入資料
  });

  $('#removeModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // 選則當初觸發事件的按鈕
  var title = button.data('title') // 使用 data-* 來取得特定內容

  var modal = $(this)
  modal.find('.modal-title').text('確認' + title) // 寫入資料
  })
});