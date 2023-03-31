const fs = require('fs')

const getMessageNotFound = () => {
	const data = fs.readFileSync('./data/challenge/not-found.json', 'utf-8')
	const {message} = JSON.parse(data)
	return message
}

const getDataServices = () => {
	const data = fs.readFileSync('./data/challenge/our-services.json', 'utf-8')
	const response = JSON.parse(data)
	return response
}

const getDataWhyUs = () => {
	const data = fs.readFileSync('./data/challenge/why-us.json', 'utf-8')
	const response = JSON.parse(data)
	return response
}

const getDataTestimonial = () => {
	const data = fs.readFileSync('./data/challenge/testimonial.json', 'utf-8')
	const response = JSON.parse(data)
	return response
}

const getDataFaq = () => {
	const data = fs.readFileSync('./data/challenge/faq.json', 'utf-8')
	const response = JSON.parse(data)
	return response
}


module.exports = {
	getMessageNotFound,
	getDataServices,
	getDataWhyUs,
	getDataTestimonial,
	getDataFaq
}