function getInputValues() {
	const inputTipeDriver = document.getElementById('tipeDriver').value
	const inputTanggal = document.getElementById('tanggal').value
	const inputWaktuJemput = document.getElementById('waktuJemput').value
	const inputJumlahPenumpang = document.getElementById('jumlahPenumpang').value
	return {
		inputTipeDriver, inputTanggal, inputWaktuJemput, inputJumlahPenumpang
	}
}

async function getDataCars() {
	const res = await fetch("https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json")
	const data = await res.json()
	return data
}

async function getFilterCars() {
	const {inputTipeDriver, inputTanggal, inputWaktuJemput, inputJumlahPenumpang} = getInputValues()
	const cars = await getDataCars()
	let result = null

	if(inputTipeDriver != null) {
		result = cars.filter(car => {
			if(car.available.toString() === inputTipeDriver) return true
		})
	}

	if(inputTanggal && inputWaktuJemput) {
		const zona = "+0700"
		const tanggalSplit = inputTanggal.split("/");
		const hari = tanggalSplit[1];
		const bulan = tanggalSplit[0];
		const tahun = tanggalSplit[2];
		const formatInput = `${tahun}-${bulan}-${hari}T${inputWaktuJemput}:00${zona}`
		const waktuFilter = new Date(formatInput);

		result = result.filter(car => {
			const waktuTersedia = new Date(car.availableAt)
			if(waktuTersedia > waktuFilter) return true
		})
	}

	if(inputJumlahPenumpang) {
		result = result.filter(car => {
			if(inputJumlahPenumpang <= car.capacity) return true
		})
	}

	// console.log(inputTipeDriver, inputTanggal, inputWaktuJemput, inputJumlahPenumpang)
	// console.log(cars)
	// console.log(result)

	return result
}

async function getSearchCars() {
	const filteredCars = await getFilterCars()
	const obj = new Car(filteredCars)
	const res = obj.render()
	
	// console.log(res)
}

function handleSubmitSearchCars(event) {
	event.preventDefault()
	getSearchCars()
}