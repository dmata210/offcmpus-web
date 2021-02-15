import {Property} from '../../API/queries/types/graphqlFragmentTypes'

export const getPropertyAddress = (prop: Property) => {
    let addr: string = `${prop.address_line}, `;
    if (prop.address_line_2) {
        addr += `${prop.address_line_2}, `;
    }
    addr += `${prop.city} ${prop.state}, ${prop.zip}`;
    return addr;
}

export const getDateAbbr = (iso: string, {withTime = true}: {withTime: boolean}): string => {
    let months: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let date: Date = new Date(iso);
   
    if (withTime) return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} : ${date.getHours()}:${date.getMinutes()}`;
    else return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

export const getDate = (iso: string, {withTime = true}: {withTime: boolean}): string => {
    let months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "Septemer", "Octoboer", "November", "December"];
    let date: Date = new Date(iso);
   
    if (withTime) return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} : ${date.getHours()}:${date.getMinutes()}`;
    else return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}