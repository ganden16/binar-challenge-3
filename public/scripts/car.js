class Component {
	constructor(cars) {
		this.cars = cars
	}
	render(){
		
	}
}

class Car extends Component {
	constructor(cars) {
		super(cars)
		this.cars = cars
	}

	render() {
		// console.log(this.cars)
		const wadah = document.getElementById('search-list')
		if(this.cars.length > 0) {
			wadah.innerHTML = ''
			this.cars.forEach(car => {
				const warnaTextSopir = car.available ? 'text-success' : 'text-danger'
				const textSopir = car.available ? 'Dengan Sopir' : 'Tanpa Sopir'

				wadah.innerHTML +=
					`	<div class="col-sm-4 mb-4">
							<div class="card px-3 scale border-1 border-opacity-10 shadow-lg " style="height: 650px;">
								<div class="px-2 pt-4">
									<img class="img-fluid rounded-1" style="width: 100%; height: 200px;" src="${car.image}" alt="car">
								</div>
								<div class="ms-auto me-3 mt-1">
									<p class="fw-bolder bg-opacity-25 ${warnaTextSopir}">${textSopir}</p>
								</div>
								<div class="card-body">
									<div class="row">
										<div class="row d-flex justify-content-around">
											<p class="fw-semibold">${car.manufacture}/${car.model}</p>
										</div>
										<h3 class="card-title fw-bolder">Rp ${car.rentPerDay}/hari</h3>
										<p class="card-text">${car.description}</p>
									</div>
									<div class="row mt-4">
										<ul type="none">
											<li class="mb-3"><img class="me-2 " src="img/fi_users.svg" alt=""> <span>${car.capacity} Orang</span></li>
											<li class="mb-3"><img class="me-2" src="img/fi_settings.svg" alt=""> <span>${car.transmission}</span></li>
											<li class="mb-3"><img class="me-2" src="img/fi_calendar.svg" alt=""> <span>Tahun ${car.year}</span></li>
										</ul>
									</div>
									<div id="btn-pilih-mobil" class="row px-3 mb-auto" >
										<button class="btn btn-success py-2 fw-semibold">Pilih Mobil</button>
									</div>
								</div>
							</div>
						</div>`
			});
		} else {
			wadah.innerHTML =
				`<div class="d-flex justify-content-center">
					<span class="alert alert-danger">Data Mobil Tidak Ditemukan <img src="./img/triangel.svg" style="font-size: 20px;"></img></span>
				</div>`
		}
	}
}

