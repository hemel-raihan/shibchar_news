import Link from "next/link";


export default function LeftSidebar() {
  

  return (
    <>
      <div className="app-sidebar__overlay" data-bs-toggle="sidebar"></div>
				<aside className="app-sidebar">
					<div className="side-header">
						<Link className="header-brand1" href="index">
                            <a>
                                <img src="/assets/images/brand/logo.png" className="header-brand-img desktop-logo" alt="logo" />
                                <img src="/assets/images/brand/logo-1.png" className="header-brand-img toggle-logo" alt="logo" />
                                <img src="/assets/images/brand/logo-2.png" className="header-brand-img light-logo" alt="logo" />
                                <img src="/assets/images/brand/logo-3.png" className="header-brand-img light-logo1" alt="logo" />
                            </a>
						</Link>
					</div>
					<ul className="side-menu">
						<li><h3>Main</h3></li>
						<li className="slide">
							<Link  href="index">
                                <a className="side-menu__item"  data-bs-toggle="slide"><i className="side-menu__icon fe fe-home"></i><span className="side-menu__label">Dashboard</span></a>
                            </Link>
						</li>
						<li><h3>Widgets & Maps</h3></li>
						<li>
							<Link href="https://www.youtube.com/watch?v=AokOS3ECMm0" >
                                <a className="side-menu__item"><i className="side-menu__icon fe fe-grid"></i><span className="side-menu__label">Widgets</span></a>
                            </Link>
						</li>
						<li className="slide">
							<Link href="#" >
                                <a className="side-menu__item" data-bs-toggle="slide"><i className="side-menu__icon fe fe-globe"></i><span className="side-menu__label">Maps</span><i className="angle fa fa-angle-right"></i></a>
                            </Link>
							<ul className="slide-menu">
								<li><Link href="maps1"><a className="slide-item">Leaflet Maps</a></Link></li>
								<li><Link href="maps2"><a className="slide-item">Mapel Maps</a></Link></li>
								<li><Link href="maps"><a className="slide-item">Vector Maps</a></Link></li>
							</ul>
						</li>
						<li><h3>Elements</h3></li>
						<li className="slide">
							<Link href="#">
                                <a className="side-menu__item" data-bs-toggle="slide"><i className="side-menu__icon fe fe-database"></i><span className="side-menu__label">Components</span><i className="angle fa fa-angle-right"></i></a>
                            </Link>
							<ul className="slide-menu">
								<li><Link href="cards"><a className="slide-item">Cards design</a></Link></li>
								<li><Link href="calendar"><a className="slide-item">Default calendar</a></Link></li>
								<li><Link href="calendar2"><a  className="slide-item">Full calendar</a></Link></li>
								<li><Link href="chat"><a className="slide-item">Default Chat</a></Link></li>
								<li><Link href="notify"><a className="slide-item">Notifications</a></Link></li>
								<li><Link href="sweetalert"><a className="slide-item">Sweet alerts</a></Link></li>
								<li><Link href="rangeslider"><a className="slide-item">Range slider</a></Link></li>
								<li><Link href="scroll"><a className="slide-item">Content Scroll bar</a></Link></li>
								<li><Link href="loaders"><a className="slide-item">Loaders</a></Link></li>
								<li><Link href="counters"><a className="slide-item">Counters</a></Link></li>
								<li><Link href="rating"><a className="slide-item">Rating</a></Link></li>
								<li><Link href="timeline"><a className="slide-item">Timeline</a></Link></li>
								<li><Link href="treeview"><a className="slide-item">Treeview</a></Link></li>
							</ul>
						</li>
						<li className="slide">
							<Link href="#">
                                <a className="side-menu__item" data-bs-toggle="slide"><i className="side-menu__icon fe fe-package"></i><span className="side-menu__label">Elements</span><i className="angle fa fa-angle-right"></i></a>
                            </Link>
							<ul className="slide-menu">
								<li><Link href="alerts"><a className="slide-item">Alerts</a></Link></li>
								<li><Link href="buttons"><a className="slide-item">Buttons</a></Link></li>
								<li><Link href="colors"><a className="slide-item">Colors</a></Link></li>
								<li><Link href="avatarsquare"><a className="slide-item">Avatar-Square</a></Link></li>
								<li><Link href="avatar-round"><a className="slide-item">Avatar-Rounded</a></Link></li>
								<li><Link href="avatar-radius"><a className="slide-item">Avatar-Radius</a></Link></li>
								<li><Link href="dropdown"><a className="slide-item">Drop downs</a></Link></li>
								<li><Link href="listpage"><a className="slide-item">List</a></Link></li>
								<li><Link href="tags"><a className="slide-item">Tags</a></Link></li>
								<li><Link href="pagination"><a className="slide-item">Pagination</a></Link></li>
								<li><Link href="navigation"><a className="slide-item">Navigation</a></Link></li>
								<li><Link href="typography"><a className="slide-item">Typography</a></Link></li>
								<li><Link href="breadcrumbs"><a className="slide-item">Breadcrumbs</a></Link></li>
								<li><Link href="badge"><a className="slide-item">Badges</a></Link></li>
								<li><Link href="panels"><a className="slide-item">Panels</a></Link></li>
								<li><Link href="thumbnails"><a className="slide-item">Thumbnails</a></Link></li>
							</ul>
						</li>
						<li className="slide">
							<Link href="#">
                                <a className="side-menu__item" data-bs-toggle="slide"><i className="side-menu__icon fe fe-file"></i><span className="side-menu__label">Advanced Elements</span><i className="angle fa fa-angle-right"></i></a>
                            </Link>
							<ul className="slide-menu">
								<li><Link href="mediaobject"><a className="slide-item">Media Object</a></Link></li>
								<li><Link href="accordion"><a className="slide-item">Accordions</a></Link></li>
								<li><Link href="tabs"><a className="slide-item">Tabs</a></Link></li>
								<li><Link href="chart"><a className="slide-item">Charts</a></Link></li>
								<li><Link href="modal"><a className="slide-item">Modal</a></Link></li>
								<li><Link href="tooltipandpopover"><a className="slide-item">Tooltip and popover</a></Link></li>
								<li><Link href="progress"><a className="slide-item">Progress</a></Link></li>
								<li><Link href="carousel"><a className="slide-item">Carousels</a></Link></li>
								<li><Link href="headers"><a className="slide-item">Headers</a></Link></li>
								<li><Link href="footers"><a className="slide-item">Footers</a></Link></li>
								<li><Link href="users-list"><a className="slide-item">User List</a></Link></li>
								<li><Link href="search"><a className="slide-item">Search</a></Link></li>
								<li><Link href="crypto-currencies"><a className="slide-item">Crypto-currencies</a></Link></li>
							</ul>
						</li>
						<li><h3>Charts & Tables</h3></li>
						<li className="slide">
							<Link href="#">
                                <a className="side-menu__item" data-bs-toggle="slide"><i className="side-menu__icon fe fe-pie-chart"></i><span className="side-menu__label">Charts</span><i className="angle fa fa-angle-right"></i></a>
                            </Link>
							<ul className="slide-menu">
								<li><Link href="chart-chartist"><a className="slide-item">Chart Js</a></Link></li>
								<li><Link href="chart-flot"><a className="slide-item">Flot Charts</a></Link></li>
								<li><Link href="chart-echart"><a className="slide-item">ECharts</a></Link></li>
								<li><Link href="chart-morris"><a className="slide-item">Morris Charts</a></Link></li>
								<li><Link href="chart-nvd3"><a className="slide-item">Nvd3 Charts</a></Link></li>
								<li><Link href="charts"><a className="slide-item">C3 Bar Charts</a></Link></li>
								<li><Link href="chart-line"><a className="slide-item">C3 Line Charts</a></Link></li>
								<li><Link href="chart-donut"><a className="slide-item">C3 Donut Charts</a></Link></li>
								<li><Link href="chart-pie"><a className="slide-item">C3 Pie charts</a></Link></li>
							</ul>
						</li>
						<li className="slide">
							<Link href="#">
								<a className="side-menu__item" data-bs-toggle="slide"><i className="side-menu__icon fe fe-clipboard"></i><span className="side-menu__label">Tables</span><span className="badge bg-secondary side-badge">2</span></a>
							</Link>
							<ul className="slide-menu">
								<li><Link href="tables"><a className="slide-item">Default table</a></Link></li>
								<li><Link href="datatable"><a className="slide-item">Data Tables</a></Link></li>
							</ul>
						</li>
						<li><h3>Forms & Icons</h3></li>
						<li className="slide">
							<Link href="#">
								<a className="side-menu__item" data-bs-toggle="slide"><i className="side-menu__icon fe fe-file-text"></i><span className="side-menu__label">Forms</span><span className="badge bg-success side-badge">5</span></a>
							</Link>
							<ul className="slide-menu">
								<li><Link href="form-elements"><a className="slide-item">Form Elements</a></Link></li>
								<li><Link href="form-advanced"><a className="slide-item">Form Advanced</a></Link></li>
								<li><Link href="wysiwyag"><a className="slide-item">Form Editor</a></Link></li>
								<li><Link href="form-wizard"><a className="slide-item">Form Wizard</a></Link></li>
								<li><Link href="form-validation"><a className="slide-item">Form Validation</a></Link></li>
							</ul>
						</li>
						<li className="slide">
							<Link href="#">
								<a className="side-menu__item" data-bs-toggle="slide"><i className="side-menu__icon fe fe-command"></i><span className="side-menu__label">Icons</span><i className="angle fa fa-angle-right"></i></a>
							</Link>
							<ul className="slide-menu">
								<li><Link href="icons"><a>Font Awesome</a></Link></li>
								<li><Link href="icons2"><a>Material Design Icons</a></Link></li>
								<li><Link href="icons3"><a>Simple Line Icons</a></Link></li>
								<li><Link href="icons4"><a>Feather Icons</a></Link></li>
								<li><Link href="icons5"><a>Ionic Icons</a></Link></li>
								<li><Link href="icons6"><a>Flag Icons</a></Link></li>
								<li><Link href="icons7"><a>pe7 Icons</a></Link></li>
								<li><Link href="icons8"><a>Themify Icons</a></Link></li>
								<li><Link href="icons9"><a>Typicons Icons</a></Link></li>
								<li><Link href="icons10"><a>Weather Icons</a></Link></li>
							</ul>
						</li>
						<li className="slide">
							<Link href="#">
								<a className="side-menu__item" data-bs-toggle="slide"><i className="side-menu__icon fe fe-command"></i><span className="side-menu__label">Icons</span><i className="angle fa fa-angle-right"></i></a>
							</Link>
							<ul className="slide-menu">
								<li><Link href="icons"><a>Font Awesome</a></Link></li>
								<li><Link href="icons2"><a>Material Design Icons</a></Link></li>
								<li><Link href="icons3"><a>Simple Line Icons</a></Link></li>
								<li><Link href="icons4"><a>Feather Icons</a></Link></li>
								<li><Link href="icons5"><a>Ionic Icons</a></Link></li>
								<li><Link href="icons6"><a>Flag Icons</a></Link></li>
								<li><Link href="icons7"><a>pe7 Icons</a></Link></li>
								<li><Link href="icons8"><a>Themify Icons</a></Link></li>
								<li><Link href="icons9"><a>Typicons Icons</a></Link></li>
								<li><Link href="icons10"><a>Weather Icons</a></Link></li>
							</ul>
						</li>
						<li className="slide">
							<Link href="#">
								<a className="side-menu__item" data-bs-toggle="slide"><i className="side-menu__icon fe fe-command"></i><span className="side-menu__label">Icons</span><i className="angle fa fa-angle-right"></i></a>
							</Link>
							<ul className="slide-menu">
								<li><Link href="icons"><a>Font Awesome</a></Link></li>
								<li><Link href="icons2"><a>Material Design Icons</a></Link></li>
								<li><Link href="icons3"><a>Simple Line Icons</a></Link></li>
								<li><Link href="icons4"><a>Feather Icons</a></Link></li>
								<li><Link href="icons5"><a>Ionic Icons</a></Link></li>
								<li><Link href="icons6"><a>Flag Icons</a></Link></li>
								<li><Link href="icons7"><a>pe7 Icons</a></Link></li>
								<li><Link href="icons8"><a>Themify Icons</a></Link></li>
								<li><Link href="icons9"><a>Typicons Icons</a></Link></li>
								<li><Link href="icons10"><a>Weather Icons</a></Link></li>
							</ul>
						</li>
						<li className="slide">
							<Link href="#">
								<a className="side-menu__item" data-bs-toggle="slide"><i className="side-menu__icon fe fe-command"></i><span className="side-menu__label">Icons</span><i className="angle fa fa-angle-right"></i></a>
							</Link>
							<ul className="slide-menu">
								<li><Link href="icons"><a>Font Awesome</a></Link></li>
								<li><Link href="icons2"><a>Material Design Icons</a></Link></li>
								<li><Link href="icons3"><a>Simple Line Icons</a></Link></li>
								<li><Link href="icons4"><a>Feather Icons</a></Link></li>
								<li><Link href="icons5"><a>Ionic Icons</a></Link></li>
								<li><Link href="icons6"><a>Flag Icons</a></Link></li>
								<li><Link href="icons7"><a>pe7 Icons</a></Link></li>
								<li><Link href="icons8"><a>Themify Icons</a></Link></li>
								<li><Link href="icons9"><a>Typicons Icons</a></Link></li>
								<li><Link href="icons10"><a>Weather Icons</a></Link></li>
							</ul>
						</li>
						<li className="slide">
							<Link href="#">
								<a className="side-menu__item" data-bs-toggle="slide"><i className="side-menu__icon fe fe-command"></i><span className="side-menu__label">Icons</span><i className="angle fa fa-angle-right"></i></a>
							</Link>
							<ul className="slide-menu">
								<li><Link href="icons"><a>Font Awesome</a></Link></li>
								<li><Link href="icons2"><a>Material Design Icons</a></Link></li>
								<li><Link href="icons3"><a>Simple Line Icons</a></Link></li>
								<li><Link href="icons4"><a>Feather Icons</a></Link></li>
								<li><Link href="icons5"><a>Ionic Icons</a></Link></li>
								<li><Link href="icons6"><a>Flag Icons</a></Link></li>
								<li><Link href="icons7"><a>pe7 Icons</a></Link></li>
								<li><Link href="icons8"><a>Themify Icons</a></Link></li>
								<li><Link href="icons9"><a>Typicons Icons</a></Link></li>
								<li><Link href="icons10"><a>Weather Icons</a></Link></li>
							</ul>
						</li>
						<li className="slide">
							<Link href="#">
								<a className="side-menu__item" data-bs-toggle="slide"><i className="side-menu__icon fe fe-command"></i><span className="side-menu__label">Icons</span><i className="angle fa fa-angle-right"></i></a>
							</Link>
							<ul className="slide-menu">
								<li><Link href="icons"><a>Font Awesome</a></Link></li>
								<li><Link href="icons2"><a>Material Design Icons</a></Link></li>
								<li><Link href="icons3"><a>Simple Line Icons</a></Link></li>
								<li><Link href="icons4"><a>Feather Icons</a></Link></li>
								<li><Link href="icons5"><a>Ionic Icons</a></Link></li>
								<li><Link href="icons6"><a>Flag Icons</a></Link></li>
								<li><Link href="icons7"><a>pe7 Icons</a></Link></li>
								<li><Link href="icons8"><a>Themify Icons</a></Link></li>
								<li><Link href="icons9"><a>Typicons Icons</a></Link></li>
								<li><Link href="icons10"><a>Weather Icons</a></Link></li>
							</ul>
						</li>
					</ul>
				</aside>
    </>
  );
}
