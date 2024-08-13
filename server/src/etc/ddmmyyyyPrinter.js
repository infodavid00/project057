
export function parseDDMMYYYYDate(dateString) {
    const [datePart] = dateString.split(' ');
    const [year, month, day] = datePart.split('-'); 
    return [day, month, year]; 
}

export function getDateArray(date) {
    const d = new Date(date);
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0'); 
    const yyyy = String(d.getFullYear());
    return [dd, mm, yyyy];
}

