export interface Clients {
    id: number,
    name: string,
    gender: string,
    phone: number,
    amount: number,
    next_contact_date: Date,
    established_date: Date,
    href: {
        detial: string
    }
}

export interface Client {
    id: number,
    name: string,
    gender: string,
    phone: number,
    amount: number,
    next_contact_date: Date,
    established_date: Date,
    href: {
        records: string,
        expense: string
    }
}
