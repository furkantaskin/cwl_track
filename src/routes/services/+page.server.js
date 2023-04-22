const getCustomers = async () => {
	const res = await fetch('http://127.0.0.1:8000/get-customers');
	const customerList = await res.json();
	return customerList
}

export const load = async () => {
	const res = await fetch('http://127.0.0.1:8000/get-services');
	const serviceList = await res.json();
	return {
		services: serviceList,
		customers: getCustomers()

	};
};
