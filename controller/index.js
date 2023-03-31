const {
	getMessageNotFound,
	getDataServices,
	getDataWhyUs,
	getDataTestimonial,
	getDataFaq
} = require('../services')

const notFound = (req, res) => {
	const message = getMessageNotFound()
	res.status(404)
	res.render('404', {message})
}

const home = (req, res) => {
	const services = getDataServices()
	const whyUs = getDataWhyUs()
	const testimonial = getDataTestimonial()
	const faq = getDataFaq()
	res.status(200)
	res.render('index', {services, whyUs, testimonial, faq})
}

const getCars = (req, res) => {
	res.status(200)
	res.render('cars')
}


module.exports = {notFound, home, getCars}


