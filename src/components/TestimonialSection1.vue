<script setup lang="ts">

const props = defineProps({
  data: {
    type: Object as () => {
      title: string;
      description?: string;  // Optional property
      class?: string;        // Optional property
    },
    required: true  
  }
});
</script>
<template>
      <section class="content-inner-1" :class="class">
      <div class="container">
        <div class="section-head style-1 m-b30 text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
          <h2 class="title">{{ data.title || 'Have any questions?' }}</h2>
          <p>{{ data.description || '' }}</p>
        </div>
        <div class="row justify-content-center">
          <div class="col-xl-6 col-lg-8 m-b40 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
            <div class="search_widget">
              <form class="dzSearch">
                <div class="form-group">
                  <div class="input-group mb-0">
                    <input name="dzSearch" type="search" class="form-control" placeholder="Type your question here">
                    <div class="input-group-addon">
                      <button name="dzSearch" value="search" class="btn">
                        <i class="icon feather icon-search"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-xl-10">
            <ul class="nav nav-pills nav-pills-outline m-b50 justify-content-center wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link outline active" id="pills-tab1" data-bs-toggle="pill" data-bs-target="#pills-target-tabs1" type="button" role="tab" aria-controls="pills-tab1" aria-selected="true">Dental Care</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-tab2" data-bs-toggle="pill" data-bs-target="#pills-target-tabs2" type="button" role="tab" aria-controls="pills-tab2" aria-selected="false">Cosmetic Dentistry</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-tab3" data-bs-toggle="pill" data-bs-target="#pills-target-tabs3" type="button" role="tab" aria-controls="pills-tab3" aria-selected="false">Dental Technology</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-tab4" data-bs-toggle="pill" data-bs-target="#pills-target-tabs4" type="button" role="tab" aria-controls="pills-tab4" aria-selected="false">Smile Care</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-tab5" data-bs-toggle="pill" data-bs-target="#pills-target-tabs5" type="button" role="tab" aria-controls="pills-tab5" aria-selected="false">Teeth Whitening</button>
              </li>
            </ul>
            <div class="tab-content wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s" id="pills-tabContent">
              <div class="tab-pane fade show active" id="pills-target-tabs1" role="tabpanel" aria-labelledby="pills-tab1" tabindex="0">
                <div class="accordion dz-accordion style-1" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> How much do you charge for pedicure ? </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> What types of treatments do you offer? </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> How do i book my appointment ? </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"> Can i cancel my appointment </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="pills-target-tabs2" role="tabpanel" aria-labelledby="pills-tab2" tabindex="0">
                <div class="accordion dz-accordion style-1" id="accordionExample2">
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne2" aria-expanded="true" aria-controls="collapseOne2"> How much do you charge for pedicure ? </button>
                    </h2>
                    <div id="collapseOne2" class="accordion-collapse collapse show" data-bs-parent="#accordionExample2">
                      <div class="accordion-body">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2"> What types of treatments do you offer? </button>
                    </h2>
                    <div id="collapseTwo2" class="accordion-collapse collapse" data-bs-parent="#accordionExample2">
                      <div class="accordion-body">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree2" aria-expanded="false" aria-controls="collapseThree2"> How do i book my appointment ? </button>
                    </h2>
                    <div id="collapseThree2" class="accordion-collapse collapse" data-bs-parent="#accordionExample2">
                      <div class="accordion-body">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour2" aria-expanded="false" aria-controls="collapseFour2"> Can i cancel my appointment </button>
                    </h2>
                    <div id="collapseFour2" class="accordion-collapse collapse" data-bs-parent="#accordionExample2">
                      <div class="accordion-body">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="pills-target-tabs3" role="tabpanel" aria-labelledby="pills-tab3" tabindex="0">
                <div class="accordion dz-accordion style-1" id="accordionExample3">
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne3" aria-expanded="true" aria-controls="collapseOne3"> How much do you charge for pedicure ? </button>
                    </h2>
                    <div id="collapseOne3" class="accordion-collapse collapse show" data-bs-parent="#accordionExample3">
                      <div class="accordion-body">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo3" aria-expanded="false" aria-controls="collapseTwo3"> What types of treatments do you offer? </button>
                    </h2>
                    <div id="collapseTwo3" class="accordion-collapse collapse" data-bs-parent="#accordionExample3">
                      <div class="accordion-body">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree3" aria-expanded="false" aria-controls="collapseThree3"> How do i book my appointment ? </button>
                    </h2>
                    <div id="collapseThree3" class="accordion-collapse collapse" data-bs-parent="#accordionExample3">
                      <div class="accordion-body">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour3" aria-expanded="false" aria-controls="collapseFour3"> Can i cancel my appointment </button>
                    </h2>
                    <div id="collapseFour3" class="accordion-collapse collapse" data-bs-parent="#accordionExample3">
                      <div class="accordion-body">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="pills-target-tabs4" role="tabpanel" aria-labelledby="pills-tab4" tabindex="0">
                <div class="accordion dz-accordion style-1" id="accordionExample4">
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne4" aria-expanded="true" aria-controls="collapseOne4"> How much do you charge for pedicure ? </button>
                    </h2>
                    <div id="collapseOne4" class="accordion-collapse collapse show" data-bs-parent="#accordionExample4">
                      <div class="accordion-body">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo4" aria-expanded="false" aria-controls="collapseTwo4"> What types of treatments do you offer? </button>
                    </h2>
                    <div id="collapseTwo4" class="accordion-collapse collapse" data-bs-parent="#accordionExample4">
                      <div class="accordion-body">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree4" aria-expanded="false" aria-controls="collapseThree4"> How do i book my appointment ? </button>
                    </h2>
                    <div id="collapseThree4" class="accordion-collapse collapse" data-bs-parent="#accordionExample4">
                      <div class="accordion-body">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour4" aria-expanded="false" aria-controls="collapseFour4"> Can i cancel my appointment </button>
                    </h2>
                    <div id="collapseFour4" class="accordion-collapse collapse" data-bs-parent="#accordionExample4">
                      <div class="accordion-body">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="pills-target-tabs5" role="tabpanel" aria-labelledby="pills-tab5" tabindex="0">
                <div class="accordion dz-accordion style-1" id="accordionExample5">
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne5" aria-expanded="true" aria-controls="collapseOne5"> How much do you charge for pedicure ? </button>
                    </h2>
                    <div id="collapseOne5" class="accordion-collapse collapse show" data-bs-parent="#accordionExample5">
                      <div class="accordion-body">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo5" aria-expanded="false" aria-controls="collapseTwo5"> What types of treatments do you offer? </button>
                    </h2>
                    <div id="collapseTwo5" class="accordion-collapse collapse" data-bs-parent="#accordionExample5">
                      <div class="accordion-body">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree5" aria-expanded="false" aria-controls="collapseThree5"> How do i book my appointment ? </button>
                    </h2>
                    <div id="collapseThree5" class="accordion-collapse collapse" data-bs-parent="#accordionExample5">
                      <div class="accordion-body">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour5" aria-expanded="false" aria-controls="collapseFour5"> Can i cancel my appointment </button>
                    </h2>
                    <div id="collapseFour5" class="accordion-collapse collapse" data-bs-parent="#accordionExample5">
                      <div class="accordion-body">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>