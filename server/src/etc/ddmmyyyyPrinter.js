
export function parseDDMMYYYYDate(dateString) {
    const [datePart] = dateString.split(' ');
    const [year, month, day] = datePart.split('-'); 
    return [day, month, year]; 
}