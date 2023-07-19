const PRODUCTS = [
    {
        _id: 1,
        url: "https://scontent.ftas2-2.fna.fbcdn.net/v/t45.5328-4/358491013_6782801308444772_1482896090562313405_n.jpg?stp=c0.0.526.526a_dst-jpg_p526x395&_nc_cat=107&ccb=1-7&_nc_sid=1a0e84&_nc_ohc=GjG-vz5CT4cAX_VDhGi&_nc_ht=scontent.ftas2-2.fna&oh=00_AfCv5VolNInGfEmIBRxHAwwHttg1w7L_-vey34KfrrImRA&oe=64B6865D",
        price: "3,345,000 so'm",
        desc: "Ichki xonalar  zamonaviy va uyg'un ko'rinishi uchun dizayn dasda das das",
        location: "Andijan"
    },
    {
        _id: 2,
        url: "https://scontent.ftas2-2.fna.fbcdn.net/v/t45.5328-4/358491013_6782801308444772_1482896090562313405_n.jpg?stp=c0.0.526.526a_dst-jpg_p526x395&_nc_cat=107&ccb=1-7&_nc_sid=1a0e84&_nc_ohc=GjG-vz5CT4cAX_VDhGi&_nc_ht=scontent.ftas2-2.fna&oh=00_AfCv5VolNInGfEmIBRxHAwwHttg1w7L_-vey34KfrrImRA&oe=64B6865D",
        price: "3,345,000 so'm",
        desc: "Ichki xonalar  zamonaviy va uyg'un ko'rinishi uchun dizayn dasda das das",
        location: "Andijan"
    },
    {
        _id: 3,
        url: "https://scontent.ftas2-2.fna.fbcdn.net/v/t45.5328-4/358491013_6782801308444772_1482896090562313405_n.jpg?stp=c0.0.526.526a_dst-jpg_p526x395&_nc_cat=107&ccb=1-7&_nc_sid=1a0e84&_nc_ohc=GjG-vz5CT4cAX_VDhGi&_nc_ht=scontent.ftas2-2.fna&oh=00_AfCv5VolNInGfEmIBRxHAwwHttg1w7L_-vey34KfrrImRA&oe=64B6865D",
        price: "3,345,000 so'm",
        desc: "Ichki xonalar  zamonaviy va uyg'un ko'rinishi uchun dizayn dasda das das",
        location: "Andijan"
    },
    {
        _id: 4,
        url: "https://scontent.ftas2-2.fna.fbcdn.net/v/t45.5328-4/358491013_6782801308444772_1482896090562313405_n.jpg?stp=c0.0.526.526a_dst-jpg_p526x395&_nc_cat=107&ccb=1-7&_nc_sid=1a0e84&_nc_ohc=GjG-vz5CT4cAX_VDhGi&_nc_ht=scontent.ftas2-2.fna&oh=00_AfCv5VolNInGfEmIBRxHAwwHttg1w7L_-vey34KfrrImRA&oe=64B6865D",
        price: "3,345,000 so'm",
        desc: "Ichki xonalar  zamonaviy va uyg'un ko'rinishi uchun dizayn dasda das das",
        location: "Andijan"
    },
    {
        _id: 5,
        url: "https://scontent.ftas2-2.fna.fbcdn.net/v/t45.5328-4/358491013_6782801308444772_1482896090562313405_n.jpg?stp=c0.0.526.526a_dst-jpg_p526x395&_nc_cat=107&ccb=1-7&_nc_sid=1a0e84&_nc_ohc=GjG-vz5CT4cAX_VDhGi&_nc_ht=scontent.ftas2-2.fna&oh=00_AfCv5VolNInGfEmIBRxHAwwHttg1w7L_-vey34KfrrImRA&oe=64B6865D",
        price: "3,345,000 so'm",
        desc: "Ichki xonalar  zamonaviy va uyg'un ko'rinishi uchun dizayn dasda das das",
        location: "Andijan"
    },
    {
        _id: 6,
        url: "https://scontent.ftas2-2.fna.fbcdn.net/v/t45.5328-4/358491013_6782801308444772_1482896090562313405_n.jpg?stp=c0.0.526.526a_dst-jpg_p526x395&_nc_cat=107&ccb=1-7&_nc_sid=1a0e84&_nc_ohc=GjG-vz5CT4cAX_VDhGi&_nc_ht=scontent.ftas2-2.fna&oh=00_AfCv5VolNInGfEmIBRxHAwwHttg1w7L_-vey34KfrrImRA&oe=64B6865D",
        price: "3,345,000 so'm",
        desc: "Ichki xonalar  zamonaviy va uyg'un ko'rinishi uchun dizayn dasda das das",
        location: "Andijan"
    },
    {
        _id: 7,
        url: "https://scontent.ftas2-2.fna.fbcdn.net/v/t45.5328-4/358491013_6782801308444772_1482896090562313405_n.jpg?stp=c0.0.526.526a_dst-jpg_p526x395&_nc_cat=107&ccb=1-7&_nc_sid=1a0e84&_nc_ohc=GjG-vz5CT4cAX_VDhGi&_nc_ht=scontent.ftas2-2.fna&oh=00_AfCv5VolNInGfEmIBRxHAwwHttg1w7L_-vey34KfrrImRA&oe=64B6865D",
        price: "3,345,000 so'm",
        desc: "Ichki xonalar  zamonaviy va uyg'un ko'rinishi uchun dizayn dasda das das",
        location: "Andijan"
    },
    {
        _id: 8,
        url: "https://scontent.ftas2-2.fna.fbcdn.net/v/t45.5328-4/358491013_6782801308444772_1482896090562313405_n.jpg?stp=c0.0.526.526a_dst-jpg_p526x395&_nc_cat=107&ccb=1-7&_nc_sid=1a0e84&_nc_ohc=GjG-vz5CT4cAX_VDhGi&_nc_ht=scontent.ftas2-2.fna&oh=00_AfCv5VolNInGfEmIBRxHAwwHttg1w7L_-vey34KfrrImRA&oe=64B6865D",
        price: "3,345,000 so'm",
        desc: "Ichki xonalar  zamonaviy va uyg'un ko'rinishi uchun dizayn dasda das das",
        location: "Andijan"
    },
    {
        _id: 9,
        url: "https://scontent.ftas2-2.fna.fbcdn.net/v/t45.5328-4/358491013_6782801308444772_1482896090562313405_n.jpg?stp=c0.0.526.526a_dst-jpg_p526x395&_nc_cat=107&ccb=1-7&_nc_sid=1a0e84&_nc_ohc=GjG-vz5CT4cAX_VDhGi&_nc_ht=scontent.ftas2-2.fna&oh=00_AfCv5VolNInGfEmIBRxHAwwHttg1w7L_-vey34KfrrImRA&oe=64B6865D",
        price: "3,345,000 so'm",
        desc: "Ichki xonalar  zamonaviy va uyg'un ko'rinishi uchun dizayn dasda das das",
        location: "Andijan"
    }
]

export default PRODUCTS