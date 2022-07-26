import Link from "next/link";


export default function Header() {


  return (
    <>
      <div className="app-header header">
					<div className="container-fluid">
						<div className="d-flex">

							<Link  href="#"><a aria-label="Hide Sidebar" className="app-sidebar__toggle" data-bs-toggle="sidebar"></a></Link>

							<Link  href="/">
							   <a class="nav-link icon full-screen-link mt-2 nav-link-bg" target="_blank"><i class="fe fe-globe"></i></a>
							</Link>
							

							<Link href="#">
                                <a className="header-brand1 d-flex d-md-none"><img src="/assets/images/brand/logo.png" className="header-brand-img desktop-logo" alt="logo" /></a>
                            </Link>
							<div className="main-header-center ms-3 d-none d-md-block">
								<input className="form-control" placeholder="Search for anything..." type="search" /> <button className="btn"><i className="fa fa-search" aria-hidden="true"></i></button>
							</div>
							<div className="d-flex order-lg-2 ms-auto header-right-icons">
								<div className="dropdown d-lg-none d-md-block d-none">
									<Link href="#"> 
										<a className="nav-link icon" data-bs-toggle="dropdown"><i className="fe fe-search"></i></a>
									</Link>
									<div className="dropdown-menu header-search dropdown-menu-start">
										<div className="input-group w-100 p-2">
											<input type="text" className="form-control" placeholder="Search...." />
											<div className="input-group-text btn btn-primary">
												<i className="fa fa-search" aria-hidden="true"></i>
											</div>
										</div>
									</div>
								</div>
								<button className="navbar-toggler navresponsive-toggler d-md-none ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
									<span className="navbar-toggler-icon fe fe-more-vertical text-dark"></span>
								</button>
								<div className="dropdown d-none d-md-flex">
									<Link href="#"> 
										<a className="nav-link icon theme-layout nav-link-bg layout-setting">
											<span className="dark-layout" data-bs-placement="bottom" data-bs-toggle="tooltip" title="Dark Theme"><i className="fe fe-moon"></i></span>
										    <span className="light-layout" data-bs-placement="bottom" data-bs-toggle="tooltip" title="Light Theme"><i className="fe fe-sun"></i></span>
										</a>
									</Link>
								</div>
								<div className="dropdown d-none d-md-flex">
									<Link href="#"> 
										<a className="nav-link icon full-screen-link nav-link-bg"><i className="fe fe-minimize fullscreen-button"></i></a>
									</Link>
								</div>
								<div className="dropdown d-none d-md-flex notifications">
									<Link href="#">
										<a className="nav-link icon" data-bs-toggle="dropdown"><i className="fe fe-bell"></i><span className="pulse"></span></a>
									</Link>
									<div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow ">
										<div className="drop-heading border-bottom">
											<div className="d-flex">
												<h6 className="mt-1 mb-0 fs-16 fw-semibold">You have Notification</h6>
												<div className="ms-auto">
													<span className="badge bg-success rounded-pill">3</span>
												</div>
											</div>
										</div>
										<div className="notifications-menu">
											<Link href="#"> 
                                                <a className="dropdown-item d-flex">
                                                <div className="me-3 notifyimg  bg-primary-gradient brround box-shadow-primary">
                                                        <i className="fe fe-message-square"></i>
                                                    </div>
                                                    <div className="mt-1">
                                                        <h5 className="notification-label mb-1">New review received</h5>
                                                        <span className="notification-subtext">2 hours ago</span>
                                                    </div>
                                                </a>
											</Link>
											<Link href="#">
                                                <a className="dropdown-item d-flex">
                                                    <div className="me-3 notifyimg  bg-secondary-gradient brround box-shadow-primary">
                                                        <i className="fe fe-mail"></i>
                                                    </div>
                                                    <div className="mt-1">
                                                        <h5 className="notification-label mb-1">New Mails Received</h5>
                                                        <span className="notification-subtext">1 week ago</span>
                                                    </div>
                                                </a> 											
											</Link>
											<Link href="#">
                                                <a  className="dropdown-item d-flex">
                                                    <div className="me-3 notifyimg  bg-success-gradient brround box-shadow-primary">
                                                        <i className="fe fe-shopping-cart"></i>
                                                    </div>
                                                    <div className="mt-1">
                                                        <h5 className="notification-label mb-1">New Order Received</h5>
                                                        <span className="notification-subtext">1 day ago</span>
                                                    </div>
                                                </a> 											
											</Link>
										</div>
										<div className="dropdown-divider m-0"></div>
										<Link href="#" className="dropdown-item text-center p-3 text-muted"><a>View all Notification</a></Link>
									</div>
								</div>
								<div className="dropdown  d-none d-md-flex message">
									<Link href="#"> 
										<a className="nav-link icon text-center" data-bs-toggle="dropdown"><i className="fe fe-message-square"></i><span className=" pulse-danger"></span></a>
									</Link>
									<div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
										<div className="drop-heading border-bottom">
											<div className="d-flex">
												<h6 className="mt-1 mb-0 fs-16 fw-semibold"><a>You have Messages</a></h6>
												<div className="ms-auto">
													<span className="badge bg-danger rounded-pill">4</span>
												</div>
											</div>
										</div>
										<div className="message-menu">
											<Link href="chat">
                                                <a className="dropdown-item d-flex">
                                                    <span className="avatar avatar-md brround me-3 align-self-center cover-image" data-bs-image-src="/assets/images/users/1.jpg"></span>
                                                    <div className="wd-90p">
                                                        <div className="d-flex">
                                                            <h5 className="mb-1">Madeleine</h5>
                                                            <small className="text-muted ms-auto text-end">
                                                                3 hours ago
                                                            </small>
                                                        </div>
                                                        <span>Hey! there I' am available....</span>
                                                    </div>
                                                </a>
											</Link>
											<Link href="chat">
                                                <a className="dropdown-item d-flex">
                                                    <span className="avatar avatar-md brround me-3 align-self-center cover-image" data-bs-image-src="/assets/images/users/12.jpg"></span>
                                                    <div className="wd-90p">
                                                        <div className="d-flex">
                                                            <h5 className="mb-1">Anthony</h5>
                                                            <small className="text-muted ms-auto text-end">
                                                                5 hour ago
                                                            </small>
                                                        </div>
                                                        <span>New product Launching...</span>
                                                    </div>
                                                </a>											
											</Link>
											<Link href="chat">
                                                <a className="dropdown-item d-flex">
                                                    <span className="avatar avatar-md brround me-3 align-self-center cover-image" data-bs-image-src="/assets/images/users/4.jpg"></span>
                                                    <div className="wd-90p">
                                                        <div className="d-flex">
                                                            <h5 className="mb-1">Olivia</h5>
                                                            <small className="text-muted ms-auto text-end">
                                                                45 mintues ago
                                                            </small>
                                                        </div>
                                                        <span>New Schedule Realease......</span>
                                                    </div>
                                                </a>											
											</Link>
											<Link href="chat">
                                                <a className="dropdown-item d-flex">
                                                    <span className="avatar avatar-md brround me-3 align-self-center cover-image" data-bs-image-src="/assets/images/users/15.jpg"></span>
                                                    <div className="wd-90p">
                                                        <div className="d-flex">
                                                            <h5 className="mb-1">Sanderson</h5>
                                                            <small className="text-muted ms-auto text-end">
                                                                2 days ago
                                                            </small>
                                                        </div>
                                                        <span>New Schedule Realease......</span>
                                                    </div>
                                                </a>
											</Link>
										</div>
										<div className="dropdown-divider m-0"></div>
										<Link href="#" ><a className="dropdown-item text-center p-3 text-muted">See all Messages</a></Link>
									</div>
								</div>
								<div className="dropdown d-none d-md-flex profile-1">
									<Link href="#"> 
										<a data-bs-toggle="dropdown" className="nav-link pe-2 leading-none d-flex">
										<span>
											<img src="/assets/images/users/8.jpg" alt="profile-user" className="avatar  profile-user brround cover-image" />
										</span>
										</a>
									</Link>
									<div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
										<div className="drop-heading">
											<div className="text-center">
												<h5 className="text-dark mb-0">Elizabeth Dyer</h5>
												<small className="text-muted">Administrator</small>
											</div>
										</div>
										<div className="dropdown-divider m-0"></div>
										<Link href="profile"> 
											<a className="dropdown-item"><i className="dropdown-icon fe fe-user"></i>Profile</a>
										</Link>
										<Link href="email">
                                            <a className="dropdown-item">
                                                <i className="dropdown-icon fe fe-mail"></i> Inbox
                                                <span className="badge bg-primary float-end">3</span>
                                            </a>
										</Link>
										<Link href="emailservices">
											<a className="dropdown-item"><i className="dropdown-icon fe fe-settings"></i>Settings</a>
										</Link>
										<Link href="faq"> 
											<a className="dropdown-item"><i className="dropdown-icon fe fe-alert-triangle"></i>Need help??</a>
										</Link>
										<Link href="login"> 
											<a className="dropdown-item"><i className="dropdown-icon fe fe-alert-circle"></i>Sign out</a>
										</Link>
									</div>
								</div>
								<div className="dropdown d-none d-md-flex header-settings">
									<Link href="#"> 
										<a className="nav-link icon" data-bs-toggle="sidebar-right" data-target=".sidebar-right"><i className="fe fe-menu"></i></a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mb-1 navbar navbar-expand-lg  responsive-navbar navbar-dark d-md-none bg-red">
					<div className="collapse navbar-collapse" id="navbarSupportedContent-4">
						<div className="d-flex order-lg-2 ms-auto">
							
							<div className="dropdown d-sm-flex">
								<Link href="#"> 
									<a className="nav-link icon" data-bs-toggle="dropdown"><i className="fe fe-search"></i></a>
								</Link>
								<div className="dropdown-menu header-search dropdown-menu-start">
									<div className="input-group w-100 p-2">
										<input type="text" className="form-control" placeholder="Search...." />
										<div className="input-group-text btn btn-primary">
											<i className="fa fa-search" aria-hidden="true"></i>
										</div>
									</div>
								</div>
							</div>
							<div className="dropdown d-md-flex">
								<Link href="#">
                                    <a className="nav-link icon theme-layout nav-link-bg layout-setting">
                                        <span className="dark-layout" data-bs-placement="bottom" data-bs-toggle="tooltip" title="Dark Theme"><i className="fe fe-moon"></i></span>
                                        <span className="light-layout" data-bs-placement="bottom" data-bs-toggle="tooltip" title="Light Theme"><i className="fe fe-sun"></i></span>
                                    </a>								
								</Link>
							</div>
							<div className="dropdown d-md-flex">
								<Link href="#"> 
									<a className="nav-link icon full-screen-link nav-link-bg"><i className="fe fe-minimize fullscreen-button"></i></a>
								</Link>
							</div>
							<div className="dropdown  d-md-flex notifications">
								<Link href="#"><a className="nav-link icon" data-bs-toggle="dropdown"><i className="fe fe-bell"></i><span className=" pulse"></span></a></Link>
								<div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
									<div className="drop-heading border-bottom">
										<div className="d-flex">
											<h6 className="mt-1 mb-0 fs-16 fw-semibold">You have Notification</h6>
											<div className="ms-auto">
												<span className="badge bg-success rounded-pill">3</span>
											</div>
										</div>
									</div>
									<div className="notifications-menu">
										<Link href="chat">
                                            <a className="dropdown-item d-flex">
                                                <div className="me-3 notifyimg  bg-primary-gradient brround box-shadow-primary">
                                                    <i className="fe fe-message-square"></i>
                                                </div>
                                                <div className="mt-1">
                                                    <h5 className="notification-label mb-1">New review received</h5>
                                                    <span className="notification-subtext">2 hours ago</span>
                                                </div>
                                            </a>										
										</Link>
										<Link href="chat">
                                            <a className="dropdown-item d-flex">
                                                <div className="me-3 notifyimg  bg-secondary-gradient brround box-shadow-primary">
                                                    <i className="fe fe-mail"></i>
                                                </div>
                                                <div className="mt-1">
                                                    <h5 className="notification-label mb-1">New Mails Received</h5>
                                                    <span className="notification-subtext">1 week ago</span>
                                                </div>
                                            </a>										
										</Link>
										<Link href="cart">
                                            <a className="dropdown-item d-flex">
                                                <div className="me-3 notifyimg  bg-success-gradient brround box-shadow-primary">
                                                    <i className="fe fe-shopping-cart"></i>
                                                </div>
                                                <div className="mt-1">
                                                    <h5 className="notification-label mb-1">New Order Received</h5>
                                                    <span className="notification-subtext">1 day ago</span>
                                                </div>
                                            </a>
										</Link>
									</div>
									<div className="dropdown-divider m-0"></div>
									<Link href="#"><a className="dropdown-item text-center p-3 text-muted">View all Notification</a></Link>
								</div>
							</div>
							<div className="dropdown d-md-flex message">
								<Link href="#">
									<a className="nav-link icon text-center" data-bs-toggle="dropdown"><i className="fe fe-message-square"></i><span className=" pulse-danger"></span></a>
								</Link>
								<div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
									<div className="drop-heading border-bottom">
										<div className="d-flex">
											<h6 className="mt-1 mb-0 fs-16 fw-semibold">You have Messages</h6>
											<div className="ms-auto">
												<span className="badge bg-danger rounded-pill">4</span>
											</div>
										</div>
									</div>
									<div className="message-menu">
										<Link href="chat">
                                            <a className="dropdown-item d-flex">
                                                <span className="avatar avatar-md brround me-3 align-self-center cover-image" data-bs-image-src="/assets/images/users/1.jpg"></span>
                                                <div className="wd-90p">
                                                    <div className="d-flex">
                                                        <h5 className="mb-1">Madeleine</h5>
                                                        <small className="text-muted ms-auto text-end">
                                                            3 hours ago
                                                        </small>
                                                    </div>
                                                    <span>Hey! there I' am available....</span>
                                                </div>
                                            </a>
										</Link>
										<Link href="chat"> 
											<a className="dropdown-item d-flex">
												<span className="avatar avatar-md brround me-3 align-self-center cover-image" data-bs-image-src="/assets/images/users/12.jpg"></span>
													<div className="wd-90p">
														<div className="d-flex">
															<h5 className="mb-1">Anthony</h5>
															<small className="text-muted ms-auto text-end">
																5 hour ago
															</small>
														</div>
														<span>New product Launching...</span>
													</div>
											</a>
										</Link>
										<Link href="chat">
                                            <a className="dropdown-item d-flex">
                                                <span className="avatar avatar-md brround me-3 align-self-center cover-image" data-bs-image-src="/assets/images/users/4.jpg"></span>
                                                <div className="wd-90p">
                                                    <div className="d-flex">
                                                        <h5 className="mb-1">Olivia</h5>
                                                        <small className="text-muted ms-auto text-end">
                                                            45 mintues ago
                                                        </small>
                                                    </div>
                                                    <span>New Schedule Realease......</span>
                                                </div>
                                            </a>
										</Link>
										<Link href="chat">
                                            <a className="dropdown-item d-flex">
                                                <span className="avatar avatar-md brround me-3 align-self-center cover-image" data-bs-image-src="/assets/images/users/15.jpg"></span>
                                                <div className="wd-90p">
                                                    <div className="d-flex">
                                                        <h5 className="mb-1">Sanderson</h5>
                                                        <small className="text-muted ms-auto text-end">
                                                            2 days ago
                                                        </small>
                                                    </div>
                                                    <span>New Schedule Realease......</span>
                                                </div>
                                            </a>
										</Link>
									</div>
									<div className="dropdown-divider m-0"></div>
									<Link href="#"><a className="dropdown-item text-center p-3 text-muted">See all Messages</a></Link>
								</div>
							</div>
							<div className="dropdown d-md-flex profile-1">
								<Link href="#">
									<a data-bs-toggle="dropdown" className="nav-link pe-2 leading-none d-flex">
									<span>
										<img src="/assets/images/users/8.jpg" alt="profile-user" className="avatar  profile-user brround cover-image" />
									</span>
									</a>
								</Link>
								<div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
									<div className="drop-heading">
										<div className="text-center">
											<h5 className="text-dark mb-0">Elizabeth Dyer</h5>
											<small className="text-muted">Administrator</small>
										</div>
									</div>
									<div className="dropdown-divider m-0"></div>
									<Link href="profile"> 
                                       <a className="dropdown-item"><i className="dropdown-icon fe fe-user"></i>Profile</a>
									</Link>
									<Link href="email">
                                        <a className="dropdown-item">
                                            <i className="dropdown-icon fe fe-mail"></i> Inbox
                                            <span className="badge bg-primary float-end">3</span>
                                        </a>
									</Link>
									<Link href="emailservices"> 
										<a className="dropdown-item"><i className="dropdown-icon fe fe-settings"></i>Settings</a>
									</Link>
									<Link href="faq"> 
										<a className="dropdown-item"><i className="dropdown-icon fe fe-alert-triangle"></i> Need help?</a>
									</Link>
									<Link href="login">
										<a className="dropdown-item"><i className="dropdown-icon fe fe-alert-circle"></i> Sign out</a>
									</Link>
								</div>
							</div>
							<div className="dropdown d-md-flex header-settings">
								<Link href="#"> 
									<a className="nav-link icon" data-bs-toggle="sidebar-right" data-target=".sidebar-right"><i className="fe fe-menu"></i></a>
								</Link>
							</div>
						</div>
					</div>
				</div>
    </>
  );
}
