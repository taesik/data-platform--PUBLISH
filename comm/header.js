$(function () {
  $('#gnb_header').append(gnb_header());
});

function nav_open() {
  document.getElementById("side_nav").style.width = "100%";
}

function nav_close() {
  document.getElementById("side_nav").style.width = "0";
}

function gnb_header() {
  return `<nav class="navbar navbar-expand-lg navbar-light navbar-md-flex navbar-lg-none">

  <div class="side-navbar">
    <i class="bi bi-side-open" onclick="nav_open()"></i>
  </div>

  <div class="navbar-logo">
    <img class="logo" src="assets/img/logo/kb_logo.png" />
  </div>

  <div class="nav-search">
    <form class="search">
      <input type="search" class="form-control">
    </form>
    <!--h4>문장이나 단락을 통해 의도를 이해하는 <b>시맨틱 검색</b>을 경험해 보세요</h4-->
  </div>

  <div class="navbar-right">
    <ul class="nav-list">
      <li class="nav-item">
        <a href="#">키워드 뉴스</a>
      </li>
      <li class="nav-item">
        <a href="#">대시보드</a>
      </li>
      <li class="nav-item">
        <a href="#">분석보고서</a>
      </li>
      <li class="nav-item">
        <a href="#">시멘틱검색</a>
      </li>
    </ul>


    <div class="dropdown">
      <button type="button" id="comm-dropdown-1" data-bs-toggle="dropdown" aria-expanded="false">
        <span class="my-img"></span>
      </button>

      <div class="dropdown-menu dropdown-menu-end" aria-labelledby="comm-dropdown-1">
        <div class="row">
          <div class="col-12">
            <div class="my-info">
              <span class="my-img"></span>
              <h5>MS00000</h5>
            </div>
          </div>

          <div class="col-12">
            <div class="my-box">
              <h5>나의 키워드<span class="edit">edit</span></h5>
              <div class="keyword-box">
                <span>#KB국민카드</span><span>COVID-19</span><span>올댓카드</span><span>#KB국민카드</span><span>#KB국민카드</span>
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="my-list">
              <h5>좋아요 표시한 콘텐츠</h5>
              <ul>
                <li><a href="#">대시보드</a></li>
                <li><a href="#">분석보고서</a></li>
                <li><a href="#">키워드 뉴스</a></li>
              </ul>
            </div>
          </div>

          <div class="col-12">
            <div class="my-list">
              <h5>구독한 콘텐츠</h5>
              <ul>
                <li><a href="#">대시보드</a></li>
                <li><a href="#">분석보고서</a></li>
                <li><a href="#">키워드 뉴스</a></li>
              </ul>
            </div>
          </div>

          <div class="col-12">
            <div class="my-list border-0">
              <h5>관리자</h5>
              <ul>
                <li><a href="#">추천 키워드 설정</a></li>
                <li><a href="#">뉴스 콘텐츠 관리</a></li>
                <li><a href="#">시맨틱 콘텐츠 관리</a></li>
                <li><a href="#">대시보드 작성</a></li>
                <li><a href="#">보고서 작성</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>



  <div id="side_nav" class="side-nav">
    <!--a href="javascript:void(0)" class="side-close" onclick="nav_close()">
      <img src="./assets/img/icon/close.png" />
    </a-->
    <div class="search-box">
      <form class="side-search" action="">
        <input type="text" placeholder="" name="search">
        <button class="side-search-submit" type="submit"><i class="bi bi-search"></i></button>
      </form>
    </div>

    <div class="side-list">
      <a href="#">키워드 뉴스</a>
      <a href="#">분석 보고서</a>
      <a href="#">대시보드</a>
      <a href="#">시맨틱 검색</a>
    </div>
  </div>


</nav>

<div class="navbar-p navbar navbar-light navbar-md-none">
  <div class="container-fluid">
    <div class="row">

      <div class="col-lg-3 col-xl-3 col-xxl-3">
        <div class="navbar-logo">
          <img class="logo" src="assets/img/logo/kb_logo.png" />
        </div>
      </div>

      <div class="col-lg-4 col-xl-5 col-xxl-6">
        <div class="nav-search">
          <form class="example" action="">
            <input type="text" placeholder="" name="search">
            <button type="submit"><i class="bi bi-search"></i></button>
          </form>
        </div>
        <h4 class="search-desc">문장이나 단락을 통해 의도를 이해하는 <b>시맨틱 검색</b>을 경험해 보세요</h4>
      </div>

      <div class="col-lg-5 col-xl-4 col-xxl-3">
        <div class="navbar-right">
          <ul class="nav-list">
            <li class="nav-item">
              <a href="#">키워드 뉴스</a>
            </li>
            <li class="nav-item">
              <a href="#">대시보드</a>
            </li>
            <li class="nav-item">
              <a href="#">분석보고서</a>
            </li>
            <li class="nav-item">
              <a href="#">시멘틱검색</a>
            </li>
          </ul>

          <div class="dropdown">
            <button type="button" id="comm-dropdown-2" data-bs-toggle="dropdown" aria-expanded="false">
              <span class="my-img"></span>
            </button>

            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="comm-dropdown-2">
              <div class="row">
                <div class="col-12">
                  <div class="my-info">
                    <span class="my-img"></span>
                    <h5>MS00000</h5>
                  </div>
                </div>

                <div class="col-12">
                  <div class="my-box">
                    <h5>나의 키워드<span class="edit">edit</span></h5>
                    <div class="keyword-box">
                      <span>#KB국민카드</span><span>COVID-19</span><span>올댓카드</span><span>#KB국민카드</span><span>#KB국민카드</span>
                    </div>
                  </div>
                </div>

                <div class="col-12">
                  <div class="my-list">
                    <h5>좋아요 표시한 콘텐츠</h5>
                    <ul>
                      <li><a href="#">대시보드</a></li>
                      <li><a href="#">분석보고서</a></li>
                      <li><a href="#">키워드 뉴스</a></li>
                    </ul>
                  </div>
                </div>

                <div class="col-12">
                  <div class="my-list">
                    <h5>구독한 콘텐츠</h5>
                    <ul>
                      <li><a href="#">대시보드</a></li>
                      <li><a href="#">분석보고서</a></li>
                      <li><a href="#">키워드 뉴스</a></li>
                    </ul>
                  </div>
                </div>

                <div class="col-12">
                  <div class="my-list border-0">
                    <h5>관리자</h5>
                    <ul>
                      <li><a href="#">추천 키워드 설정</a></li>
                      <li><a href="#">뉴스 콘텐츠 관리</a></li>
                      <li><a href="#">시맨틱 콘텐츠 관리</a></li>
                      <li><a href="#">대시보드 작성</a></li>
                      <li><a href="#">보고서 작성</a></li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  </div>

</div>`;
}