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
        publication_date: new Date("2020-04-02"),
        icon: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/9821/9781982147662.jpg"
    },
    {
        id: 2,
        title: "The Duke",
        author: "Ian Lloyd",
        category: 'Biography',
        price: 72.64,
        publication_date: new Date("2021-10-01"),
        icon: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/7509/9780750996082.jpg"
    },
    {
        id: 3,
        title: 'Becoming',
        author: "Michelle Obama",
        category: 'Biography',
        price: 109.64,
        publication_date: new Date("2018-11-14"),
        icon: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/2413/9780241334140.jpg",
    },
    {
        id: 4,
        title: 'Lore',
        author: "Alexandra Bracken",
        category: 'Children',
        price: 47.94,
        publication_date: new Date("2021-01-07"),
        icon: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4847/9781484778203.jpg"
    },
    {
        id: 5,
        title: "Amy & Roger's Epic Detour",
        author: "Morgan Matson",
        category: 'Children',
        price: 52.09,
        publication_date: new Date("2011-05-03"),
        icon: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4711/9781471124709.jpg"
    },
    {
        id: 6,
        title: "It Ends With Us",
        author: "Colleen Hoover",
        category: 'Fiction',
        price: 46.75,
        publication_date: new Date("2016-08-02"),
        icon: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4711/9781471156267.jpg"
    },  
    {
        id: 7,
        title: "Testing Business Ideas",
        author: "David J. Bland, Alexander Osterwalder",
        category: 'Business',
        price: 83.62,
        publication_date: new Date("2019-11-12"),
        icon: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9783/5935/9783593511962.jpg"
    },
    {
        id: 8,
        title: "Digital Finance",
        author: "Baxter Hines",
        category: 'Business',
        price: 66.49,
        publication_date: new Date("2021-01-28"),
        icon: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/1197/9781119756309.jpg"
    },
    {
        id: 9,
        title: "Clean code",
        author: "Robert Martin",
        category: 'Computing',
        price: 126.54,
        publication_date: new Date("2009-03-01"),
        icon: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1323/9780132350884.jpg"
    },
    {
        id: 10,
        title: "Design Patterns",
        author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
        category: 'Computing',
        price: 194.18,
        publication_date: new Date("1997-07-01"),
        icon: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/2016/9780201633610.jpg",
    },
    {
        id: 11,
        title: "The Hollows",
        author: "Mark Edwards",
        category: 'Crime & Thriller',
        price: 52.17,
        publication_date: new Date("2021-07-08"),
        icon: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5420/9781542026826.jpg"
    },
    {
        id: 12,
        title: "The Silent Patient",
        author: "Alex Michaelides",
        category: 'Crime & Thriller',
        price: 44.72,
        publication_date: new Date("2020-01-15"),
        icon: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4091/9781409181620.jpg"
    },
    {
        id: 13,
        title: "Man's Search For Meaning",
        author: "Viktor E Frankl",
        category: 'History',
        price: 41.31,
        publication_date: new Date("2015-10-06"),
        icon: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/8460/9781846041242.jpg"
    },
    {
        id: 14,
        title: "Leaders Eat Last",
        author: "Simon Sinek",
        category: 'History',
        price: 58.32,
        publication_date: new Date("2017-07-12"),
        icon: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/6709/9780670923175.jpg"
    },
    {
        id: 15,
        title: "This is Going to Hurt",
        author: "Adam Kay",
        category: 'Humour',
        price: 44.50,
        publication_date: new Date("2018-04-19"),
        icon: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5098/9781509899470.jpg"
    },
    {
        id: 16,
        title: "Get Your Shit Together",
        author: "Sarah Knight",
        category: 'Humour',
        price: 62.18,
        publication_date: new Date("2016-12-29"),
        icon: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9783/5483/9783548377537.jpg"
    },
    {
        id: 17,
        title: "12 Rules for Life",
        author: "Jordan B. Peterson",
        category: 'Medical',
        price: 58.39,
        publication_date: new Date("2019-05-07"),
        icon: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1419/9780141988511.jpg"
    },
    {
        id: 18,
        title: "Maybe You Should Talk to Someone",
        author: "Lori Gottlieb",
        category: 'Medical',
        price: 78.20,
        publication_date: new Date("2019-05-09"),
        icon: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/9116/9781911617044.jpg"
    }
];