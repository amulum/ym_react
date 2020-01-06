import React from 'react'
import '../styles/bootstrap.min.css'
import Search from './Search';

class Header extends React.Component {
	render() {
		return (
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<a class="navbar-brand" href="#">
					<img src={require('../images/logo.svg')} width="50px"/><span>KabarKabar</span>
				</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav mr-auto">
						<li class="nav-item active">
							<a class="nav-link" href="#">Sepak Bola <span class="sr-only">(current)</span></a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Ekonomi</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Politik</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Hiburan</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Hiburan</a>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Lainnya
							</a>
							<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
							<a class="dropdown-item" href="#">Gaming</a>
							<a class="dropdown-item" href="#">Korea</a>
							<a class="dropdown-item" href="#">Japun</a>
							</div>
						</li>
					</ul>
					<Search/>
					<ul class='navbar-nav ml-auto'>
						<li class="nav-item">
							<a class="nav-link" href="#">Masuk</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Daftar</a>
						</li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default Header;