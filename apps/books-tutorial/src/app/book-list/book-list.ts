export type Category = 'Biography' | 'Children' |'Business' | 'Computing' | 'Crime & Thriller' | 'Fiction' |
'History' | 'Humour' | 'Medical' ;

export interface book {
    id:number;
    title: string;
    author: string;
    category: Category;
    price: number;
    publication_date: Date;
    icon?:string;
};

export const Books: Array<book> = [
    {
        id: 1,
        title: "The Seven Husbands of Evelyn Hugo",
        author: "Taylor Jenkins Reid",
        category: 'Fiction',
        price: 47.05,
        publication_date: new Date("2020-04-02")
    },
    {
        id: 2,
        title: "The Duke",
        author: "Ian Lloyd",
        category: 'Biography',
        price: 72.64,
        publication_date: new Date("2021-10-01")
    },
    {
        id: 3,
        title: 'Becoming',
        author: "Michelle Obama",
        category: 'Biography',
        price: 109.64,
        publication_date: new Date("2018-11-14")
    },
    {
        id: 4,
        title: 'Lore',
        author: "Alexandra Bracken",
        category: 'Children',
        price: 47.94,
        publication_date: new Date("2021-01-07")
    },
    {
        id: 5,
        title: "Amy & Roger's Epic Detour",
        author: "Morgan Matson",
        category: 'Children',
        price: 52.09,
        publication_date: new Date("2011-05-03")
    },
    {
        id: 6,
        title: "It Ends With Us",
        author: "Colleen Hoover",
        category: 'Fiction',
        price: 46.75,
        publication_date: new Date("2016-08-02")
    },  
    {
        id: 7,
        title: "Testing Business Ideas",
        author: "David J. Bland, Alexander Osterwalder",
        category: 'Business',
        price: 83.62,
        publication_date: new Date("2019-11-12")
    },
    {
        id: 8,
        title: "Digital Finance",
        author: "Baxter Hines",
        category: 'Business',
        price: 66.49,
        publication_date: new Date("2021-01-28")
    },
    {
        id: 9,
        title: "Clean code",
        author: "Robert Martin",
        category: 'Computing',
        price: 126.54,
        publication_date: new Date("2009-03-01")
    },
    {
        id: 10,
        title: "Design Patterns",
        author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
        category: 'Computing',
        price: 194.18,
        publication_date: new Date("1997-07-01")
    },
    {
        id: 11,
        title: "The Hollows",
        author: "Mark Edwards",
        category: 'Crime & Thriller',
        price: 52.17,
        publication_date: new Date("2021-07-08")
    },
    {
        id: 12,
        title: "The Silent Patient",
        author: "Alex Michaelides",
        category: 'Crime & Thriller',
        price: 44.72,
        publication_date: new Date("2020-01-15")
    },
    {
        id: 13,
        title: "Man's Search For Meaning",
        author: "Viktor E Frankl",
        category: 'History',
        price: 41.31,
        publication_date: new Date("2015-10-06")
    },
    {
        id: 14,
        title: "Leaders Eat Last",
        author: "Simon Sinek",
        category: 'History',
        price: 58.32,
        publication_date: new Date("2017-07-12")
    },
    {
        id: 15,
        title: "This is Going to Hurt",
        author: "Adam Kay",
        category: 'Humour',
        price: 44.50,
        publication_date: new Date("2018-04-19")
    },
    {
        id: 16,
        title: "Get Your Shןt Together",
        author: "Sarah Knight",
        category: 'Humour',
        price: 62.18,
        publication_date: new Date("2016-12-29")
    },
    {
        id: 17,
        title: "12 Rules for Life",
        author: "Jordan B. Peterson",
        category: 'Medical',
        price: 58.39,
        publication_date: new Date("2019-05-07")
    },
    {
        id: 18,
        title: "Maybe You Should Talk to Someone",
        author: "Lori Gottlieb",
        category: 'Medical',
        price: 78.20,
        publication_date: new Date("2019-05-09")
    }
];