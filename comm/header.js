$(function () {
  $('#gnb_header').append(gnb_header());
});


function gnb_header() {
  return `<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <button class="btn p-0 justify-content-start d-lg-none" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="justify-content-center justify-content-lg-start">
      <img class="logo" src="assets/img/logo/kb_logo.png" />
    </div>

    <!--
    <div class="d-sm-none d-lg-inline-block justify-content-lg-center">
      <form class="search">
        <span class="position-absolute search-icon">
          <i class="fe fe-search"></i>
        </span>
        <input type="search" class="form-control ps-6" placeholder="문장이나 단락을 통해 의도를 이해하는 시멘틱 검색을 경험해보세요">
      </form>
    </div>-->

    <div class="justify-content-end align-items-center f-left d-flex">
      <ul class="navbar-nav flex-lg-nowrap">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">키워드 뉴스</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">대시보드</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">분석보고서</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">시멘틱검색</a>
        </li>
      </ul>
      <div class="my-profile">
        <div class="dropdown avatar avatar-sm">
          <a href="#" role="button" id="profile-link" data-bs-toggle="dropdown" aria-expanded="false">
            <img alt="avatar profile-img" src="./assets/img/ex.png" class="radius-50" />
          </a>

          <div class="dropdown-menu" aria-labelledby="profile-link">
            <div class="row">
              <div class="col-12">
                <div class="profile-img">
                  <div class="avatar avatar-sm f-left">
                    <img alt="avatar profile-img" src="./assets/img/ex.png" class="radius-50" />
                  </div>
                  <div class="profile-info">
                    <h5>홍길동 차장</h5>
                    <p>데이터 혁신부</p>
                  </div>
                </div>
              </div>
              <div class="col-12 pt-1">
                <h5 class="fs-16 fw-bold pt-2 pb-1">나의 키워드<span class="edit">edit</span></h5>
                <div class="keyword-box">
                  <ul class="my-keyword-list">
                    <li><span>#</span>KB국민카드</li>
                    <li><span>#</span>COVID-19</li>
                    <li><span>#</span>2022년도 경제전망</li>
                  </ul>
                </div>
              </div>
              <div class="col-12">
                <div class="my-list">
                  <h5>좋아요 표시한 콘텐츠</h5>
                  <ul>
                    <li>대시보드</li>
                    <li>분석보고서</li>
                    <li>키워드 뉴스</li>
                  </ul>
                </div>
              </div>
              <div class="col-12">
                <div class="my-list">
                  <h5>구독한 콘텐츠</h5>
                  <ul>
                    <li>대시보드</li>
                    <li>분석보고서</li>
                    <li>키워드 뉴스</li>
                  </ul>
                </div>
              </div>
              <div class="col-12">
                <div class="my-list border-0">
                  <h5>관리자</h5>
                  <ul>
                    <li>추천 키워드 설정</li>
                    <li>뉴스 콘텐츠 관리</li>
                    <li>시맨틱 콘텐츠 관리</li>
                    <li>대시보드 작성</li>
                    <li>보고서 작성</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
              aria-expanded="true" aria-controls="collapseOne">
              키워드뉴스
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <ul>
                <li>예시</li>
                <li>예시</li>
                <li>예시</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              대시보드
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample">
            <div class="accordion-body"></div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              분석보고서
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
            data-bs-parent="#accordionExample">
            <div class="accordion-body"></div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              시멘틱검색
            </button>
          </h2>
          <div id="headingFour" class="accordion-collapse collapse" aria-labelledby="headingThree"
            data-bs-parent="#accordionExample">
            <div class="accordion-body"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

</nav>`;
}