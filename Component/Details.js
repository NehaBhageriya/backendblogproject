const get = (req, res) => {
    res.send([
        {
            "name": "neha",
            "title": "5 things you need to know about the Large Hadron Collider",
            "img": "https://images.indianexpress.com/2022/07/5-things-large-haldron-collider-cern.jpg",
        },
        {
            "name": "neha",
            "title": "EU lawmakers pass landmark tech rules, but enforcement a worry",
            "img": "https://images.indianexpress.com/2022/07/European-Union-DSA-DMA-passed.jpg",
        },
        {
            "name": "neha",
            "title": "83 per cent of crypto traders have issues with tax implementation: WazirX-ZebPay Survey",
            "img": "https://images.indianexpress.com/2022/06/Untitled-design-2022-06-01T184400.402-1.jpg",
        },
        {
            "name": "neha",
            "title": "These five smartphones are set to take the second half of 2022 by storm    ",
            "img": "https://images.indianexpress.com/2022/07/nothing-.jpg",
        },
        {
            "name": "neha",
            "title": "Redmi reveals K-series is coming back to India, could launch K50-series soon",
            "img": "https://images.indianexpress.com/2022/07/Redmi-K50-Pro.jpg",
        },
    ])
}
module.exports.apiController=get;