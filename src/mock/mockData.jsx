export const activeOrdersData = [
    {
        buyer:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        gig:"Create a website design for an ecommerce platform",
        dueOn:"Jan 21, 2021",
        total:"$1000"
    },
    {
        buyer:"https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
        gig:"Create a social media strategy for a fitness brand",
        dueOn:"Apr 30, 2021",
        total:"$800"
    },
    
    {
        buyer:"https://media.istockphoto.com/id/1216968915/photo/head-shot-portrait-of-happy-young-african-american-businessman.jpg?b=1&s=170667a&w=0&k=20&c=kJCGJ8U6cbYBgXZJzZdclEM-c4QL0LjklZjAqCAhNks=",
        gig:"Translate a 50-page document from English to Spanish",
        dueOn:"Jun 10, 2021",
        total:"$1200"
    },
    
    {
        buyer:"https://media.istockphoto.com/id/1358639504/photo/man-preparing-smart-phone-for-recording-vlog.jpg?b=1&s=170667a&w=0&k=20&c=oIGSUTrv-j44oLmk_T3tumZYW6M12mFX8c_GzpRSaks=",
        gig:"Design a logo and business card for a law firm",
        dueOn:"Aug 20, 2021",
        total:"$600"
    }  
]

export const activeOrdersColumns = [
    {
        header:"Buyer",
        accessorKey:"buyer",
        accessorFn: (rowData) => (
            <img src={rowData.buyer} alt="Buyer" style={{ width: "50px", height: "50px", borderRadius: "50%",objectFit:"cover" }} ></img>
          ),
    },
    {
        header:"Gig",
        accessorKey:"gig",
    },
    {
        header:"Due on",
        accessorKey:"dueOn",
    },
    {
        header:"Total",
        accessorKey:"total",
    },
]