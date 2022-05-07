<template>
    <div class="contents">
		<div class="container-fluid">
			<div class="social-dash-wrap">
				<div class="row">
					<div class="col-lg-12">
						<div class="breadcrumb-main">
							<ul class="atbd-breadcrumb nav">
								<li class="atbd-breadcrumb__item">
									<router-link to="/">
										Dashboard
									</router-link>
									<span class="breadcrumb__seperator">
										<span class="la la-slash"></span>
									</span>
								</li>
								<li class="atbd-breadcrumb__item">
									<router-link to="/companies/manage"
										>Bid Bonds</router-link
									>
									<span class="breadcrumb__seperator">
										<span class="la la-slash"></span>
									</span>
								</li>
								<li class="atbd-breadcrumb__item">
									<router-link to="#">Unassigned</router-link>
								</li>
							</ul>
						</div>

                        <div class="row">
                            <div class="col-md-6">
                                <h4 class="text-capitalize breadcrumb-title mb-4">
                                    Bid Bonds Overview
                                </h4>
                            </div>
                            <div class="col-md-6 text-right">
                                <button
                                    class="btn btn-sm btn-warning d-inline-block mt-1 mr-1"
                                >
                                    Assign Reference No.
                                </button>
                            </div>
                        </div>
					</div>
				</div>

                <div class="row mt-4">

                    <div class="col-lg-4 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="mb-2">Tender Information</h5>
                                <h6 class="text-blue">Beneficiary</h6>
                                <p>Lorem ipsum dolor sit amet</p>
                                
                                <h6 class="text-blue">Tender Number</h6>
                                <p>Lorem ipsum dolor sit amet</p>

                                <h6 class="text-blue">Beneficiary</h6>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum facere fugit dolore temporibus animi, dolorem iste, aliquam ullam nam, recusandae repudiandae minus consequatur similique amet at? Amet quibusdam sunt qui!</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="mb-2">Company / Customer's Information</h5>
                                <h6 class="text-blue">Company</h6>
                                <p>Lorem ipsum dolor sit amet</p>

                                <h6 class="text-blue">Customer</h6>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum facere fugit dolore temporibus animi, dolorem iste, aliquam ullam nam, recusandae repudiandae minus consequatur similique amet at? Amet quibusdam sunt qui!</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="mb-2">Reference Number</h5>
                                <h6 class="text-blue">Beneficiary</h6>
                                <p>Lorem ipsum dolor sit amet</p>

                                <h6 class="text-blue">Amount</h6>
                                <p>Lorem ipsum dolor sit amet</p>

                                <h6 class="text-blue">Validity Period</h6>
                                <p>Lorem ipsum dolor sit amet</p>

                                <h6 class="text-blue">Charges</h6>
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                    </div>

                </div>
			</div>
        </div>
    </div>
</template>