export const load = async () => {
    const res = await fetch('http://127.0.0.1:8000/services');
    const serviceList = await res.json();
    console.log(serviceList)
    return {
        services: serviceList.services
    };
}