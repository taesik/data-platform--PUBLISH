$(function () {
  $('#gnb_footer').append(gnb_footer());
});


function gnb_footer() {
  return `<div class="gnb-footer">
  <div class="row mx-lg-5 mx-md-3 mx-0">
    <div class="col-6">
      <h6 class="gnb-footer-text my-1">© 2021 KB 국민카드 데이터혁신부</h6>
    </div>
    <div class="col-6">
      <h6 class="gnb-footer-text my-1 text-right">
        <a href="#">서비스테스크(업무문의)</a>
      </h6>
    </div>
  </div>
</div>`;
}